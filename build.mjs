import { build } from 'esbuild';
import { compile } from 'svelte/compiler';
import { compile as compileMarkdown } from 'mdsvex';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'support-kb/src');
const out = join(root, 'site');
await mkdir(join(root, '.build'), { recursive: true });
await mkdir(out, { recursive: true });
async function pagesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(e => e.isDirectory() ? pagesIn(join(dir,e.name)) : e.name === '+page.svx' ? [join(dir,e.name)] : []));
  return nested.flat();
}
const pageFiles = await pagesIn(join(src, 'routes/kb'));
const pages = [];
for (const path of pageFiles) {
  const source = await readFile(path, 'utf8');
  const result = await compileMarkdown(source, { filename: path });
  const metadata = result.data.fm;
  pages.push({ path, route: '/'+relative(join(src,'routes'),dirname(path)).split('\\').join('/'), metadata });
}
const tenants = await Promise.all((await readdir(join(src,'lib/data/tenants'))).map(async name => JSON.parse(await readFile(join(src,'lib/data/tenants',name),'utf8'))));
const pageIndex = Object.fromEntries(pages.filter(p=>p.route!=='/kb').map(p=>['/src/routes'+p.route+'/+page.svx',{metadata:p.metadata}]));
function plugin(generate) {
  return {
    name: 'course-kb',
    setup(b) {
      b.onResolve({ filter: /^#lib\// }, async args => {
        const base = join(src,'lib',args.path.slice(5));
        return { path: /\.(svelte|ts|json)$/.test(base) ? base : base+'.ts' };
      });
      b.onLoad({ filter: /\.(svelte|svx)$/ }, async args => {
        let source = await readFile(args.path,'utf8');
        if (args.path.endsWith('.svx')) {
          source = (await compileMarkdown(source, { filename: args.path, layout: { runbook: join(src,'lib/layouts/runbook.svelte') } })).code;
        }
        source = source.replace(/import\.meta\.glob<\{ metadata: Meta \}>\([^)]*\)/, JSON.stringify(pageIndex));
        const result = compile(source, { filename: args.path, generate, css: 'injected' });
        const actionable = result.warnings.filter(w => !['a11y_label_has_associated_control','a11y_no_noninteractive_tabindex'].includes(w.code));
        for (const w of actionable) console.warn(`${relative(root,args.path)}: ${w.code}: ${w.message}`);
        return { contents: result.js.code, loader: 'js', resolveDir: dirname(args.path) };
      });
      b.onLoad({filter:/\/locales\.ts$/}, async args=>({
        contents:(await readFile(args.path,'utf8')).replace(/import\.meta\.glob<Tenant>\([^)]*\)/,JSON.stringify(Object.fromEntries(tenants.map(t=>[t.handle,t])))),
        loader:'ts', resolveDir:dirname(args.path)
      }));
    }
  };
}
const imports = pages.map((p,i)=>`import P${i} from ${JSON.stringify(p.path)};`).join('\n');
const components = pages.map((p,i)=>`${JSON.stringify(p.route)}:P${i}`).join(',');
const serverEntry = join(root,'.build/server-entry.mjs');
await writeFile(serverEntry,`${imports}\nimport { render } from 'svelte/server';\nexport const routes = {${components}};\nexport {render};\n`);
await build({entryPoints:[serverEntry],outfile:join(root,'.build/server.mjs'),bundle:true,platform:'node',format:'esm',plugins:[plugin('server')],logLevel:'warning'});
const { routes, render } = await import('./.build/server.mjs?build='+Date.now());
const routeList = pages.map(p=>p.route);
await writeFile(join(root,'.build/client-entry.mjs'),`${imports}\nimport {hydrate} from 'svelte';\nconst routes={${components}};\nconst route=document.getElementById('app').dataset.route;hydrate(routes[route],{target:document.getElementById('app')});\n`);
await build({entryPoints:[join(root,'.build/client-entry.mjs')],outfile:join(out,'app.js'),bundle:true,platform:'browser',format:'esm',conditions:['browser'],plugins:[plugin('client')],logLevel:'warning'});
for (const route of routeList) {
  const {body,head} = render(routes[route]);
  const dest = join(out,route.slice(1));
  await mkdir(dest,{recursive:true});
  await writeFile(join(dest,'index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${head}</head><body><div id="app" data-route="${route}">${body}</div><script type="module" src="/app.js"></script></body></html>`);
}
await writeFile(join(out,'index.html'),'<!doctype html><meta http-equiv="refresh" content="0;url=/kb/incidents/4471-review/">');
console.log(`Rendered ${routeList.length} pages with the original Svelte components into site/.`);
