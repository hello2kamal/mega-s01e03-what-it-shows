import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { uniqueById, groupByCause, ticketCause, readAs } from './support-kb/src/lib/kb/causes.ts';

const root = dirname(fileURLToPath(import.meta.url));
const data = join(root, 'support-kb/src/lib/data');
const rows = JSON.parse(readFileSync(join(data, 'reports-4471.json'), 'utf8'));
const tenants = readdirSync(join(data, 'tenants')).map(name => JSON.parse(readFileSync(join(data, 'tenants', name), 'utf8')));
const byHandle = new Map(tenants.map(t => [t.handle, t]));
const notes = JSON.parse(readFileSync(join(data, 'desk-notes.json'), 'utf8'));
const unique = uniqueById(rows);
const merged = unique.filter(r => r.mergedInto === 4471);
const groups = groupByCause(merged, r => byHandle.get(r.tenant));
const result = {
  scope: 'Export dated 2026-10-04; not a live queue measurement',
  exportRows: rows.length,
  uniqueReports: unique.length,
  duplicateRows: rows.length - unique.length,
  mergedReports: merged.length,
  ticketCause: ticketCause(groups, 4471),
  groups: groups.map(g => ({
    ...g,
    reports: g.reports.map(r => r.id),
    oneDayMoveNotes: readAs(g, notes.oneDayMove),
    examples: g.reports.slice(0, 3),
    tagDisagreements: g.reports.filter(r => r.meta.intakeTag !== g.cause).length,
  })),
  deskNotes: notes.oneDayMove.map(id => merged.find(r => r.id === id)),
};
if (groups.reduce((n, g) => n + g.reports.length, 0) !== merged.length) throw new Error('Report coverage mismatch');
writeFileSync(join(root, 'analysis.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ ...result, groups: result.groups.map(({reports, examples, ...g}) => g), deskNotes: result.deskNotes.map(r=>({id:r.id,tenant:r.tenant,channel:r.channel,body:r.body})) }, null, 2));
