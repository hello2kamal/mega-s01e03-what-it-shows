// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/version.js
var PUBLIC_VERSION = "5";

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/disclose-version.js
if (typeof window !== "undefined") {
  ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/flags/index.js
var async_mode_flag = false;
var legacy_mode_flag = false;
var tracing_mode_flag = false;
function enable_legacy_mode_flag() {
  legacy_mode_flag = true;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/flags/legacy.js
enable_legacy_mode_flag();

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/constants.js
var EACH_ITEM_REACTIVE = 1;
var EACH_INDEX_REACTIVE = 1 << 1;
var EACH_IS_CONTROLLED = 1 << 2;
var EACH_IS_ANIMATED = 1 << 3;
var EACH_ITEM_IMMUTABLE = 1 << 4;
var PROPS_IS_IMMUTABLE = 1;
var PROPS_IS_RUNES = 1 << 1;
var PROPS_IS_UPDATED = 1 << 2;
var PROPS_IS_BINDABLE = 1 << 3;
var PROPS_IS_LAZY_INITIAL = 1 << 4;
var TRANSITION_OUT = 1 << 1;
var TRANSITION_GLOBAL = 1 << 2;
var TEMPLATE_FRAGMENT = 1;
var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
var TEMPLATE_USE_SVG = 1 << 2;
var TEMPLATE_USE_MATHML = 1 << 3;
var HYDRATION_START = "[";
var HYDRATION_START_ELSE = "[!";
var HYDRATION_START_FAILED = "[?";
var HYDRATION_END = "]";
var HYDRATION_ERROR = {};
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var ELEMENT_IS_INPUT = 1 << 2;
var UNINITIALIZED = /* @__PURE__ */ Symbol("uninitialized");
var FILENAME = /* @__PURE__ */ Symbol("filename");
var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";

// node_modules/.pnpm/esm-env@1.2.2/node_modules/esm-env/dev-fallback.js
var node_env = globalThis.process?.env?.NODE_ENV;
var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var includes = Array.prototype.includes;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
function is_function(thing) {
  return typeof thing === "function";
}
var noop = () => {
};
function run(fn) {
  return fn();
}
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/constants.js
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var MANAGED_EFFECT = 1 << 24;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var BOUNDARY_EFFECT = 1 << 7;
var PAUSED = 1 << 8;
var CONNECTED = 1 << 9;
var CLEAN = 1 << 10;
var DIRTY = 1 << 11;
var MAYBE_DIRTY = 1 << 12;
var INERT = 1 << 13;
var DESTROYED = 1 << 14;
var REACTION_RAN = 1 << 15;
var DESTROYING = 1 << 25;
var EFFECT_TRANSPARENT = 1 << 16;
var EAGER_EFFECT = 1 << 17;
var HEAD_EFFECT = 1 << 18;
var EFFECT_PRESERVED = 1 << 19;
var USER_EFFECT = 1 << 20;
var EFFECT_OFFSCREEN = 1 << 25;
var REACTION_IS_UPDATING = 1 << 21;
var ASYNC = 1 << 22;
var ERROR_VALUE = 1 << 23;
var STATE_SYMBOL = /* @__PURE__ */ Symbol("$state");
var COMPONENT_SYMBOL = /* @__PURE__ */ Symbol("component");
var LEGACY_PROPS = /* @__PURE__ */ Symbol("legacy props");
var LOADING_ATTR_SYMBOL = /* @__PURE__ */ Symbol("");
var PROXY_PATH_SYMBOL = /* @__PURE__ */ Symbol("proxy path");
var ATTRIBUTES_CACHE = /* @__PURE__ */ Symbol("attributes");
var CLASS_CACHE = /* @__PURE__ */ Symbol("class");
var STYLE_CACHE = /* @__PURE__ */ Symbol("style");
var TEXT_CACHE = /* @__PURE__ */ Symbol("text");
var FORM_RESET_HANDLER = /* @__PURE__ */ Symbol("form reset");
var HMR_ANCHOR = /* @__PURE__ */ Symbol("hmr anchor");
var STALE_REACTION = new class StaleReactionError extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
var IS_XHTML = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function await_reactivity_loss(name) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${name}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_reactivity_loss`);
  }
}
function await_waterfall(name, location) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_waterfall
%cAn async derived, \`${name}\` (${location}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
https://svelte.dev/e/await_waterfall`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_waterfall`);
  }
}
function derived_inert() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] derived_inert
%cReading a derived belonging to a now-destroyed effect may result in stale values
https://svelte.dev/e/derived_inert`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/derived_inert`);
  }
}
function hydration_attribute_changed(attribute, html2, value) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function hydration_mismatch(location) {
  if (dev_fallback_default) {
    console.warn(
      `%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`,
      bold,
      normal
    );
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function lifecycle_double_unmount() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function select_multiple_invalid_value() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] select_multiple_invalid_value
%cThe \`value\` property of a \`<select multiple>\` element should be an array, but it received a non-array value. The selection will be kept as is.
https://svelte.dev/e/select_multiple_invalid_value`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}
function svelte_boundary_reset_noop() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] svelte_boundary_reset_noop
%cA \`<svelte:boundary>\` \`reset\` function only resets the boundary the first time it is called
https://svelte.dev/e/svelte_boundary_reset_noop`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/hydration.js
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(get_next_sibling(hydrate_node));
}
function reset(node) {
  if (!hydrating) return;
  if (get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function skip_nodes(remove = true) {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === COMMENT_NODE) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE || // "[1", "[2", etc. for if blocks
      data[0] === "[" && !isNaN(Number(data.slice(1)))) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    if (remove) node.remove();
    node = next2;
  }
}
function read_hydration_instruction(node) {
  if (!node || node.nodeType !== COMMENT_NODE) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return (
    /** @type {Comment} */
    node.data
  );
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/shared/errors.js
function invariant_violation(message) {
  if (dev_fallback_default) {
    const error = new Error(`invariant_violation
An invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app \u2014 please open an issue at https://github.com/sveltejs/svelte, citing the following message: "${message}"
https://svelte.dev/e/invariant_violation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/invariant_violation`);
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/errors.js
function async_derived_orphan() {
  if (dev_fallback_default) {
    const error = new Error(`async_derived_orphan
Cannot create a \`$derived(...)\` with an \`await\` expression outside of an effect tree
https://svelte.dev/e/async_derived_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/async_derived_orphan`);
  }
}
function bind_invalid_checkbox_value() {
  if (dev_fallback_default) {
    const error = new Error(`bind_invalid_checkbox_value
Using \`bind:value\` together with a checkbox input is not allowed. Use \`bind:checked\` instead
https://svelte.dev/e/bind_invalid_checkbox_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/bind_invalid_checkbox_value`);
  }
}
function derived_references_self() {
  if (dev_fallback_default) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function each_key_duplicate(a, b, value) {
  if (dev_fallback_default) {
    const error = new Error(`each_key_duplicate
${value ? `Keyed each block has duplicate key \`${value}\` at indexes ${a} and ${b}` : `Keyed each block has duplicate key at indexes ${a} and ${b}`}
https://svelte.dev/e/each_key_duplicate`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_duplicate`);
  }
}
function each_key_volatile(index2, a, b) {
  if (dev_fallback_default) {
    const error = new Error(`each_key_volatile
Keyed each block has key that is not idempotent \u2014 the key for item at index ${index2} was \`${a}\` but is now \`${b}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_volatile`);
  }
}
function effect_in_teardown(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  if (dev_fallback_default) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  if (dev_fallback_default) {
    const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function invalid_snippet() {
  if (dev_fallback_default) {
    const error = new Error(`invalid_snippet
Could not \`{@render}\` snippet due to the expression being \`null\` or \`undefined\`. Consider using optional chaining \`{@render snippet?.()}\`
https://svelte.dev/e/invalid_snippet`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/invalid_snippet`);
  }
}
function props_invalid_value(key2) {
  if (dev_fallback_default) {
    const error = new Error(`props_invalid_value
Cannot do \`bind:${key2}={undefined}\` when \`${key2}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function rune_outside_svelte(rune) {
  if (dev_fallback_default) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function state_descriptors_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  if (dev_fallback_default) {
    const error = new Error(`state_unsafe_mutation
Updating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function svelte_boundary_reset_onerror() {
  if (dev_fallback_default) {
    const error = new Error(`svelte_boundary_reset_onerror
A \`<svelte:boundary>\` \`reset\` function cannot be called while an error is still being handled
https://svelte.dev/e/svelte_boundary_reset_onerror`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dev/tracing.js
var tracing_expressions = null;
function tag(source2, label) {
  source2.label = label;
  tag_proxy(source2.v, label);
  return source2;
}
function tag_proxy(value, label) {
  value?.[PROXY_PATH_SYMBOL]?.(label);
  return value;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/shared/dev.js
function get_error(label) {
  const error = new Error();
  const stack2 = get_stack();
  if (stack2.length === 0) {
    return null;
  }
  stack2.unshift("\n");
  define_property(error, "stack", {
    value: stack2.join("\n")
  });
  define_property(error, "name", {
    value: label
  });
  return (
    /** @type {Error & { stack: string }} */
    error
  );
}
function get_stack() {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stack2 = new Error().stack;
  Error.stackTraceLimit = limit;
  if (!stack2) return [];
  const lines = stack2.split("\n");
  const new_lines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const posixified = line.replaceAll("\\", "/");
    if (line.trim() === "Error") {
      continue;
    }
    if (line.includes("validate_each_keys")) {
      return [];
    }
    if (posixified.includes("svelte/src/internal") || posixified.includes("node_modules/.vite")) {
      continue;
    }
    new_lines.push(line);
  }
  return new_lines;
}
function invariant(condition, message) {
  if (!dev_fallback_default) {
    throw new Error("invariant(...) was not guarded by if (DEV)");
  }
  if (!condition) invariant_violation(message);
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/context.js
var component_context = null;
function set_component_context(context) {
  component_context = context;
}
var dev_stack = null;
function set_dev_stack(stack2) {
  dev_stack = stack2;
}
var dev_current_component_function = null;
function set_dev_current_component_function(fn) {
  dev_current_component_function = fn;
}
function push(props, runes = false, fn) {
  component_context = {
    p: component_context,
    i: false,
    c: null,
    e: null,
    s: props,
    x: null,
    r: (
      /** @type {Effect} */
      active_effect
    ),
    l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
  };
  if (dev_fallback_default) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  var context = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context.e;
  if (effects !== null) {
    context.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  if (component2 !== void 0) {
    context.x = component2;
  }
  context.i = true;
  component_context = context.p;
  if (dev_fallback_default) {
    dev_current_component_function = component_context?.function ?? null;
  }
  return mark_as_component(component2);
}
function mark_as_component(component2 = {}) {
  define_property(component2, COMPONENT_SYMBOL, { value: true });
  return component2;
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/task.js
var micro_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  while (micro_tasks.length > 0) {
    run_micro_tasks();
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/status.js
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
function set_signal_status(signal, status6) {
  signal.f = signal.f & STATUS_MASK | status6;
}
function update_derived_status(derived2) {
  if ((derived2.f & CONNECTED) !== 0 || derived2.deps === null) {
    set_signal_status(derived2, CLEAN);
  } else {
    set_signal_status(derived2, MAYBE_DIRTY);
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/utils.js
function defer_effect(effect2, dirty_reactions) {
  if ((effect2.f & DIRTY) !== 0) {
    dirty_reactions.set(effect2, DIRTY);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0 && dirty_reactions.get(effect2) !== DIRTY) {
    dirty_reactions.set(effect2, MAYBE_DIRTY);
  }
  set_signal_status(effect2, CLEAN);
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dev/debug.js
function stringify_derived(fn) {
  return `{${fn.toString().replace(/^async \(\) => /, "").replace(/^\(/, "").replace(/\$\.get\((.+?)\)/g, (_, name) => name).replace(/\$\.track_reactivity_loss\((.+?)\)\(\)/g, (_, name) => name).replace(/\)$/, "")}}`;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/misc.js
var listening_to_form_reset = false;
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              e[FORM_RESET_HANDLER]?.();
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
      { capture: true }
    );
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function listen_to_event_and_reset_event(element2, event2, handler, on_reset = handler) {
  element2.addEventListener(event2, () => without_reactive_context(handler));
  const prev = (
    /** @type {any} */
    element2[FORM_RESET_HANDLER]
  );
  if (prev) {
    element2[FORM_RESET_HANDLER] = () => {
      prev();
      on_reset(true);
    };
  } else {
    element2[FORM_RESET_HANDLER] = () => on_reset(true);
  }
  add_form_reset_listener();
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/async.js
function flatten(blockers, sync, async2, fn) {
  const d = is_runes() ? derived : derived_safe_equal;
  var pending2 = blockers.filter((b) => !b.settled);
  var deriveds = sync.map(d);
  if (dev_fallback_default) {
    deriveds.forEach((d2, i) => {
      d2.label = sync[i].toString().replace("() => ", "").replaceAll("$.eager(() => ", "$state.eager(").replace(/\$\.get\((.+?)\)/g, (_, id) => id);
    });
  }
  if (async2.length === 0 && pending2.length === 0) {
    fn(deriveds);
    return;
  }
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  var restore = capture();
  var blocker_promise = pending2.length === 1 ? pending2[0].promise : pending2.length > 1 ? Promise.all(pending2.map((b) => b.promise)) : null;
  function finish(async3) {
    if ((parent.f & DESTROYED) !== 0) {
      return;
    }
    restore();
    try {
      fn([...deriveds, ...async3]);
    } catch (error) {
      invoke_error_boundary(error, parent);
    }
    unset_context();
  }
  var decrement_pending = increment_pending();
  if (async2.length === 0) {
    blocker_promise.then(() => finish([])).finally(decrement_pending);
    return;
  }
  function run3() {
    Promise.all(async2.map((expression) => async_derived(expression))).then(finish).catch((error) => invoke_error_boundary(error, parent)).finally(decrement_pending);
  }
  if (blocker_promise) {
    blocker_promise.then(() => {
      if ((parent.f & DESTROYED) !== 0) {
        decrement_pending();
        return;
      }
      restore();
      run3();
      unset_context();
    });
  } else {
    run3();
  }
}
function capture() {
  var previous_effect = (
    /** @type {Effect} */
    active_effect
  );
  var previous_reaction = active_reaction;
  var previous_component_context = component_context;
  var previous_batch2 = (
    /** @type {Batch} */
    current_batch
  );
  if (dev_fallback_default) {
    var previous_dev_stack = dev_stack;
  }
  return function restore(activate_batch = true) {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_component_context);
    if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
      previous_batch2?.activate();
      previous_batch2?.apply();
    }
    if (dev_fallback_default) {
      set_reactivity_loss_tracker(null);
      set_dev_stack(previous_dev_stack);
    }
  };
}
var restored = false;
function unset_context(deactivate_batch = true) {
  restored = false;
  set_active_effect(null);
  set_active_reaction(null);
  set_component_context(null);
  if (deactivate_batch) current_batch?.deactivate();
  if (dev_fallback_default) {
    set_reactivity_loss_tracker(null);
    set_dev_stack(null);
  }
}
function increment_pending() {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  var boundary2 = effect2.b;
  var batch = (
    /** @type {Batch} */
    current_batch
  );
  var blocking = !!boundary2?.is_rendered();
  boundary2?.update_pending_count(1, batch);
  batch.increment(blocking, effect2);
  return () => {
    boundary2?.update_pending_count(-1, batch);
    batch.decrement(blocking, effect2);
  };
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/deriveds.js
var reactivity_loss_tracker = null;
function set_reactivity_loss_tracker(v) {
  reactivity_loss_tracker = v;
}
var recent_async_deriveds = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags2 = DERIVED | DIRTY;
  if (active_effect !== null) {
    active_effect.f |= EFFECT_PRESERVED;
  }
  const signal = {
    ctx: component_context,
    deps: null,
    effects: null,
    equals,
    f: flags2,
    fn,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      UNINITIALIZED
    ),
    wv: 0,
    parent: active_effect,
    ac: null
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = get_error("created at");
  }
  return signal;
}
var OBSOLETE = /* @__PURE__ */ Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function async_derived(fn, label, location) {
  let parent = (
    /** @type {Effect | null} */
    active_effect
  );
  if (parent === null) {
    async_derived_orphan();
  }
  var promise = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  );
  var signal = source(
    /** @type {V} */
    UNINITIALIZED
  );
  if (dev_fallback_default) signal.label = label ?? stringify_derived(fn);
  var should_suspend = !active_reaction;
  var deferreds = /* @__PURE__ */ new Set();
  async_effect(() => {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (dev_fallback_default) {
      reactivity_loss_tracker = { effect: effect2, effect_deps: /* @__PURE__ */ new Set(), warned: false };
    }
    var d = deferred();
    promise = d.promise;
    try {
      Promise.resolve(fn()).then(d.resolve, (e) => {
        if (e !== STALE_REACTION) d.reject(e);
      }).finally(unset_context);
    } catch (error) {
      d.reject(error);
      unset_context();
    }
    if (dev_fallback_default) {
      if (reactivity_loss_tracker) {
        if (effect2.deps !== null) {
          for (let i = 0; i < skipped_deps; i += 1) {
            reactivity_loss_tracker.effect_deps.add(effect2.deps[i]);
          }
        }
        if (new_deps !== null) {
          for (let i = 0; i < new_deps.length; i += 1) {
            reactivity_loss_tracker.effect_deps.add(new_deps[i]);
          }
        }
      }
      reactivity_loss_tracker = null;
    }
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    if (should_suspend) {
      if ((effect2.f & REACTION_RAN) !== 0) {
        var decrement_pending = increment_pending();
      }
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        parent.b?.is_rendered()
      ) {
        batch.async_deriveds.get(effect2)?.reject(OBSOLETE);
      } else {
        for (const d2 of deferreds.values()) {
          d2.reject(OBSOLETE);
        }
      }
      deferreds.add(d);
      batch.async_deriveds.set(effect2, d);
    }
    const handler = (value, error = void 0) => {
      if (dev_fallback_default) {
        reactivity_loss_tracker = null;
      }
      decrement_pending?.();
      deferreds.delete(d);
      if (error === OBSOLETE) return;
      batch.activate();
      if (error) {
        signal.f |= ERROR_VALUE;
        internal_set(signal, error);
      } else {
        if ((signal.f & ERROR_VALUE) !== 0) {
          signal.f ^= ERROR_VALUE;
        }
        if (dev_fallback_default && location !== void 0 && !signal.equals(value)) {
          recent_async_deriveds.add(signal);
          setTimeout(() => {
            if (recent_async_deriveds.has(signal) && (effect2.f & DESTROYED) === 0) {
              await_waterfall(
                /** @type {string} */
                signal.label,
                location
              );
              recent_async_deriveds.delete(signal);
            }
          });
        }
        internal_set(signal, value);
      }
      batch.deactivate();
    };
    d.promise.then(handler, (e) => handler(null, e || "unknown"));
  });
  teardown(() => {
    for (const d of deferreds) {
      d.reject(OBSOLETE);
    }
  });
  if (dev_fallback_default) {
    signal.f |= ASYNC;
  }
  return new Promise((fulfil) => {
    function next2(p) {
      function go() {
        if (p === promise) {
          fulfil(signal);
        } else {
          next2(promise);
        }
      }
      p.then(go, go);
    }
    next2(promise);
  });
}
// @__NO_SIDE_EFFECTS__
function user_derived(fn) {
  const d = /* @__PURE__ */ derived(fn);
  if (!async_mode_flag) push_reaction_value(d);
  return d;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived2) {
  var effects = derived2.effects;
  if (effects !== null) {
    derived2.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
var stack = [];
function execute_derived(derived2) {
  var value;
  var prev_active_effect = active_effect;
  var parent = derived2.parent;
  if (!is_destroying_effect && parent !== null && derived2.v !== UNINITIALIZED && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (parent.f & (DESTROYED | INERT)) !== 0) {
    derived_inert();
    return derived2.v;
  }
  set_active_effect(parent);
  if (dev_fallback_default) {
    let prev_eager_effects = eager_effects;
    set_eager_effects(/* @__PURE__ */ new Set());
    try {
      if (includes.call(stack, derived2)) {
        derived_references_self();
      }
      stack.push(derived2);
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
      set_eager_effects(prev_eager_effects);
      stack.pop();
    }
  } else {
    try {
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived2) {
  var value = execute_derived(derived2);
  if (!derived2.equals(value)) {
    derived2.wv = increment_write_version();
    if (!current_batch?.is_fork || derived2.deps === null) {
      if (current_batch !== null) {
        current_batch.capture(derived2, value, true);
        previous_batch?.capture(derived2, value, true);
      } else {
        derived2.v = value;
      }
      if (derived2.deps === null) {
        set_signal_status(derived2, CLEAN);
        return;
      }
    }
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_values !== null) {
    if (effect_tracking() || current_batch?.is_fork) {
      batch_values.set(derived2, value);
    }
  } else {
    update_derived_status(derived2);
  }
}
function freeze_derived_effects(derived2) {
  if (derived2.effects === null) return;
  for (const e of derived2.effects) {
    if (e.teardown || e.ac) {
      e.teardown?.();
      if (e.ac !== null) {
        without_reactive_context(() => {
          e.ac.abort(STALE_REACTION);
          e.ac = null;
        });
      }
      if (e.fn !== null) e.teardown = noop;
      remove_reactions(e, 0);
      destroy_effect_children(e);
    }
  }
}
function unfreeze_derived_effects(derived2) {
  if (derived2.effects === null) return;
  for (const e of derived2.effects) {
    if (e.teardown && e.fn !== null) {
      update_effect(e);
    }
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/batch.js
var first_batch = null;
var last_batch = null;
var current_batch = null;
var previous_batch = null;
var batch_values = null;
var last_scheduled_effect = null;
var is_flushing_sync = false;
var is_processing = false;
var collected_effects = null;
var legacy_updates = null;
var flush_count = 0;
var source_stacks = /* @__PURE__ */ new Set();
var uid = 1;
var Batch = class _Batch {
  id = uid++;
  /** True as soon as `#process` was called */
  started = false;
  linked = true;
  /** @type {Batch | null} */
  prev = null;
  /** @type {Batch | null} */
  next = null;
  /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
  async_deriveds = /* @__PURE__ */ new Map();
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * The keys of this map are identical to `this.previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * The keys of this map are identical to `this.current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #commit_callbacks = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #discard_callbacks = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #pending = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #blocking_pending = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #deferred = null;
  /**
   * Effects that were scheduled in this batch but not yet 'resolved' into the
   * root effects that need to be flushed. Resolving — the upwards traversal that
   * marks the path to each effect on the shared effect tree (see #resolve) — is
   * deferred until the batch is processed, so that the markers are created and
   * consumed within a single traversal. Scheduling into other batches (which can
   * happen concurrently, e.g. while a batch is committed) can therefore never
   * observe (and be confused by) this batch's markers.
   * May contain duplicates — deduplication happens during resolving
   * @type {Effect[]}
   */
  #scheduled = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #new_effects = [];
  /**
   * Deferred effects (which run after async work has completed) and their status (DIRTY or MAYBE_DIRTY)
   * @type {Map<Effect, number>}
   */
  #dirty_reactions = /* @__PURE__ */ new Map();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #skipped_branches = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #unskipped_branches = /* @__PURE__ */ new Set();
  is_fork = false;
  #decrement_queued = false;
  constructor() {
    if (last_batch === null) {
      first_batch = last_batch = this;
    } else {
      last_batch.next = this;
      this.prev = last_batch;
    }
    last_batch = this;
  }
  #is_deferred() {
    if (this.is_fork) return true;
    for (const effect2 of this.#blocking_pending.keys()) {
      if (!this.#is_skipped(effect2)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Whether `effect` is inside a branch that this batch skips
   * @param {Effect} effect
   */
  #is_skipped(effect2) {
    for (var e = (
      /** @type {Effect | null} */
      effect2
    ); e !== null; e = e.parent) {
      if (this.#skipped_branches.has(e)) return true;
    }
    return false;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(effect2) {
    if (!this.#skipped_branches.has(effect2)) {
      this.#skipped_branches.set(effect2, { d: [], m: [] });
    }
    this.#unskipped_branches.delete(effect2);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(effect2, callback = (e) => this.schedule(e)) {
    var tracked = this.#skipped_branches.get(effect2);
    if (tracked) {
      this.#skipped_branches.delete(effect2);
      for (var e of tracked.d) {
        set_signal_status(e, DIRTY);
        callback(e);
      }
      for (e of tracked.m) {
        set_signal_status(e, MAYBE_DIRTY);
        callback(e);
      }
    }
    this.#unskipped_branches.add(effect2);
  }
  /**
   * Convert the effects that were scheduled in this batch into the root effects
   * that need to be traversed, marking the path to each effect (by clearing the
   * `CLEAN` flag on ancestor branches) so that the traversal can find them.
   * This happens right before traversal rather than at scheduling time, so that
   * the markers left on the (shared) effect tree are created and consumed within
   * a single traversal — scheduling into other batches can never observe them
   * @returns {Effect[]}
   */
  #resolve() {
    var roots = [];
    for (const effect2 of this.#scheduled) {
      if ((effect2.f & DESTROYED) !== 0 || (effect2.f & (DIRTY | MAYBE_DIRTY)) === 0) continue;
      var e = effect2;
      var covered = false;
      while (e.parent !== null) {
        e = e.parent;
        var flags2 = e.f;
        if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
          if ((flags2 & CLEAN) === 0) {
            covered = true;
            break;
          }
          e.f ^= CLEAN;
        }
      }
      if (!covered) {
        roots.push(e);
      }
    }
    this.#scheduled = [];
    return roots;
  }
  #process() {
    this.started = true;
    if (dev_fallback_default) {
      for (const value of this.current.keys()) {
        source_stacks.add(value);
      }
    }
    for (const [e, status6] of this.#dirty_reactions) {
      set_signal_status(e, status6);
      this.schedule(e);
    }
    this.apply();
    var effects = collected_effects = [];
    var render_effects = [];
    var updates = legacy_updates = [];
    while (this.#scheduled.length > 0) {
      if (flush_count++ > 1e3) {
        this.#unlink();
        infinite_loop_guard();
      }
      for (const root13 of this.#resolve()) {
        try {
          this.#traverse(root13, effects, render_effects);
        } catch (e) {
          reset_all(root13);
          if (!this.#is_deferred()) this.discard();
          throw e;
        }
      }
    }
    current_batch = null;
    if (updates.length > 0) {
      var batch = _Batch.ensure();
      for (const e of updates) {
        batch.schedule(e);
      }
    }
    collected_effects = null;
    legacy_updates = null;
    if (this.#is_deferred()) {
      this.#defer_effects(render_effects);
      this.#defer_effects(effects);
      for (const [e, t] of this.#skipped_branches) {
        reset_branch(e, t);
      }
      if (updates.length > 0) {
        /** @type {unknown} */
        current_batch.#process();
      }
      return;
    }
    const earlier_batch = this.#find_earlier_batch();
    if (earlier_batch) {
      this.#defer_effects(render_effects);
      this.#defer_effects(effects);
      earlier_batch.#merge(this);
      return;
    }
    this.#dirty_reactions.clear();
    for (const fn of this.#commit_callbacks) fn(this);
    this.#commit_callbacks.clear();
    previous_batch = this;
    flush_queued_effects(render_effects);
    flush_queued_effects(effects);
    previous_batch = null;
    this.#deferred?.resolve();
    var next_batch = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      current_batch
    );
    if (this.#pending === 0 && (this.#scheduled.length === 0 || next_batch !== null)) {
      this.#unlink();
      if (async_mode_flag) {
        this.#commit();
        current_batch = next_batch;
      }
    }
    if (next_batch !== null) {
      old_values.clear();
      next_batch.#process();
    }
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #traverse(root13, effects, render_effects) {
    root13.f ^= CLEAN;
    var effect2 = root13.first;
    while (effect2 !== null) {
      var flags2 = effect2.f;
      var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
      var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect2);
      if (!skip && effect2.fn !== null) {
        if (is_branch) {
          effect2.f ^= CLEAN;
        } else if ((flags2 & EFFECT) !== 0) {
          effects.push(effect2);
        } else if (async_mode_flag && (flags2 & (RENDER_EFFECT | MANAGED_EFFECT)) !== 0) {
          render_effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((flags2 & BLOCK_EFFECT) !== 0) this.add_dirty_reaction(effect2, MAYBE_DIRTY);
          update_effect(effect2);
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      while (effect2 !== null) {
        var next2 = effect2.next;
        if (next2 !== null) {
          effect2 = next2;
          break;
        }
        effect2 = effect2.parent;
      }
    }
  }
  #find_earlier_batch() {
    for (var batch = this.prev; batch !== null; batch = batch.prev) {
      if (!batch.is_fork && this.#intersects(batch)) return batch;
    }
    return null;
  }
  /** @param {Batch} batch */
  #intersects(batch) {
    for (const [source2, [, is_derived]] of this.current) {
      if (is_derived) continue;
      if (batch.current.has(source2)) return true;
    }
    return false;
  }
  /**
   * @param {Batch} batch
   */
  #merge(batch) {
    for (const [source2, value] of batch.current) {
      if (!this.previous.has(source2) && batch.previous.has(source2)) {
        this.previous.set(source2, batch.previous.get(source2));
      }
      this.current.set(source2, value);
    }
    for (const [effect2, deferred2] of batch.async_deriveds) {
      const d = this.async_deriveds.get(effect2);
      if (d) deferred2.promise.then(d.resolve).catch(d.reject);
    }
    batch.async_deriveds.clear();
    this.transfer_reactions(batch.#dirty_reactions);
    const mark = (value) => {
      var reactions = value.reactions;
      if (reactions === null) return;
      if ((value.f & DERIVED) !== 0 && (value.f & (DIRTY | MAYBE_DIRTY)) === 0) {
        return;
      }
      for (const reaction of reactions) {
        var flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark(
            /** @type {Derived} */
            reaction
          );
        } else {
          var effect2 = (
            /** @type {Effect} */
            reaction
          );
          if (flags2 & (ASYNC | BLOCK_EFFECT) && !this.async_deriveds.has(effect2)) {
            this.#dirty_reactions.delete(effect2);
            set_signal_status(effect2, DIRTY);
            this.schedule(effect2);
          }
        }
      }
    };
    for (const source2 of this.current.keys()) {
      mark(source2);
    }
    this.oncommit(() => batch.discard());
    batch.#unlink();
    current_batch = this;
    this.#process();
  }
  /**
   * @param {Effect[]} effects
   */
  #defer_effects(effects) {
    for (var i = 0; i < effects.length; i += 1) {
      defer_effect(effects[i], this.#dirty_reactions);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(source2, value, is_derived = false) {
    if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
      this.previous.set(source2, source2.v);
    }
    if ((source2.f & ERROR_VALUE) === 0) {
      this.current.set(source2, [value, is_derived]);
      batch_values?.set(source2, value);
    }
    if (!this.is_fork) {
      source2.v = value;
    }
  }
  activate() {
    current_batch = this;
  }
  deactivate() {
    current_batch = null;
    batch_values = null;
  }
  flush() {
    try {
      if (dev_fallback_default) {
        source_stacks.clear();
      }
      is_processing = true;
      current_batch = this;
      this.#process();
    } finally {
      flush_count = 0;
      last_scheduled_effect = null;
      collected_effects = null;
      legacy_updates = null;
      is_processing = false;
      current_batch = null;
      batch_values = null;
      old_values.clear();
      if (dev_fallback_default) {
        for (const source2 of source_stacks) {
          source2.updated = null;
        }
      }
    }
  }
  discard() {
    for (const fn of this.#discard_callbacks) fn(this);
    this.#discard_callbacks.clear();
    for (const deferred2 of this.async_deriveds.values()) {
      deferred2.reject(OBSOLETE);
    }
    this.#unlink();
    this.#deferred?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(effect2) {
    this.#new_effects.push(effect2);
  }
  #commit() {
    for (let batch = first_batch; batch !== null; batch = batch.next) {
      var is_earlier = batch.id < this.id;
      var sources = [];
      for (const [source3, [value, is_derived]] of this.current) {
        if (batch.current.has(source3)) {
          var batch_value = (
            /** @type {[any, boolean]} */
            batch.current.get(source3)[0]
          );
          if (is_earlier && value !== batch_value) {
            batch.current.set(source3, [value, is_derived]);
          } else {
            continue;
          }
        }
        sources.push(source3);
      }
      if (is_earlier) {
        for (const [effect2, deferred2] of this.async_deriveds) {
          const d = batch.async_deriveds.get(effect2);
          if (d) deferred2.promise.then(d.resolve).catch(d.reject);
        }
      }
      var current = [...batch.current.keys()].filter(
        (source3) => !/** @type {[any, boolean]} */
        batch.current.get(source3)[1]
      );
      if (!batch.started || current.length === 0) continue;
      var others = current.filter((source3) => !this.current.has(source3));
      if (others.length === 0) {
        if (is_earlier) {
          batch.discard();
        }
      } else if (sources.length > 0) {
        if (dev_fallback_default && !batch.#decrement_queued) {
          invariant(batch.#scheduled.length === 0, "Batch has scheduled effects");
        }
        if (is_earlier) {
          for (const unskipped of this.#unskipped_branches) {
            batch.unskip_effect(unskipped, (e) => {
              if ((e.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                batch.schedule(e);
              } else {
                batch.#defer_effects([e]);
              }
            });
          }
        }
        batch.activate();
        var marked = /* @__PURE__ */ new Set();
        var checked = /* @__PURE__ */ new Map();
        for (var source2 of sources) {
          mark_effects(source2, others, marked, checked);
        }
        checked = /* @__PURE__ */ new Map();
        var current_unequal = [...batch.current].filter(([c, v1]) => {
          const v2 = this.current.get(c);
          if (!v2) return true;
          return v2[0] !== v1[0] || v2[1] !== v1[1];
        }).map(([c]) => c);
        if (current_unequal.length > 0) {
          for (const effect2 of this.#new_effects) {
            if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
              if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
                set_signal_status(effect2, DIRTY);
                batch.schedule(effect2);
              } else {
                batch.add_dirty_reaction(effect2, DIRTY);
              }
            }
          }
        }
        if (batch.#scheduled.length > 0 && !batch.#decrement_queued) {
          batch.apply();
          for (var root13 of batch.#resolve()) {
            batch.#traverse(root13, [], []);
          }
        }
        batch.deactivate();
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(blocking, effect2) {
    this.#pending += 1;
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      this.#blocking_pending.set(effect2, blocking_pending_count + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(blocking, effect2) {
    this.#pending -= 1;
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      if (blocking_pending_count === 1) {
        this.#blocking_pending.delete(effect2);
      } else {
        this.#blocking_pending.set(effect2, blocking_pending_count - 1);
      }
    }
    if (this.#decrement_queued) return;
    this.#decrement_queued = true;
    queue_micro_task(() => {
      this.#decrement_queued = false;
      if (this.linked) {
        this.flush();
      }
    });
  }
  /**
   * @param {Map<Effect, number>} dirty_reactions
   */
  transfer_reactions(dirty_reactions) {
    for (const [effect2, status6] of dirty_reactions) {
      this.add_dirty_reaction(effect2, status6);
    }
    dirty_reactions.clear();
  }
  /**
   * @param {Effect} effect
   * @param {number} status
   */
  add_dirty_reaction(effect2, status6) {
    if (status6 === DIRTY || this.#dirty_reactions.get(effect2) !== DIRTY) {
      this.#dirty_reactions.set(effect2, status6);
    }
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(fn) {
    this.#commit_callbacks.add(fn);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(fn) {
    this.#discard_callbacks.add(fn);
  }
  settled() {
    return (this.#deferred ??= deferred()).promise;
  }
  static ensure() {
    if (current_batch === null) {
      const batch = current_batch = new _Batch();
      if (!is_processing && !is_flushing_sync) {
        queue_micro_task(() => {
          if (!batch.started) {
            batch.flush();
          }
        });
      }
    }
    return current_batch;
  }
  apply() {
    if (!async_mode_flag || !this.is_fork && this.prev === null && this.next === null) {
      batch_values = null;
      return;
    }
    batch_values = /* @__PURE__ */ new Map();
    for (const [source2, [value]] of this.current) {
      batch_values.set(source2, value);
    }
    for (let batch = first_batch; batch !== null; batch = batch.next) {
      if (batch === this || batch.is_fork) continue;
      if (batch.id >= this.id || !batch.#intersects(this)) {
        for (const [source2, previous] of batch.previous) {
          if (!batch_values.has(source2)) {
            batch_values.set(source2, previous);
          }
        }
      }
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(effect2) {
    last_scheduled_effect = effect2;
    if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
      effect2.b.defer_effect(effect2);
      return;
    }
    this.#scheduled.push(effect2);
  }
  #unlink() {
    if (!this.linked) return;
    var prev = this.prev;
    var next2 = this.next;
    if (prev === null) {
      first_batch = next2;
    } else {
      prev.next = next2;
    }
    if (next2 === null) {
      last_batch = prev;
    } else {
      next2.prev = prev;
    }
    this.linked = false;
  }
};
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  var prev_previous_batch = previous_batch;
  previous_batch = null;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) {
      flushSync();
      result = fn();
    }
    while (true) {
      flush_tasks();
      if (current_batch === null) {
        return (
          /** @type {T} */
          result
        );
      }
      current_batch.flush();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
    previous_batch = prev_previous_batch;
  }
}
function infinite_loop_guard() {
  if (dev_fallback_default) {
    var updates = /* @__PURE__ */ new Map();
    for (
      const source2 of
      /** @type {Batch} */
      current_batch.current.keys()
    ) {
      for (const [stack2, update2] of source2.updated ?? []) {
        var entry = updates.get(stack2);
        if (!entry) {
          entry = { error: update2.error, count: 0 };
          updates.set(stack2, entry);
        }
        entry.count += update2.count;
      }
    }
    for (const update2 of updates.values()) {
      if (update2.error) {
        console.error(update2.error);
      }
    }
  }
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (dev_fallback_default) {
      define_property(error, "stack", { value: "" });
    }
    invoke_error_boundary(error, last_scheduled_effect);
  }
}
var eager_block_effects = null;
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect2 = effects[i++];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
      eager_block_effects = /* @__PURE__ */ new Set();
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
        unlink_effect(effect2);
      }
      if (eager_block_effects?.size > 0) {
        old_values.clear();
        for (const e of eager_block_effects) {
          if ((e.f & (DESTROYED | INERT)) !== 0) continue;
          const ordered_effects = [e];
          let ancestor = e.parent;
          while (ancestor !== null) {
            if (eager_block_effects.has(ancestor)) {
              eager_block_effects.delete(ancestor);
              ordered_effects.push(ancestor);
            }
            ancestor = ancestor.parent;
          }
          for (let j = ordered_effects.length - 1; j >= 0; j--) {
            const e2 = ordered_effects[j];
            if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
            update_effect(e2);
          }
        }
        eager_block_effects.clear();
      }
    }
  }
  eager_block_effects = null;
}
function mark_effects(value, sources, marked, checked) {
  if (marked.has(value)) return;
  marked.add(value);
  if (value.reactions !== null) {
    for (const reaction of value.reactions) {
      const flags2 = reaction.f;
      if ((flags2 & DERIVED) !== 0) {
        mark_effects(
          /** @type {Derived} */
          reaction,
          sources,
          marked,
          checked
        );
      } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
        set_signal_status(reaction, DIRTY);
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function depends_on(reaction, sources, checked) {
  const depends = checked.get(reaction);
  if (depends !== void 0) return depends;
  if (reaction.deps !== null) {
    for (const dep of reaction.deps) {
      if (includes.call(sources, dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on(
        /** @type {Derived} */
        dep,
        sources,
        checked
      )) {
        checked.set(
          /** @type {Derived} */
          dep,
          true
        );
        return true;
      }
    }
  }
  checked.set(reaction, false);
  return false;
}
function schedule_effect(effect2) {
  current_batch.schedule(effect2);
}
function reset_branch(effect2, tracked) {
  if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
    return;
  }
  if ((effect2.f & DIRTY) !== 0) {
    tracked.d.push(effect2);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
    tracked.m.push(effect2);
  }
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_branch(e, tracked);
    e = e.next;
  }
}
function reset_all(effect2) {
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_all(e);
    e = e.next;
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/sources.js
var eager_effects = /* @__PURE__ */ new Set();
var old_values = /* @__PURE__ */ new Map();
function set_eager_effects(v) {
  eager_effects = v;
}
var eager_effects_deferred = false;
function set_eager_effects_deferred() {
  eager_effects_deferred = true;
}
function source(v, stack2) {
  var signal = {
    f: 0,
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = stack2 ?? get_error("created at");
    signal.updated = null;
    signal.set_during_effect = false;
    signal.trace = null;
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack2) {
  const s = source(v, stack2);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
    (component_context.l.s ??= []).push(s);
  }
  return s;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !current_sources.has(source2))) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  if (dev_fallback_default) {
    tag_proxy(
      new_value,
      /** @type {string} */
      source2.label
    );
  }
  return internal_set(source2, new_value, legacy_updates);
}
var seen = null;
var count_deps = 0;
function internal_set(source2, value, updated_during_traversal = null) {
  if (!source2.equals(value)) {
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else if (!old_values.has(source2)) {
      old_values.set(source2, source2.v);
    }
    var batch = Batch.ensure();
    batch.capture(source2, value);
    if (dev_fallback_default) {
      if (tracing_mode_flag || active_effect !== null) {
        source2.updated ??= /* @__PURE__ */ new Map();
        const count = (source2.updated.get("")?.count ?? 0) + 1;
        source2.updated.set("", { error: (
          /** @type {any} */
          null
        ), count });
        if (tracing_mode_flag || count > 5) {
          const error = get_error("updated at");
          if (error !== null) {
            let entry = source2.updated.get(error.stack);
            if (!entry) {
              entry = { error, count: 0 };
              source2.updated.set(error.stack, entry);
            }
            entry.count++;
          }
        }
      }
      if (active_effect !== null) {
        source2.set_during_effect = true;
      }
    }
    if ((source2.f & DERIVED) !== 0) {
      const derived2 = (
        /** @type {Derived} */
        source2
      );
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(derived2);
      }
      if (batch_values === null) {
        update_derived_status(derived2);
      }
    }
    source2.wv = increment_write_version();
    seen = null;
    count_deps = 0;
    mark_reactions(source2, DIRTY, updated_during_traversal);
    seen = null;
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
      flush_eager_effects();
    }
  }
  return value;
}
function flush_eager_effects() {
  eager_effects_deferred = false;
  for (const effect2 of eager_effects) {
    if ((effect2.f & CLEAN) !== 0) {
      set_signal_status(effect2, MAYBE_DIRTY);
    }
    let dirty;
    try {
      dirty = is_dirty(effect2);
    } catch {
      dirty = true;
    }
    if (dirty) {
      update_effect(effect2);
    }
  }
  eager_effects.clear();
}
function update(source2, d = 1) {
  var value = get(source2);
  var result = d === 1 ? value++ : value--;
  set(source2, value);
  return result;
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status6, updated_during_traversal) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  count_deps += length;
  if (count_deps > 1e5 && seen === null) seen = /* @__PURE__ */ new Set();
  if (seen !== null) {
    if (seen.has(signal)) return;
    seen.add(signal);
  }
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    if (!runes && reaction === active_effect) continue;
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status6);
    }
    if ((flags2 & EAGER_EFFECT) !== 0) {
      eager_effects.add(
        /** @type {Effect} */
        reaction
      );
    } else if ((flags2 & DERIVED) !== 0) {
      var derived2 = (
        /** @type {Derived} */
        reaction
      );
      batch_values?.delete(derived2);
      mark_reactions(derived2, MAYBE_DIRTY, updated_during_traversal);
    } else if (not_dirty) {
      var effect2 = (
        /** @type {Effect} */
        reaction
      );
      if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
        eager_block_effects.add(effect2);
      }
      if (updated_during_traversal !== null) {
        updated_during_traversal.push(effect2);
      } else {
        schedule_effect(effect2);
      }
    }
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/proxy.js
var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value || COMPONENT_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = state(0);
  var stack2 = dev_fallback_default && tracing_mode_flag ? get_error("created at") : null;
  var parent_version = update_version;
  var with_parent = (fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", state(
      /** @type {any[]} */
      value.length,
      stack2
    ));
    if (dev_fallback_default) {
      value = /** @type {any} */
      inspectable_array(
        /** @type {any[]} */
        value
      );
    }
  }
  var path = "";
  let updating = false;
  function update_path(new_path) {
    if (updating) return;
    updating = true;
    path = new_path;
    tag(version, `${path} version`);
    for (const [prop2, source2] of sources) {
      tag(source2, get_label(path, prop2));
    }
    updating = false;
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          with_parent(() => {
            var s2 = state(descriptor.value, stack2);
            sources.set(prop2, s2);
            if (dev_fallback_default && typeof prop2 === "string") {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
        } else {
          set(s, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            const s2 = with_parent(() => state(UNINITIALIZED, stack2));
            sources.set(prop2, s2);
            increment(version);
            if (dev_fallback_default) {
              tag(s2, get_label(path, prop2));
            }
          }
        } else {
          set(s, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        if (dev_fallback_default && prop2 === PROXY_PATH_SYMBOL) {
          return update_path;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop2] : UNINITIALIZED);
            var s2 = state(p, stack2);
            if (dev_fallback_default) {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        this.has?.(target, prop2);
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        var s = sources.get(prop2);
        if (s !== void 0) {
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return void 0;
          }
          if (descriptor && "value" in descriptor) {
            descriptor.value = value2;
          } else {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || (active_effect !== null || active_reaction !== null) && (!has || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = with_parent(() => {
              var p = has ? proxy(target[prop2]) : UNINITIALIZED;
              var s2 = state(p, stack2);
              if (dev_fallback_default) {
                tag(s2, get_label(path, prop2));
              }
              return s2;
            });
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => state(UNINITIALIZED, stack2));
              sources.set(i + "", other_s);
              if (dev_fallback_default) {
                tag(other_s, get_label(path, i));
              }
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop2)?.writable) {
            s = with_parent(() => state(void 0, stack2));
            if (dev_fallback_default) {
              tag(s, get_label(path, prop2));
            }
            set(s, proxy(value2));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key3) => {
          var source3 = sources.get(key3);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function get_label(path, prop2) {
  if (typeof prop2 === "symbol") return `${path}[Symbol(${prop2.description ?? ""})]`;
  if (regex_is_valid_identifier.test(prop2)) return `${path}.${prop2}`;
  return /^\d+$/.test(prop2) ? `${path}[${prop2}]` : `${path}['${prop2}']`;
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch {
  }
  return value;
}
function is(a, b) {
  return Object.is(get_proxied_value(a), get_proxied_value(b));
}
var ARRAY_MUTATING_METHODS = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function inspectable_array(array) {
  return new Proxy(array, {
    get(target, prop2, receiver) {
      var value = Reflect.get(target, prop2, receiver);
      if (!ARRAY_MUTATING_METHODS.has(
        /** @type {string} */
        prop2
      )) {
        return value;
      }
      return function(...args) {
        set_eager_effects_deferred();
        var result = value.apply(this, args);
        flush_eager_effects();
        return result;
      };
    }
  });
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
  const array_prototype2 = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes: includes2 } = array_prototype2;
  array_prototype2.indexOf = function(item, from_index) {
    const index2 = indexOf.call(this, item, from_index);
    if (index2 === -1) {
      for (let i = from_index ?? 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item, from_index) {
    const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
    if (index2 === -1) {
      for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item, from_index) {
    const has = includes2.call(this, item, from_index);
    if (!has) {
      for (let i = 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.includes(...)");
          break;
        }
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype2.indexOf = indexOf;
    array_prototype2.lastIndexOf = lastIndexOf;
    array_prototype2.includes = includes2;
  };
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/operations.js
var $window;
var $document;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype[CLASS_CACHE] = void 0;
    element_prototype[ATTRIBUTES_CACHE] = null;
    element_prototype[STYLE_CACHE] = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype[TEXT_CACHE] = void 0;
  }
  if (dev_fallback_default) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return (
    /** @type {TemplateNode | null} */
    first_child_getter.call(node)
  );
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return (
    /** @type {TemplateNode | null} */
    next_sibling_getter.call(node)
  );
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = /* @__PURE__ */ get_first_child(hydrate_node);
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== TEXT_NODE) {
    var text2 = create_text();
    child2?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  if (is_text) {
    merge_text_nodes(
      /** @type {Text} */
      child2
    );
  }
  set_hydrate_node(child2);
  return child2;
}
function first_child(node, is_text = false) {
  if (!hydrating) {
    var first = /* @__PURE__ */ get_first_child(node);
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
  if (is_text) {
    if (hydrate_node?.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      hydrate_node?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    merge_text_nodes(
      /** @type {Text} */
      hydrate_node
    );
  }
  return hydrate_node;
}
function only_child(node, is_text = false) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var first = child(node, is_text);
  reset(node);
  return first;
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = hydrating ? hydrate_node : node;
  var last_sibling;
  while (count--) {
    last_sibling = next_sibling;
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  if (!hydrating) {
    return next_sibling;
  }
  if (is_text) {
    if (next_sibling?.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      if (next_sibling === null) {
        last_sibling?.after(text2);
      } else {
        next_sibling.before(text2);
      }
      set_hydrate_node(text2);
      return text2;
    }
    merge_text_nodes(
      /** @type {Text} */
      next_sibling
    );
  }
  set_hydrate_node(next_sibling);
  return next_sibling;
}
function clear_text_content(node) {
  node.textContent = "";
}
function should_defer_append() {
  if (!async_mode_flag) return false;
  if (eager_block_effects !== null) return false;
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  return (flags2 & REACTION_RAN) !== 0;
}
function create_element(tag2, namespace, is2) {
  if (namespace == null || namespace === NAMESPACE_HTML) {
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      is2 ? document.createElement(tag2, { is: is2 }) : document.createElement(tag2)
    );
  }
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    is2 ? document.createElementNS(namespace, tag2, { is: is2 }) : document.createElementNS(namespace, tag2)
  );
}
function merge_text_nodes(text2) {
  if (
    /** @type {string} */
    text2.nodeValue.length < 65536
  ) {
    return;
  }
  let next2 = text2.nextSibling;
  while (next2 !== null && next2.nodeType === TEXT_NODE) {
    next2.remove();
    text2.nodeValue += /** @type {string} */
    next2.nodeValue;
    next2 = text2.nextSibling;
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/error-handling.js
var adjustments = /* @__PURE__ */ new WeakMap();
function handle_error(error) {
  var effect2 = active_effect;
  if (effect2 === null) {
    active_reaction.f |= ERROR_VALUE;
    return error;
  }
  if (dev_fallback_default && error instanceof Error && !adjustments.has(error)) {
    adjustments.set(error, get_adjustments(error, effect2));
  }
  if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
    if (dev_fallback_default && !effect2.parent && error instanceof Error) {
      apply_adjustments(error);
    }
    throw error;
  }
  invoke_error_boundary(error, effect2);
}
function invoke_error_boundary(error, effect2) {
  if (error === HYDRATION_ERROR) {
    throw error;
  }
  if (effect2 !== null && (effect2.f & DESTROYED) !== 0) {
    return;
  }
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0 && (effect2.f & (DESTROYED | DESTROYING)) === 0) {
      if ((effect2.f & REACTION_RAN) === 0) {
        throw error;
      }
      try {
        effect2.b.error(error);
        return;
      } catch (e) {
        error = e;
      }
    }
    effect2 = effect2.parent;
  }
  if (dev_fallback_default && error instanceof Error) {
    apply_adjustments(error);
  }
  throw error;
}
function get_adjustments(error, effect2) {
  const message_descriptor = get_descriptor(error, "message");
  if (message_descriptor && !message_descriptor.configurable) return;
  var indent = is_firefox ? "  " : "	";
  var component_stack = `
${indent}in ${effect2.fn?.name || "<unknown>"}`;
  var context = effect2.ctx;
  while (context !== null) {
    component_stack += `
${indent}in ${context.function?.[FILENAME].split("/").pop()}`;
    context = context.p;
  }
  return {
    message: error.message + `
${component_stack}
`,
    stack: error.stack?.split("\n").filter((line) => !line.includes("svelte/src/internal")).join("\n")
  };
}
function apply_adjustments(error) {
  const adjusted = adjustments.get(error);
  if (adjusted) {
    define_property(error, "message", {
      value: adjusted.message
    });
    define_property(error, "stack", {
      value: adjusted.stack
    });
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/effects.js
function validate_effect(rune) {
  if (active_effect === null) {
    if (active_reaction === null) {
      effect_orphan(rune);
    }
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown(rune);
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn) {
  var parent = active_effect;
  if (dev_fallback_default) {
    while (parent !== null && (parent.f & EAGER_EFFECT) !== 0) {
      parent = parent.parent;
    }
  }
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes: null,
    f: type | DIRTY | CONNECTED,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (dev_fallback_default) {
    effect2.component_function = dev_current_component_function;
  }
  current_batch?.register_created_effect(effect2);
  var e = effect2;
  if ((type & EFFECT) !== 0) {
    if (collected_effects !== null) {
      collected_effects.push(effect2);
    } else {
      Batch.ensure().schedule(effect2);
    }
  } else if (fn !== null) {
    try {
      update_effect(effect2);
    } catch (e2) {
      destroy_effect(effect2);
      throw e2;
    }
    if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
    (e.f & EFFECT_PRESERVED) === 0) {
      e = e.first;
      if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
        e.f |= EFFECT_TRANSPARENT;
      }
    }
  }
  if (e !== null) {
    e.parent = parent;
    if (parent !== null) {
      push_effect(e, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
      var derived2 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived2.effects ??= []).push(e);
    }
  }
  return effect2;
}
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  validate_effect("$effect");
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "$effect"
    });
  }
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.i;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ??= []).push(fn);
  } else {
    return create_user_effect(fn);
  }
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn);
}
function user_pre_effect(fn) {
  validate_effect("$effect.pre");
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "$effect.pre"
    });
  }
  return create_effect(RENDER_EFFECT | USER_EFFECT, fn);
}
function effect_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn);
}
function async_effect(fn) {
  return create_effect(ASYNC | EFFECT_PRESERVED, fn);
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn);
}
function template_effect(fn, sync = [], async2 = [], blockers = []) {
  flatten(blockers, sync, async2, (values) => {
    create_effect(RENDER_EFFECT, () => {
      fn(...values.map(get));
    });
  });
}
function deferred_template_effect(fn, sync = [], async2 = [], blockers = []) {
  flatten(blockers, sync, async2, (values) => {
    create_effect(EFFECT, () => fn(...values.map(get)));
  });
}
function block(fn, flags2 = 0) {
  var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
  if (dev_fallback_default) {
    effect2.dev_stack = dev_stack;
  }
  return effect2;
}
function branch(fn) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } catch (error) {
      invoke_error_boundary(error, effect2.parent);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    const controller = effect2.ac;
    if (controller !== null) {
      without_reactive_context(() => {
        controller.abort(STALE_REACTION);
      });
    }
    var next2 = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
    remove_effect_dom(
      effect2.nodes.start,
      /** @type {TemplateNode} */
      effect2.nodes.end
    );
    removed = true;
  }
  effect2.f |= DESTROYING;
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  var transitions = effect2.nodes && effect2.nodes.t;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  effect2.f ^= DESTROYING;
  effect2.f |= DESTROYED;
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  if (dev_fallback_default) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : get_next_sibling(node);
    node.remove();
    node = next2;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next2;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback, destroy = true) {
  var transitions = [];
  effect2.f |= PAUSED;
  pause_children(effect2, transitions, true);
  var fn = () => {
    if (destroy) destroy_effect(effect2);
    if (callback) callback();
  };
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition2 of transitions) {
      transition2.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition2 of t) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    if ((child2.f & ROOT_EFFECT) === 0) {
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
    }
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  effect2.f &= ~PAUSED;
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & PAUSED) !== 0) return;
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  if ((effect2.f & CLEAN) === 0) {
    set_signal_status(effect2, DIRTY);
    Batch.ensure().schedule(effect2);
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition2 of t) {
      if (transition2.is_global || local) {
        transition2.in();
      }
    }
  }
}
function move_effect(effect2, fragment) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  while (node !== null) {
    var next2 = node === end ? null : get_next_sibling(node);
    fragment.append(node);
    node = next2;
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/legacy.js
var captured_signals = null;

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/runtime.js
var is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
var active_reaction = null;
var untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
var active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
var current_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && (!async_mode_flag && (active_reaction.f & REACTION_IS_UPDATING) !== 0 || (active_reaction.f & DERIVED) !== 0)) {
    (current_sources ??= /* @__PURE__ */ new Set()).add(value);
  }
}
var new_deps = null;
var skipped_deps = 0;
var untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
var write_version = 1;
var read_version = 0;
var update_version = read_version;
function set_update_version(value) {
  update_version = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = (
      /** @type {Value[]} */
      reaction.deps
    );
    var length = dependencies.length;
    for (var i = 0; i < length; i++) {
      var dependency = dependencies[i];
      if (is_dirty(
        /** @type {Derived} */
        dependency
      )) {
        update_derived(
          /** @type {Derived} */
          dependency
        );
      }
      if (dependency.wv > reaction.wv) {
        return true;
      }
    }
    if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    batch_values === null) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root13 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (!async_mode_flag && current_sources !== null && current_sources.has(signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root13) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    reaction.f |= REACTION_RAN;
    var deps = update_dependencies(reaction);
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (var i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (previous_reaction.deps !== null) {
        for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
          previous_reaction.deps[i2].rv = read_version;
        }
      }
      if (previous_deps !== null) {
        for (const dep of previous_deps) {
          dep.rv = read_version;
        }
      }
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error) {
    update_dependencies(reaction);
    return handle_error(error);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function update_dependencies(reaction) {
  var deps = reaction.deps;
  var is_fork = current_batch?.is_fork;
  if (new_deps !== null) {
    var i;
    if (!is_fork) {
      remove_reactions(reaction, skipped_deps);
    }
    if (deps !== null && skipped_deps > 0) {
      deps.length = skipped_deps + new_deps.length;
      for (i = 0; i < new_deps.length; i++) {
        deps[skipped_deps + i] = new_deps[i];
      }
    } else {
      reaction.deps = deps = new_deps;
    }
    if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
      for (i = skipped_deps; i < deps.length; i++) {
        (deps[i].reactions ??= []).push(reaction);
      }
    }
  } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
    remove_reactions(reaction, skipped_deps);
    deps.length = skipped_deps;
  }
  return deps;
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !includes.call(new_deps, dependency))) {
    var derived2 = (
      /** @type {Derived} */
      dependency
    );
    if ((derived2.f & CONNECTED) !== 0) {
      derived2.f ^= CONNECTED;
    }
    if (derived2.v !== UNINITIALIZED) {
      update_derived_status(derived2);
    }
    if (derived2.ac !== null) {
      without_reactive_context(() => {
        derived2.ac.abort(STALE_REACTION);
        derived2.ac = null;
        set_signal_status(derived2, DIRTY);
      });
    }
    freeze_derived_effects(derived2);
    remove_reactions(derived2, 0);
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags2 = effect2.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  active_effect = effect2;
  if (dev_fallback_default) {
    var previous_component_fn = dev_current_component_function;
    set_dev_current_component_function(effect2.component_function);
    var previous_stack = (
      /** @type {any} */
      dev_stack
    );
    set_dev_stack(effect2.dev_stack ?? dev_stack);
  }
  try {
    if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    if (dev_fallback_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) {
      for (var dep of effect2.deps) {
        if (dep.set_during_effect) {
          dep.wv = increment_write_version();
          dep.set_during_effect = false;
        }
      }
    }
  } finally {
    active_effect = previous_effect;
    if (dev_fallback_default) {
      set_dev_current_component_function(previous_component_fn);
      set_dev_stack(previous_stack);
    }
  }
}
async function tick() {
  if (async_mode_flag) {
    return new Promise((f) => {
      requestAnimationFrame(() => f());
      setTimeout(() => f());
    });
  }
  await Promise.resolve();
  flushSync();
}
function get(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  captured_signals?.add(signal);
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && (current_sources === null || !current_sources.has(signal))) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else {
            new_deps.push(signal);
          }
        }
      } else {
        active_reaction.deps ??= [];
        if (!includes.call(active_reaction.deps, signal)) {
          active_reaction.deps.push(signal);
        }
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!includes.call(reactions, active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  }
  if (dev_fallback_default) {
    if (!untracking && reactivity_loss_tracker && // By checking that current/previous batch are null we filter out false positives.
    // reactivity_loss_tracker is only reset after a microtask, so if a flush happens
    // before that, we get warnings for things we shouldn't warn on.
    current_batch === null && previous_batch === null && !reactivity_loss_tracker.warned && (reactivity_loss_tracker.effect.f & REACTION_IS_UPDATING) === 0 && !reactivity_loss_tracker.effect_deps.has(signal)) {
      reactivity_loss_tracker.warned = true;
      await_reactivity_loss(
        /** @type {string} */
        signal.label
      );
      var trace2 = get_error("traced at");
      if (trace2) console.warn(trace2);
    }
    recent_async_deriveds.delete(signal);
    if (tracing_mode_flag && !untracking && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
      if (signal.trace) {
        signal.trace();
      } else {
        trace2 = get_error("traced at");
        if (trace2) {
          var entry = tracing_expressions.entries.get(signal);
          if (entry === void 0) {
            entry = { traces: [] };
            tracing_expressions.entries.set(signal, entry);
          }
          var last = entry.traces[entry.traces.length - 1];
          if (trace2.stack !== last?.stack) {
            entry.traces.push(trace2);
          }
        }
      }
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  if (is_derived) {
    var derived2 = (
      /** @type {Derived} */
      signal
    );
    if (is_destroying_effect) {
      var value = derived2.v;
      if ((derived2.f & CLEAN) === 0 && derived2.reactions !== null || depends_on_old_values(derived2)) {
        value = execute_derived(derived2);
      }
      old_values.set(derived2, value);
      return value;
    }
    var should_connect = (derived2.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (active_reaction.f & CONNECTED) !== 0;
    var is_new = (derived2.f & REACTION_RAN) === 0;
    if (is_dirty(derived2)) {
      if (should_connect) {
        derived2.f |= CONNECTED;
      }
      update_derived(derived2);
    }
    if (should_connect && !is_new) {
      unfreeze_derived_effects(derived2);
      reconnect(derived2);
    }
  }
  if (batch_values?.has(signal)) {
    return batch_values.get(signal);
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function reconnect(derived2) {
  derived2.f |= CONNECTED;
  if (derived2.deps === null) return;
  for (const dep of derived2.deps) {
    var reactions = dep.reactions;
    if (reactions === null) {
      dep.reactions = [derived2];
    } else if (!includes.call(reactions, derived2)) {
      reactions.push(derived2);
    }
    if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
      unfreeze_derived_effects(
        /** @type {Derived} */
        dep
      );
      reconnect(
        /** @type {Derived} */
        dep
      );
    }
  }
}
function depends_on_old_values(derived2) {
  if (derived2.v === UNINITIALIZED) return true;
  if (derived2.deps === null) return false;
  for (const dep of derived2.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function deep_read_state(value) {
  if (typeof value !== "object" || !value || value instanceof EventTarget) {
    return;
  }
  if (STATE_SYMBOL in value) {
    deep_read(value);
  } else if (!Array.isArray(value)) {
    for (let key2 in value) {
      const prop2 = value[key2];
      if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
        deep_read(prop2);
      }
    }
  }
}
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
  if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
  !(value instanceof EventTarget) && !visited.has(value)) {
    visited.add(value);
    if (value instanceof Date) {
      value.getTime();
    }
    for (let key2 in value) {
      try {
        deep_read(value[key2], visited);
      } catch (e) {
      }
    }
    const proto = get_prototype_of(value);
    if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
      const descriptors = get_descriptors(proto);
      for (let key2 in descriptors) {
        const get3 = descriptors[key2].get;
        if (get3) {
          try {
            get3.call(value);
          } catch (e) {
          }
        }
      }
    }
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/events.js
var event_symbol = /* @__PURE__ */ Symbol("events");
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
var last_propagated_event = null;
var last_propagated_event_clear_scheduled = false;
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  last_propagated_event = event2;
  if (!last_propagated_event_clear_scheduled) {
    last_propagated_event_clear_scheduled = true;
    setTimeout(() => {
      last_propagated_event_clear_scheduled = false;
      last_propagated_event = null;
    });
  }
  var path_idx = 0;
  var handled_at = last_propagated_event === event2 && event2[event_symbol];
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2[event_symbol] = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      if (current_target === handler_element) break;
      try {
        var delegated2 = current_target[event_symbol]?.[event_name];
        if (delegated2 != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          delegated2.call(current_target, event2);
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble) break;
      path_idx++;
      current_target = path_idx < path.length ? (
        /** @type {Element} */
        path[path_idx]
      ) : null;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2[event_symbol] = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/reconciler.js
var policy = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (html2) => {
      return html2;
    }
  })
);
function create_trusted_html(html2) {
  return (
    /** @type {string} */
    policy?.createHTML(html2) ?? html2
  );
}
function create_fragment_from_html(html2) {
  var elem = create_element("template");
  elem.innerHTML = create_trusted_html(html2.replaceAll("<!>", "<!---->"));
  return elem.content;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes === null) {
    effect2.nodes = { start, end, a: null, t: null };
  }
}
// @__NO_SIDE_EFFECTS__
function from_html(content, flags2) {
  var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {TemplateNode} */
      get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_namespace(content, flags2, ns = "svg") {
  var has_start = !content.startsWith("<!>");
  var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
  var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
  var node;
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (!node) {
      var fragment = (
        /** @type {DocumentFragment} */
        create_fragment_from_html(wrapped)
      );
      var root13 = (
        /** @type {Element} */
        get_first_child(fragment)
      );
      if (is_fragment) {
        node = document.createDocumentFragment();
        while (get_first_child(root13)) {
          node.appendChild(
            /** @type {TemplateNode} */
            get_first_child(root13)
          );
        }
      } else {
        node = /** @type {Element} */
        get_first_child(root13);
      }
    }
    var clone = (
      /** @type {TemplateNode} */
      node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_svg(content, flags2) {
  return /* @__PURE__ */ from_namespace(content, flags2, "svg");
}
function text(value = "") {
  if (!hydrating) {
    var t = create_text(value + "");
    assign_nodes(t, t);
    return t;
  }
  var node = hydrate_node;
  if (node.nodeType !== TEXT_NODE) {
    node.before(node = create_text());
    set_hydrate_node(node);
  } else {
    merge_text_nodes(
      /** @type {Text} */
      node
    );
  }
  assign_nodes(node, node);
  return node;
}
function comment() {
  if (hydrating) {
    assign_nodes(hydrate_node, null);
    return hydrate_node;
  }
  var frag = document.createDocumentFragment();
  var start = document.createComment("");
  var anchor = create_text();
  frag.append(start, anchor);
  assign_nodes(start, anchor);
  return frag;
}
function append(anchor, dom) {
  if (hydrating) {
    var effect2 = (
      /** @type {Effect & { nodes: EffectNodes }} */
      active_effect
    );
    if ((effect2.f & REACTION_RAN) === 0 || effect2.nodes.end === null) {
      effect2.nodes.end = hydrate_node;
    }
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/utils.js
var DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
var DOM_PROPERTIES = [
  ...DOM_BOOLEAN_ATTRIBUTES,
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "readOnly",
  "value",
  "volume",
  "defaultValue",
  "defaultChecked",
  "srcObject",
  "noValidate",
  "allowFullscreen",
  "disablePictureInPicture",
  "disableRemotePlayback"
];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
var STATE_CREATION_RUNES = (
  /** @type {const} */
  [
    "$state",
    "$state.raw",
    "$derived",
    "$derived.by"
  ]
);
var RUNES = (
  /** @type {const} */
  [
    ...STATE_CREATION_RUNES,
    "$state.eager",
    "$state.snapshot",
    "$props",
    "$props.id",
    "$bindable",
    "$effect",
    "$effect.pre",
    "$effect.tracking",
    "$effect.root",
    "$effect.pending",
    "$inspect",
    "$inspect().with",
    "$inspect.trace",
    "$host"
  ]
);

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/reactivity/create-subscriber.js
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  if (dev_fallback_default) {
    tag(version, "createSubscriber version");
  }
  return () => {
    if (effect_tracking()) {
      get(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          queue_micro_task(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop?.();
              stop = void 0;
              increment(version);
            }
          });
        };
      });
    }
  };
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(node, props, children, transform_error) {
  new Boundary(node, props, children, transform_error);
}
var Boundary = class {
  /** @type {Boundary | null} */
  parent;
  is_pending = false;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #anchor;
  /** @type {TemplateNode | null} */
  #hydrate_open = hydrating ? hydrate_node : null;
  /** @type {BoundaryProps} */
  #props;
  /** @type {((anchor: Node) => void)} */
  #children;
  /** @type {Effect} */
  #effect;
  /** @type {Effect | null} */
  #main_effect = null;
  /** @type {Effect | null} */
  #pending_effect = null;
  /** @type {Effect | null} */
  #failed_effect = null;
  /** @type {DocumentFragment | null} */
  #offscreen_fragment = null;
  #local_pending_count = 0;
  #pending_count = 0;
  #pending_count_update_queued = false;
  /** @type {Map<Effect, number>} */
  #dirty_reactions = /* @__PURE__ */ new Map();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #effect_pending = null;
  #effect_pending_subscriber = createSubscriber(() => {
    this.#effect_pending = source(this.#local_pending_count);
    if (dev_fallback_default) {
      tag(this.#effect_pending, "$effect.pending()");
    }
    return () => {
      this.#effect_pending = null;
    };
  });
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(node, props, children, transform_error) {
    this.#anchor = node;
    this.#props = props;
    this.#children = (anchor) => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      effect2.b = this;
      effect2.f |= BOUNDARY_EFFECT;
      children(anchor);
    };
    this.parent = /** @type {Effect} */
    active_effect.b;
    this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
    this.#effect = block(() => {
      if (hydrating) {
        const comment_data = read_hydration_instruction(
          /** @type {TemplateNode} */
          this.#hydrate_open
        );
        hydrate_next();
        const server_rendered_pending = comment_data === HYDRATION_START_ELSE;
        const server_rendered_failed = comment_data.startsWith(HYDRATION_START_FAILED);
        if (server_rendered_failed) {
          const serialized_error = JSON.parse(comment_data.slice(HYDRATION_START_FAILED.length));
          this.#hydrate_failed_content(serialized_error);
        } else if (server_rendered_pending) {
          this.#hydrate_pending_content();
        } else {
          this.#hydrate_resolved_content();
        }
      } else {
        this.#render();
      }
    }, flags);
    if (hydrating) {
      this.#anchor = hydrate_node;
    }
  }
  #hydrate_resolved_content() {
    try {
      this.#main_effect = branch(() => this.#children(this.#anchor));
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #hydrate_failed_content(error) {
    const failed = this.#props.failed;
    const { reset: reset2, invoke_onerror } = this.#create_reset(error);
    queue_micro_task(invoke_onerror);
    if (!failed) return;
    this.#failed_effect = branch(() => {
      failed(
        this.#anchor,
        () => error,
        () => reset2
      );
    });
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #create_reset(error) {
    var did_reset = false;
    var calling_on_error = false;
    const reset2 = () => {
      if (this.#is_destroyed()) return;
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      if (this.#failed_effect !== null) {
        pause_effect(this.#failed_effect, () => {
          this.#failed_effect = null;
        });
      }
      this.#run(() => {
        this.#render();
      });
    };
    const invoke_onerror = () => {
      if (this.#is_destroyed()) return;
      try {
        calling_on_error = true;
        this.#props.onerror?.(error, reset2);
        calling_on_error = false;
      } catch (err) {
        invoke_error_boundary(err, this.#effect && this.#effect.parent);
      }
    };
    return { reset: reset2, invoke_onerror };
  }
  #is_destroyed() {
    return (this.#effect.f & (DESTROYED | DESTROYING)) !== 0;
  }
  #hydrate_pending_content() {
    const pending2 = this.#props.pending;
    if (!pending2) return;
    this.is_pending = true;
    this.#pending_effect = branch(() => pending2(this.#anchor));
    queue_micro_task(() => {
      if (this.#is_destroyed()) return;
      var fragment = this.#offscreen_fragment = document.createDocumentFragment();
      var anchor = create_text();
      var handled = false;
      fragment.append(anchor);
      this.#main_effect = this.#run(() => {
        try {
          return branch(() => this.#children(anchor));
        } catch (error) {
          try {
            this.error(error);
            handled = true;
          } catch (error2) {
            invoke_error_boundary(error2, this.#effect.parent);
          }
          return null;
        }
      });
      if (this.#main_effect === null) {
        this.#offscreen_fragment = null;
        if (handled) this.#resolve(
          /** @type {Batch} */
          current_batch
        );
        return;
      }
      if (this.#pending_count === 0) {
        this.#anchor.before(fragment);
        this.#offscreen_fragment = null;
        pause_effect(
          /** @type {Effect} */
          this.#pending_effect,
          () => {
            this.#pending_effect = null;
          }
        );
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    });
  }
  #render() {
    try {
      this.is_pending = this.has_pending_snippet();
      this.#pending_count = 0;
      this.#local_pending_count = 0;
      this.#main_effect = branch(() => {
        this.#children(this.#anchor);
      });
      if (this.#pending_count > 0) {
        var fragment = this.#offscreen_fragment = document.createDocumentFragment();
        move_effect(this.#main_effect, fragment);
        const pending2 = (
          /** @type {(anchor: Node) => void} */
          this.#props.pending
        );
        this.#pending_effect = branch(() => pending2(this.#anchor));
      } else {
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {Batch} batch
   */
  #resolve(batch) {
    this.is_pending = false;
    batch.transfer_reactions(this.#dirty_reactions);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(effect2) {
    defer_effect(effect2, this.#dirty_reactions);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#props.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #run(fn) {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_ctx = component_context;
    set_active_effect(this.#effect);
    set_active_reaction(this.#effect);
    set_component_context(this.#effect.ctx);
    try {
      Batch.ensure();
      return fn();
    } finally {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_ctx);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #update_pending_count(d, batch) {
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        this.parent.#update_pending_count(d, batch);
      }
      return;
    }
    this.#pending_count += d;
    if (this.#pending_count === 0) {
      this.#resolve(batch);
      if (this.#pending_effect) {
        pause_effect(this.#pending_effect, () => {
          this.#pending_effect = null;
        });
      }
      if (this.#offscreen_fragment) {
        this.#anchor.before(this.#offscreen_fragment);
        this.#offscreen_fragment = null;
      }
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(d, batch) {
    this.#update_pending_count(d, batch);
    this.#local_pending_count += d;
    if (!this.#effect_pending || this.#pending_count_update_queued) return;
    this.#pending_count_update_queued = true;
    queue_micro_task(() => {
      this.#pending_count_update_queued = false;
      if (this.#effect_pending) {
        internal_set(this.#effect_pending, this.#local_pending_count);
      }
    });
  }
  get_effect_pending() {
    this.#effect_pending_subscriber();
    return get(
      /** @type {Source<number>} */
      this.#effect_pending
    );
  }
  /** @param {unknown} error */
  error(error) {
    if (error === HYDRATION_ERROR) {
      throw error;
    }
    if (!this.#props.onerror && !this.#props.failed) {
      throw error;
    }
    if (current_batch?.is_fork) {
      if (this.#main_effect) current_batch.skip_effect(this.#main_effect);
      if (this.#pending_effect) current_batch.skip_effect(this.#pending_effect);
      if (this.#failed_effect) current_batch.skip_effect(this.#failed_effect);
      current_batch.oncommit(() => {
        if (!this.#is_destroyed()) this.#handle_error(error);
      });
    } else {
      this.#handle_error(error);
    }
  }
  /**
   * @param {unknown} error
   */
  #handle_error(error) {
    if (this.#main_effect) {
      destroy_effect(this.#main_effect);
      this.#main_effect = null;
    }
    if (this.#pending_effect) {
      destroy_effect(this.#pending_effect);
      this.#pending_effect = null;
    }
    if (this.#failed_effect) {
      destroy_effect(this.#failed_effect);
      this.#failed_effect = null;
    }
    if (hydrating) {
      set_hydrate_node(
        /** @type {TemplateNode} */
        this.#hydrate_open
      );
      next();
      set_hydrate_node(skip_nodes());
    }
    let failed = this.#props.failed;
    const handle_error_result = (transformed_error) => {
      if (this.#is_destroyed()) return;
      const { reset: reset2, invoke_onerror } = this.#create_reset(transformed_error);
      invoke_onerror();
      if (failed && !this.#is_destroyed()) {
        this.#failed_effect = this.#run(() => {
          try {
            return branch(() => {
              var effect2 = (
                /** @type {Effect} */
                active_effect
              );
              effect2.b = this;
              effect2.f |= BOUNDARY_EFFECT;
              failed(
                this.#anchor,
                () => transformed_error,
                () => reset2
              );
            });
          } catch (error2) {
            invoke_error_boundary(
              error2,
              /** @type {Effect} */
              this.#effect.parent
            );
            return null;
          }
        });
      }
    };
    queue_micro_task(() => {
      if (this.#is_destroyed()) return;
      var result;
      try {
        result = this.transform_error(error);
      } catch (e) {
        invoke_error_boundary(e, this.#effect && this.#effect.parent);
        return;
      }
      if (result !== null && typeof result === "object" && typeof /** @type {any} */
      result.then === "function") {
        result.then(
          handle_error_result,
          /** @param {unknown} e */
          (e) => invoke_error_boundary(e, this.#effect && this.#effect.parent)
        );
      } else {
        handle_error_result(result);
      }
    });
  }
};

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/render.js
var should_intro = true;
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
  if (str !== /** @type {any} */
  (text2[TEXT_CACHE] ??= text2.nodeValue)) {
    text2[TEXT_CACHE] = str;
    text2.nodeValue = `${str}`;
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  init_operations();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = get_first_child(target);
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    const instance = _mount(component2, { ...options, anchor });
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
      throw error;
    }
    if (error !== HYDRATION_ERROR) {
      console.warn("Failed to hydrate: ", error);
    }
    if (options.recover === false) {
      hydration_failed();
    }
    init_operations();
    clear_text_content(target);
    set_hydrating(false);
    return mount(component2, options);
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
  init_operations();
  var component2 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    boundary(
      /** @type {TemplateNode} */
      anchor_node,
      {
        pending: () => {
        }
      },
      (anchor_node2) => {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        if (context) ctx.c = context;
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node2,
            null
          );
        }
        should_intro = intro;
        component2 = Component(anchor_node2, props) || mark_as_component();
        should_intro = true;
        if (hydrating) {
          active_effect.nodes.end = hydrate_node;
          if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
          hydrate_node.data !== HYDRATION_END) {
            hydration_mismatch();
            throw HYDRATION_ERROR;
          }
        }
        pop();
      },
      transformError
    );
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive2 = is_passive_event(event_name);
        for (const node of [target, document]) {
          var counts = listeners.get(node);
          if (counts === void 0) {
            counts = /* @__PURE__ */ new Map();
            listeners.set(node, counts);
          }
          var count = counts.get(event_name);
          if (count === void 0) {
            node.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
            counts.set(event_name, 1);
          } else {
            counts.set(event_name, count + 1);
          }
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    return () => {
      for (var event_name of registered_events) {
        for (const node of [target, document]) {
          var counts = (
            /** @type {Map<string, number>} */
            listeners.get(node)
          );
          var count = (
            /** @type {number} */
            counts.get(event_name)
          );
          if (--count == 0) {
            node.removeEventListener(event_name, handle_event_propagation);
            counts.delete(event_name);
            if (counts.size === 0) {
              listeners.delete(node);
            }
          } else {
            counts.set(event_name, count);
          }
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount2);
  return component2;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component2, options) {
  const fn = mounted_components.get(component2);
  if (fn) {
    mounted_components.delete(component2);
    return fn(options);
  }
  if (dev_fallback_default) {
    lifecycle_double_unmount();
  }
  return Promise.resolve();
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/blocks/branches.js
var BranchManager = class {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #batches = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #onscreen = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #offscreen = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #outroing = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #transition = true;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(anchor, transition2 = true) {
    this.anchor = anchor;
    this.#transition = transition2;
  }
  /**
   * @param {Batch} batch
   */
  #commit = (batch) => {
    if (!this.#batches.has(batch)) return;
    var key2 = (
      /** @type {Key} */
      this.#batches.get(batch)
    );
    var onscreen = this.#onscreen.get(key2);
    if (onscreen) {
      resume_effect(onscreen);
      this.#outroing.delete(key2);
    } else {
      var offscreen = this.#offscreen.get(key2);
      if (offscreen) {
        resume_effect(offscreen.effect);
        this.#onscreen.set(key2, offscreen.effect);
        this.#offscreen.delete(key2);
        if (dev_fallback_default) {
          offscreen.fragment.lastChild[HMR_ANCHOR] = this.anchor;
        }
        offscreen.fragment.lastChild.remove();
        this.anchor.before(offscreen.fragment);
        onscreen = offscreen.effect;
      }
    }
    for (const [b, k] of this.#batches) {
      this.#batches.delete(b);
      if (b === batch) {
        break;
      }
      const offscreen2 = this.#offscreen.get(k);
      if (offscreen2) {
        destroy_effect(offscreen2.effect);
        this.#offscreen.delete(k);
      }
    }
    for (const [k, effect2] of this.#onscreen) {
      if (k === key2 || this.#outroing.has(k)) continue;
      const on_destroy = () => {
        const keys = Array.from(this.#batches.values());
        if (keys.includes(k)) {
          var fragment = document.createDocumentFragment();
          move_effect(effect2, fragment);
          fragment.append(create_text());
          this.#offscreen.set(k, { effect: effect2, fragment });
        } else {
          destroy_effect(effect2);
        }
        this.#outroing.delete(k);
        this.#onscreen.delete(k);
      };
      if (this.#transition || !onscreen) {
        this.#outroing.add(k);
        pause_effect(effect2, on_destroy, false);
      } else {
        on_destroy();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #discard = (batch) => {
    this.#batches.delete(batch);
    const keys = Array.from(this.#batches.values());
    for (const [k, branch2] of this.#offscreen) {
      if (!keys.includes(k)) {
        destroy_effect(branch2.effect);
        this.#offscreen.delete(k);
      }
    }
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(key2, fn) {
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    if (fn && !this.#onscreen.has(key2) && !this.#offscreen.has(key2)) {
      if (defer) {
        var fragment = document.createDocumentFragment();
        var target = create_text();
        fragment.append(target);
        this.#offscreen.set(key2, {
          effect: branch(() => fn(target)),
          fragment
        });
      } else {
        this.#onscreen.set(
          key2,
          branch(() => fn(this.anchor))
        );
      }
    }
    this.#batches.set(batch, key2);
    if (defer) {
      for (const [k, effect2] of this.#onscreen) {
        if (k === key2) {
          batch.unskip_effect(effect2);
        } else {
          batch.skip_effect(effect2);
        }
      }
      for (const [k, branch2] of this.#offscreen) {
        if (k === key2) {
          batch.unskip_effect(branch2.effect);
        } else {
          batch.skip_effect(branch2.effect);
        }
      }
      batch.oncommit(this.#commit);
      batch.ondiscard(this.#discard);
    } else {
      if (hydrating) {
        this.anchor = hydrate_node;
      }
      this.#commit(batch);
    }
  }
};

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function snippet(node, get_snippet, ...args) {
  var branches = new BranchManager(node);
  block(() => {
    const snippet2 = get_snippet() ?? null;
    if (dev_fallback_default && snippet2 == null) {
      invalid_snippet();
    }
    branches.ensure(snippet2, snippet2 && ((anchor) => snippet2(anchor, ...args)));
  }, EFFECT_TRANSPARENT);
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/index-client.js
if (dev_fallback_default) {
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dev/css.js
var all_styles = /* @__PURE__ */ new Map();
function register_style(hash2, style) {
  var styles = all_styles.get(hash2);
  if (!styles) {
    styles = /* @__PURE__ */ new Set();
    all_styles.set(hash2, styles);
  }
  styles.add(style);
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/blocks/if.js
function if_block(node, fn, elseif = false) {
  var marker;
  if (hydrating) {
    marker = hydrate_node;
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
  function update_branch(key2, fn2) {
    if (hydrating) {
      var data = read_hydration_instruction(
        /** @type {TemplateNode} */
        marker
      );
      if (key2 !== parseInt(data.substring(1))) {
        var anchor = skip_nodes();
        set_hydrate_node(anchor);
        branches.anchor = anchor;
        set_hydrating(false);
        branches.ensure(key2, fn2);
        set_hydrating(true);
        return;
      }
    }
    branches.ensure(key2, fn2);
  }
  block(() => {
    var has_branch = false;
    fn((fn2, key2 = 0) => {
      has_branch = true;
      update_branch(key2, fn2);
    });
    if (!has_branch) {
      update_branch(-1, null);
    }
  }, flags2);
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/blocks/each.js
function index(_, i) {
  return i;
}
function pause_effects(state2, to_destroy, controlled_anchor) {
  var transitions = [];
  var length = to_destroy.length;
  var group;
  var remaining = to_destroy.length;
  for (var i = 0; i < length; i++) {
    let effect2 = to_destroy[i];
    pause_effect(
      effect2,
      () => {
        if (group) {
          group.pending.delete(effect2);
          group.done.add(effect2);
          if (group.pending.size === 0) {
            var groups = (
              /** @type {Set<EachOutroGroup>} */
              state2.outrogroups
            );
            destroy_effects(state2, array_from(group.done));
            groups.delete(group);
            if (groups.size === 0) {
              state2.outrogroups = null;
            }
          }
        } else {
          remaining -= 1;
        }
      },
      false
    );
  }
  if (remaining === 0) {
    var fast_path = transitions.length === 0 && controlled_anchor !== null && state2.pending.size === 0;
    if (fast_path) {
      var anchor = (
        /** @type {Element} */
        controlled_anchor
      );
      var parent_node = (
        /** @type {Element} */
        anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(anchor);
      state2.items.clear();
    }
    destroy_effects(state2, to_destroy, !fast_path);
  } else {
    group = {
      pending: new Set(to_destroy),
      done: /* @__PURE__ */ new Set()
    };
    (state2.outrogroups ??= /* @__PURE__ */ new Set()).add(group);
  }
}
function destroy_effects(state2, to_destroy, remove_dom = true) {
  var preserved_effects;
  if (state2.pending.size > 0) {
    preserved_effects = /* @__PURE__ */ new Set();
    for (const keys of state2.pending.values()) {
      for (const key2 of keys) {
        preserved_effects.add(
          /** @type {EachItem} */
          state2.items.get(key2).e
        );
      }
    }
  }
  for (var i = 0; i < to_destroy.length; i++) {
    var e = to_destroy[i];
    if (preserved_effects?.has(e)) {
      e.f |= EFFECT_OFFSCREEN;
      const fragment = document.createDocumentFragment();
      move_effect(e, fragment);
    } else {
      destroy_effect(to_destroy[i], remove_dom);
    }
  }
}
var offscreen_anchor;
function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var items = /* @__PURE__ */ new Map();
  var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(get_first_child(parent_node)) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return (
      /** @type {V[]} */
      is_array(collection) ? collection : collection == null ? [] : array_from(collection)
    );
  });
  if (dev_fallback_default) {
    tag(each_array, "{#each ...}");
  }
  var pending2 = /* @__PURE__ */ new Map();
  var first_run = true;
  function commit(batch) {
    if ((state2.effect.f & DESTROYED) !== 0) {
      return;
    }
    state2.pending.delete(batch);
    var array = get(each_array);
    state2.fallback = fallback2;
    reconcile(state2, array, anchor, flags2, get_key);
    if (fallback2 !== null) {
      if (array.length === 0) {
        if ((fallback2.f & EFFECT_OFFSCREEN) === 0) {
          resume_effect(fallback2);
        } else {
          fallback2.f ^= EFFECT_OFFSCREEN;
          move(fallback2, null, anchor);
        }
      } else {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
  }
  function discard(batch) {
    state2.pending.delete(batch);
  }
  var effect2 = block(() => {
    var array = (
      /** @type {V[]} */
      get(each_array)
    );
    var length = array.length;
    let mismatch = false;
    if (hydrating) {
      var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (is_else !== (length === 0)) {
        anchor = skip_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    var keys = /* @__PURE__ */ new Set();
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    for (var index2 = 0; index2 < length; index2 += 1) {
      if (hydrating && hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
      hydrate_node.data === HYDRATION_END) {
        anchor = /** @type {Comment} */
        hydrate_node;
        mismatch = true;
        set_hydrating(false);
      }
      var value = array[index2];
      var key2 = get_key(value, index2);
      if (dev_fallback_default) {
        var key_again = get_key(value, index2);
        if (key2 !== key_again) {
          each_key_volatile(String(index2), String(key2), String(key_again));
        }
      }
      var item = first_run ? null : items.get(key2);
      if (item) {
        if (item.v) internal_set(item.v, value);
        if (item.i) internal_set(item.i, index2);
        if (defer) {
          batch.unskip_effect(item.e);
        }
      } else {
        item = create_item(
          items,
          first_run ? anchor : offscreen_anchor ??= create_text(),
          value,
          key2,
          index2,
          render_fn,
          flags2,
          get_collection
        );
        if (!first_run) {
          item.e.f |= EFFECT_OFFSCREEN;
        }
        items.set(key2, item);
      }
      keys.add(key2);
    }
    if (length === 0 && fallback_fn && !fallback2) {
      if (first_run) {
        fallback2 = branch(() => fallback_fn(anchor));
      } else {
        fallback2 = branch(() => fallback_fn(offscreen_anchor ??= create_text()));
        fallback2.f |= EFFECT_OFFSCREEN;
      }
    }
    if (length > keys.size) {
      if (dev_fallback_default) {
        validate_each_keys(array, get_key);
      } else {
        each_key_duplicate("", "", "");
      }
    }
    if (hydrating && length > 0) {
      set_hydrate_node(skip_nodes());
    }
    if (!first_run) {
      pending2.set(batch, keys);
      if (defer) {
        for (const [key3, item2] of items) {
          if (!keys.has(key3)) {
            batch.skip_effect(item2.e);
          }
        }
        batch.oncommit(commit);
        batch.ondiscard(discard);
      } else {
        commit(batch);
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  var state2 = { effect: effect2, flags: flags2, items, pending: pending2, outrogroups: null, fallback: fallback2 };
  first_run = false;
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function skip_to_branch(effect2) {
  while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
    effect2 = effect2.next;
  }
  return effect2;
}
function reconcile(state2, array, anchor, flags2, get_key) {
  var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
  var length = array.length;
  var items = state2.items;
  var current = skip_to_branch(state2.effect.first);
  var seen2;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key2;
  var effect2;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key2).e;
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        effect2.nodes?.a?.measure();
        (to_animate ??= /* @__PURE__ */ new Set()).add(effect2);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key2 = get_key(value, i);
    effect2 = /** @type {EachItem} */
    items.get(key2).e;
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        group.pending.delete(effect2);
        group.done.delete(effect2);
      }
    }
    if ((effect2.f & INERT) !== 0) {
      resume_effect(effect2);
      if (is_animated) {
        effect2.nodes?.a?.unfix();
        (to_animate ??= /* @__PURE__ */ new Set()).delete(effect2);
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
      effect2.f ^= EFFECT_OFFSCREEN;
      if (effect2 === current) {
        move(effect2, null, anchor);
      } else {
        var next2 = prev ? prev.next : current;
        if (effect2 === state2.effect.last) {
          state2.effect.last = effect2.prev;
        }
        if (effect2.prev) effect2.prev.next = effect2.next;
        if (effect2.next) effect2.next.prev = effect2.prev;
        link(state2, prev, effect2);
        link(state2, effect2, next2);
        move(effect2, next2, anchor);
        prev = effect2;
        matched = [];
        stashed = [];
        current = skip_to_branch(prev.next);
        continue;
      }
    }
    if (effect2 !== current) {
      if (seen2 !== void 0 && seen2.has(effect2)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen2.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen2.delete(effect2);
          move(effect2, current, anchor);
          link(state2, effect2.prev, effect2.next);
          link(state2, effect2, prev === null ? state2.effect.first : prev.next);
          link(state2, prev, effect2);
          prev = effect2;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current !== effect2) {
        (seen2 ??= /* @__PURE__ */ new Set()).add(current);
        stashed.push(current);
        current = skip_to_branch(current.next);
      }
      if (current === null) {
        continue;
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
      matched.push(effect2);
    }
    prev = effect2;
    current = skip_to_branch(effect2.next);
  }
  if (state2.outrogroups !== null) {
    for (const group of state2.outrogroups) {
      if (group.pending.size === 0) {
        destroy_effects(state2, array_from(group.done));
        state2.outrogroups?.delete(group);
      }
    }
    if (state2.outrogroups.size === 0) {
      state2.outrogroups = null;
    }
  }
  if (current !== null || seen2 !== void 0) {
    var to_destroy = [];
    if (seen2 !== void 0) {
      for (effect2 of seen2) {
        if ((effect2.f & INERT) === 0) {
          to_destroy.push(effect2);
        }
      }
    }
    while (current !== null) {
      if ((current.f & INERT) === 0 && current !== state2.fallback) {
        to_destroy.push(current);
      }
      current = skip_to_branch(current.next);
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      if (to_animate === void 0) return;
      for (effect2 of to_animate) {
        effect2.nodes?.a?.apply();
      }
    });
  }
}
function create_item(items, anchor, value, key2, index2, render_fn, flags2, get_collection) {
  var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, false, false) : source(value) : null;
  var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
  if (dev_fallback_default && v) {
    v.trace = () => {
      get_collection()[i?.v ?? index2];
    };
  }
  return {
    v,
    i,
    e: branch(() => {
      render_fn(anchor, v ?? value, i ?? index2, get_collection);
      return () => {
        items.delete(key2);
      };
    })
  };
}
function move(effect2, next2, anchor) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  var dest = next2 && (next2.f & EFFECT_OFFSCREEN) === 0 ? (
    /** @type {EffectNodes} */
    next2.nodes.start
  ) : anchor;
  while (node !== null) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    if (node === end) {
      return;
    }
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.effect.first = next2;
  } else {
    prev.next = next2;
  }
  if (next2 === null) {
    state2.effect.last = prev;
  } else {
    next2.prev = prev;
  }
}
function validate_each_keys(array, key_fn) {
  const keys = /* @__PURE__ */ new Map();
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const key2 = key_fn(array[i], i);
    if (keys.has(key2)) {
      const a = String(keys.get(key2));
      const b = String(i);
      let k = String(key2);
      if (k.startsWith("[object ")) k = null;
      each_key_duplicate(a, b, k);
    }
    keys.set(key2, i);
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function head(hash2, render_fn) {
  let previous_hydrate_node = null;
  let was_hydrating = hydrating;
  var anchor;
  if (hydrating) {
    previous_hydrate_node = hydrate_node;
    var head_anchor = get_first_child(document.head);
    while (head_anchor !== null && (head_anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    head_anchor.data !== hash2)) {
      head_anchor = get_next_sibling(head_anchor);
    }
    if (head_anchor === null) {
      set_hydrating(false);
    } else {
      var start = (
        /** @type {TemplateNode} */
        get_next_sibling(head_anchor)
      );
      head_anchor.remove();
      set_hydrate_node(start);
    }
  }
  if (!hydrating) {
    anchor = document.head.appendChild(create_text());
  }
  try {
    block(() => {
      var e = branch(() => render_fn(anchor));
      e.f |= HEAD_EFFECT;
      if (!hydrating) {
        if (e.nodes === null) {
          e.nodes = { start: anchor, end: anchor, a: null, t: null };
        } else {
          e.nodes.end = anchor;
        }
      }
    });
  } finally {
    if (was_hydrating) {
      set_hydrating(true);
      set_hydrate_node(
        /** @type {TemplateNode} */
        previous_hydrate_node
      );
    }
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/css.js
function append_styles(anchor, css) {
  effect(() => {
    anchor = active_effect?.parent?.nodes?.start ?? anchor;
    var root13 = anchor.getRootNode();
    var target = (
      /** @type {ShadowRoot} */
      root13.host ? (
        /** @type {ShadowRoot} */
        root13
      ) : (
        /** @type {Document} */
        root13.head ?? /** @type {Document} */
        root13.ownerDocument.head
      )
    );
    if (!target.querySelector("#" + css.hash)) {
      const style = create_element("style");
      style.id = css.hash;
      style.textContent = css.code;
      target.appendChild(style);
      if (dev_fallback_default) {
        register_style(css.hash, style);
      }
    }
  });
}

// node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/shared/attributes.js
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key2 of Object.keys(directives)) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a = 0;
        while ((a = classname.indexOf(key2, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/class.js
function set_class(dom, is_html, value, hash2, prev_classes, next_classes) {
  var prev = (
    /** @type {any} */
    dom[CLASS_CACHE]
  );
  if (hydrating || prev !== value || prev === void 0) {
    var next_class_name = to_class(value, hash2, next_classes);
    if (!hydrating || next_class_name !== dom.getAttribute("class")) {
      if (next_class_name == null) {
        dom.removeAttribute("class");
      } else if (is_html) {
        dom.className = next_class_name;
      } else {
        dom.setAttribute("class", next_class_name);
      }
    }
    dom[CLASS_CACHE] = value;
  } else if (next_classes && prev_classes !== next_classes) {
    for (var key2 in next_classes) {
      var is_present = !!next_classes[key2];
      if (prev_classes == null || is_present !== !!prev_classes[key2]) {
        dom.classList.toggle(key2, is_present);
      }
    }
  }
  return next_classes;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function set_selected(option, selected) {
  if (selected) {
    if (!option.hasAttribute("selected")) option.setAttribute("selected", "");
  } else {
    option.removeAttribute("selected");
  }
}
function apply_default_select_value(select, preserve) {
  var value = select.__defaultValue;
  var multiple = select.multiple;
  var values = multiple ? value ?? [] : null;
  if (multiple && !is_array(values)) return;
  var index2 = select.selectedIndex;
  var selected = preserve && multiple ? new Set(select.selectedOptions) : null;
  for (var option of select.options) {
    var option_value = get_option_value(option);
    set_selected(
      option,
      multiple ? (
        /** @type {any[]} */
        values.includes(option_value)
      ) : is(option_value, value)
    );
  }
  if (!preserve) return;
  if (selected !== null) {
    for (option of select.options) {
      var was_selected = selected.has(option);
      if (option.selected !== was_selected) option.selected = was_selected;
    }
  } else if (select.selectedIndex !== index2) {
    select.selectedIndex = index2;
  }
}
function select_option(select, value, mounting = false) {
  if (select.multiple) {
    if (value == void 0) {
      return;
    }
    if (!is_array(value)) {
      return select_multiple_invalid_value();
    }
    for (var option of select.options) {
      option.selected = value.includes(get_option_value(option));
    }
    return;
  }
  for (option of select.options) {
    var option_value = get_option_value(option);
    if (is(option_value, value)) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
function init_select(select) {
  var observer = new MutationObserver((entries) => {
    if (entries.every(is_selectedcontent_mutation)) return;
    if ("__defaultValue" in select) {
      apply_default_select_value(select, false);
    }
    if ("__value" in select) {
      select_option(select, select.__value);
    }
  });
  observer.observe(select, {
    // Listen to option element changes
    childList: true,
    subtree: true,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: true,
    attributeFilter: ["value"]
  });
  teardown(() => {
    observer.disconnect();
  });
}
function bind_select_value(select, get3, set2 = get3) {
  var batches = /* @__PURE__ */ new WeakSet();
  var mounting = true;
  listen_to_event_and_reset_event(select, "change", (is_reset) => {
    var query = is_reset ? "[selected]" : ":checked";
    var value;
    if (select.multiple) {
      value = [].map.call(select.querySelectorAll(query), get_option_value);
    } else {
      var selected_option = select.querySelector(query) ?? // will fall back to first non-disabled option if no option is selected
      select.querySelector("option:not([disabled])");
      value = selected_option && get_option_value(selected_option);
    }
    set2(value);
    select.__value = value;
    if (current_batch !== null) {
      batches.add(current_batch);
    }
  });
  effect(() => {
    var value = get3();
    if (select === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        async_mode_flag ? previous_batch : current_batch
      );
      if (batches.has(batch)) {
        return;
      }
    }
    select_option(select, value, mounting);
    if (mounting && value === void 0) {
      var selected_option = select.querySelector(":checked");
      if (selected_option !== null) {
        value = get_option_value(selected_option);
        set2(value);
      }
    }
    select.__value = value;
    mounting = false;
  });
}
function get_option_value(option) {
  if ("__value" in option) {
    return option.__value;
  } else {
    return option.value;
  }
}
function is_selectedcontent_mutation(entry) {
  if (
    /** @type {Element} */
    entry.target.closest("selectedcontent") !== null
  ) {
    return true;
  }
  if (entry.type === "childList") {
    var nodes = [...entry.addedNodes, ...entry.removedNodes];
    return nodes.length > 0 && nodes.every((node) => node.nodeName === "SELECTEDCONTENT");
  }
  return false;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/attributes.js
var IS_CUSTOM_ELEMENT = /* @__PURE__ */ Symbol("is custom element");
var IS_HTML = /* @__PURE__ */ Symbol("is html");
var LINK_TAG = IS_XHTML ? "link" : "LINK";
function remove_input_defaults(input) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input.hasAttribute("value")) {
      var value = input.value;
      set_attribute2(input, "value", null);
      input.value = value;
    }
    if (input.hasAttribute("checked")) {
      var checked = input.checked;
      set_attribute2(input, "checked", null);
      input.checked = checked;
    }
  };
  input[FORM_RESET_HANDLER] = remove_defaults;
  queue_micro_task(remove_defaults);
  add_form_reset_listener();
}
function set_attribute2(element2, attribute, value, skip_warning) {
  var attributes = get_attributes(element2);
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === LINK_TAG) {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value ?? "");
      }
      return;
    }
  }
  var previous = attributes[attribute];
  if (previous === (attributes[attribute] = value)) return;
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).has(attribute)) {
    element2[attribute] = value;
  } else if (
    // while hydrating, skip a number or boolean whose string the server already rendered
    !(hydrating && (typeof value === "number" || typeof value === "boolean") && previous === String(value))
  ) {
    element2.setAttribute(attribute, value);
  }
}
function get_attributes(element2) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    element2[ATTRIBUTES_CACHE] ??= {
      [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
      [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
    }
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var cache_key = element2.getAttribute("is") || element2.nodeName;
  var setters = setters_cache.get(cache_key);
  if (setters) return setters;
  setters_cache.set(cache_key, setters = /* @__PURE__ */ new Set());
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key2 in descriptors) {
      if (descriptors[key2].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      key2 !== "innerHTML" && key2 !== "textContent" && key2 !== "innerText") {
        setters.add(key2);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  if (!dev_fallback_default) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
  hydration_attribute_changed(
    attribute,
    element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
    String(value)
  );
}
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
function split_srcset(srcset) {
  return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
function srcset_url_equal(element2, srcset) {
  var element_urls = split_srcset(element2.srcset);
  var urls = split_srcset(srcset);
  return urls.length === element_urls.length && urls.every(
    ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
  );
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function bind_value(input, get3, set2 = get3) {
  var batches = /* @__PURE__ */ new WeakSet();
  listen_to_event_and_reset_event(input, "input", async (is_reset) => {
    if (dev_fallback_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
    await tick();
    if (value !== (value = get3())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      var length = input.value.length;
      input.value = value ?? "";
      if (end !== null) {
        var new_length = input.value.length;
        if (start === end && end === length && new_length > length) {
          input.selectionStart = new_length;
          input.selectionEnd = new_length;
        } else {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, new_length);
        }
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get3) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
  }
  render_effect(() => {
    if (dev_fallback_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = get3();
    if (input === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        async_mode_flag ? previous_batch : current_batch
      );
      if (batches.has(batch)) {
        return;
      }
    }
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function init(immutable = false) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  const callbacks = context.l.u;
  if (!callbacks) return;
  let props = () => deep_read_state(context.s);
  if (immutable) {
    let version = 0;
    let prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = derived(() => {
      let changed = false;
      const props2 = context.s;
      for (const key2 in props2) {
        if (props2[key2] !== prev[key2]) {
          prev[key2] = props2[key2];
          changed = true;
        }
      }
      if (changed) version++;
      return version;
    });
    props = () => get(d);
  }
  if (callbacks.b.length) {
    user_pre_effect(() => {
      observe_all(context, props);
      run_all(callbacks.b);
    });
  }
  user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns) {
        if (typeof fn === "function") {
          fn();
        }
      }
    };
  });
  if (callbacks.a.length) {
    user_effect(() => {
      observe_all(context, props);
      run_all(callbacks.a);
    });
  }
}
function observe_all(context, props) {
  if (context.l.s) {
    for (const signal of context.l.s) get(signal);
  }
  props();
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/store.js
var is_store_binding = false;
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/reactivity/props.js
var legacy_rest_props_handler = {
  get(target, key2) {
    if (target.exclude.includes(key2)) return;
    get(target.version);
    return key2 in target.special ? target.special[key2]() : target.props[key2];
  },
  set(target, key2, value) {
    if (!(key2 in target.special)) {
      var previous_effect = active_effect;
      try {
        set_active_effect(target.parent_effect);
        target.special[key2] = prop(
          {
            get [key2]() {
              return target.props[key2];
            }
          },
          /** @type {string} */
          key2,
          PROPS_IS_UPDATED
        );
      } finally {
        set_active_effect(previous_effect);
      }
    }
    target.special[key2](value);
    update(target.version);
    return true;
  },
  getOwnPropertyDescriptor(target, key2) {
    if (target.exclude.includes(key2)) return;
    if (key2 in target.props) {
      return {
        enumerable: true,
        configurable: true,
        value: target.props[key2]
      };
    }
  },
  deleteProperty(target, key2) {
    if (target.exclude.includes(key2)) return true;
    target.exclude.push(key2);
    update(target.version);
    return true;
  },
  has(target, key2) {
    if (target.exclude.includes(key2)) return false;
    return key2 in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key2) => !target.exclude.includes(key2));
  }
};
function legacy_rest_props(props, exclude) {
  return new Proxy(
    {
      props,
      exclude,
      special: {},
      version: source(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        active_effect
      )
    },
    legacy_rest_props_handler
  );
}
var spread_props_handler = {
  get(target, key2) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      if (typeof p === "object" && p !== null && key2 in p) return p[key2];
    }
  },
  set(target, key2, value) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      const desc = get_descriptor(p, key2);
      if (desc && desc.set) {
        desc.set(value);
        return true;
      }
    }
    return false;
  },
  getOwnPropertyDescriptor(target, key2) {
    let i = target.props.length;
    while (i--) {
      let p = target.props[i];
      if (is_function(p)) p = p();
      if (typeof p === "object" && p !== null && key2 in p) {
        const descriptor = get_descriptor(p, key2);
        if (descriptor && !descriptor.configurable) {
          descriptor.configurable = true;
        }
        return descriptor;
      }
    }
  },
  has(target, key2) {
    if (key2 === STATE_SYMBOL || key2 === LEGACY_PROPS) return false;
    for (let p of target.props) {
      if (is_function(p)) p = p();
      if (p != null && key2 in p) return true;
    }
    return false;
  },
  ownKeys(target) {
    const keys = [];
    for (let p of target.props) {
      if (is_function(p)) p = p();
      if (!p) continue;
      for (const key2 in p) {
        if (!keys.includes(key2)) keys.push(key2);
      }
      for (const key2 of Object.getOwnPropertySymbols(p)) {
        if (!keys.includes(key2)) keys.push(key2);
      }
    }
    return keys;
  }
};
function spread_props(...props) {
  return new Proxy({ props }, spread_props_handler);
}
function prop(props, key2, flags2, fallback2) {
  var runes = !legacy_mode_flag || (flags2 & PROPS_IS_RUNES) !== 0;
  var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
  var fallback_value = (
    /** @type {V} */
    fallback2
  );
  var fallback_dirty = true;
  var fallback_signal = (
    /** @type {Derived<V> | undefined} */
    void 0
  );
  var get_fallback = () => {
    if (lazy && runes) {
      fallback_signal ??= derived(
        /** @type {() => V} */
        fallback2
      );
      return get(fallback_signal);
    }
    if (fallback_dirty) {
      fallback_dirty = false;
      fallback_value = lazy ? untrack(
        /** @type {() => V} */
        fallback2
      ) : (
        /** @type {V} */
        fallback2
      );
    }
    return fallback_value;
  };
  let setter;
  if (bindable) {
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    setter = get_descriptor(props, key2)?.set ?? (is_entry_props && key2 in props ? (v) => props[key2] = v : void 0);
  }
  var initial_value;
  var is_store_sub = false;
  if (bindable) {
    [initial_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key2]
    ));
  } else {
    initial_value = /** @type {V} */
    props[key2];
  }
  if (initial_value === void 0 && fallback2 !== void 0) {
    initial_value = get_fallback();
    if (setter) {
      if (runes) props_invalid_value(key2);
      setter(initial_value);
    }
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      return value;
    };
  } else {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value !== void 0) {
        fallback_value = /** @type {V} */
        void 0;
      }
      return value === void 0 ? fallback_value : value;
    };
  }
  if (runes && (flags2 & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return (
      /** @type {() => V} */
      (function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        }
        return getter();
      })
    );
  }
  var overridden = false;
  var d = ((flags2 & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
    overridden = false;
    return getter();
  });
  if (dev_fallback_default) {
    d.label = key2;
  }
  if (bindable) get(d);
  var parent_effect = (
    /** @type {Effect} */
    active_effect
  );
  return (
    /** @type {() => V} */
    (function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get(d) : runes && bindable ? proxy(value) : value;
        set(d, new_value);
        overridden = true;
        if (fallback_value !== void 0) {
          fallback_value = new_value;
        }
        return value;
      }
      if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
        return d.v;
      }
      return get(d);
    })
  );
}

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/legacy/legacy-client.js
function createClassComponent(options) {
  return new Svelte4Component(options);
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key2, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover,
      transformError: options.transformError
    });
    if (!async_mode_flag && (!options?.props?.$$host || options.sync === false)) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key2 of Object.keys(this.#instance)) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return this.#instance[key2];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key2] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    this.#events[event2] = this.#events[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event2].push(cb);
    return () => {
      this.#events[event2] = this.#events[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};

// node_modules/.pnpm/svelte@5.57.3/node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** @type {any} The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** @type {Record<string, any>} Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $$l = {};
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    /** @type {any} The managed render effect for reflecting attributes */
    $$me;
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    $$shadowRoot = null;
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {ShadowRootInit | undefined} shadow_root_init
     */
    constructor($$componentCtor, $$slots, shadow_root_init) {
      super();
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (shadow_root_init) {
        this.$$shadowRoot = this.attachShadow(shadow_root_init);
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = create_element("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key2 in this.$$p_d) {
          if (!(key2 in this.$$d) && this[key2] !== void 0) {
            this.$$d[key2] = this[key2];
            delete this[key2];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.$$shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            this.$$r = true;
            for (const key2 of object_keys(this.$$c)) {
              if (!this.$$p_d[key2]?.reflect) continue;
              this.$$d[key2] = this.$$c[key2];
              const attribute_value = get_custom_element_value(
                key2,
                this.$$d[key2],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key2].attribute || key2);
              } else {
                this.setAttribute(this.$$p_d[key2].attribute || key2, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr2, _oldValue, newValue) {
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key2) => this.$$p_d[key2].attribute === attribute_name || !this.$$p_d[key2].attribute && key2.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  const type = props_definition[prop2]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}

// support-kb/src/lib/kb/staleness.ts
var STALE_AFTER_DAYS = 180;
function isoDay(d) {
  return new Date(d).toISOString().slice(0, 10);
}
function daysSince(d, now = /* @__PURE__ */ new Date()) {
  return Math.floor((now.getTime() - new Date(d).getTime()) / 864e5);
}

// support-kb/src/lib/layouts/runbook.svelte
var root = from_html(`<p class="banner svelte-s3qelp"> </p>`);
var root_1 = from_html(`<div class="kb svelte-s3qelp"><header><a class="crumb svelte-s3qelp" href="/kb">support desk \xB7 kb</a> <h1 class="svelte-s3qelp"> </h1> <p class="meta svelte-s3qelp"><span>owner <b> </b></span> <span> </span> <span> </span></p></header> <!> <main><!></main> <footer class="svelte-s3qelp">Pages are written by people. Tables and charts are built from data at render time.</footer></div>`);
var $$css = {
  hash: "svelte-s3qelp",
  code: ":root {--bg: #fbfaf7;--fg: #1d1d1b;--muted: #6b6a66;--line: #e3e0d8;--accent: #2f6f5e;--warn: #b4501f;--warn-bg: #fbeee6;--note-bg: #eef5f2;--mono: ui-monospace, 'Cascadia Code', Menlo, monospace;}\n  @media (prefers-color-scheme: dark) {:root {--bg: #171716;--fg: #ecebe6;--muted: #9c9a93;--line: #34332f;--accent: #6fbfa6;--warn: #f0905d;--warn-bg: #3a2418;--note-bg: #1d2c27;}\n  }body {margin:0;background:var(--bg);color:var(--fg);font:16px/1.6 system-ui, sans-serif;}.kb table {border-collapse:collapse;width:100%;margin:1rem 0;font-size:0.92rem;}.kb th, .kb td {border-bottom:1px solid var(--line);padding:0.35rem 0.5rem;text-align:left;}.kb code {font-family:var(--mono);font-size:0.88em;}.kb a {color:var(--accent);}.kb.svelte-s3qelp {max-width:760px;margin:0 auto;padding:2rem 16px 4rem;}.crumb.svelte-s3qelp {font:0.8rem var(--mono);text-decoration:none;color:var(--muted);}h1.svelte-s3qelp {margin:0.25rem 0 0.5rem;line-height:1.2;}.meta.svelte-s3qelp {display:flex;flex-wrap:wrap;gap:0.5rem 1rem;color:var(--muted);font-size:0.85rem;margin:0;}.status.svelte-s3qelp {border:1px solid var(--line);border-radius:99px;padding:0 0.6rem;}.stale.svelte-s3qelp {color:var(--warn);font-weight:600;}.banner.svelte-s3qelp {background:var(--warn-bg);color:var(--warn);padding:0.6rem 1rem;border-radius:6px;}footer.svelte-s3qelp {margin-top:3rem;color:var(--muted);font-size:0.8rem;border-top:1px solid var(--line);padding-top:1rem;}"
};
function Runbook($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css);
  const age = user_derived(() => daysSince($$props.reviewed));
  const stale = user_derived(() => get(age) > STALE_AFTER_DAYS);
  var div = root_1();
  head("s3qelp", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `${$$props.title ?? ""} \xB7 support kb`;
    });
  });
  var header = child(div);
  var h1 = sibling(child(header), 2);
  var text2 = only_child(h1, true);
  var p = sibling(h1, 2);
  var span = child(p);
  var b = sibling(child(span));
  var text_1 = only_child(b, true);
  reset(span);
  var span_1 = sibling(span, 2);
  var text_2 = only_child(span_1, true);
  var span_2 = sibling(span_1, 2);
  let classes;
  var text_3 = only_child(span_2);
  reset(p);
  reset(header);
  var node = sibling(header, 2);
  {
    var consequent = ($$anchor2) => {
      var p_1 = root();
      var text_4 = only_child(p_1);
      template_effect(() => set_text(text_4, `Nobody has re-read this page in ${get(age) ?? ""} days. Check it against the live views before you rely on it.`));
      append($$anchor2, p_1);
    };
    if_block(node, ($$render) => {
      if (get(stale)) $$render(consequent);
    });
  }
  var main = sibling(node, 2);
  var node_1 = child(main);
  snippet(node_1, () => $$props.children);
  reset(main);
  next(2);
  reset(div);
  template_effect(
    ($0) => {
      set_text(text2, $$props.title);
      set_text(text_1, $$props.owner);
      set_class(span_1, 1, `status ${$$props.status ?? ""}`, "svelte-s3qelp");
      set_text(text_2, $$props.status);
      classes = set_class(span_2, 1, "svelte-s3qelp", null, classes, { stale: get(stale) });
      set_text(text_3, `reviewed ${$0 ?? ""} \xB7 ${get(age) ?? ""} days ago${get(stale) ? " \xB7 stale" : ""}`);
    },
    [() => isoDay($$props.reviewed)]
  );
  append($$anchor, div);
  pop();
}

// support-kb/src/lib/kb/KbIndex.svelte
var root2 = from_html(`<tr><td><a> </a></td><td> </td><td> </td><td> </td></tr>`);
var root_12 = from_html(`<table><thead><tr><th>page</th><th>owner</th><th>status</th><th>reviewed</th></tr></thead><tbody></tbody></table>`);
var $$css2 = {
  hash: "svelte-10d5lcy",
  code: ".stale.svelte-10d5lcy {color:var(--warn);font-weight:600;}"
};
function KbIndex($$anchor, $$props) {
  push($$props, false);
  append_styles($$anchor, $$css2);
  const pages = {
    "/src/routes/kb/decisions/0001-dedupe-by-subject/+page.svx": {
      "metadata": {
        "layout": "runbook",
        "title": "0001 \xB7 Duplicates share a subject line",
        "owner": "rune",
        "status": "accepted",
        "reviewed": "2024-06-11T00:00:00.000Z"
      }
    },
    "/src/routes/kb/incidents/4471/+page.svx": {
      "metadata": {
        "layout": "runbook",
        "title": "#4471 \xB7 dates parse mm/dd in eu locales",
        "owner": "support desk",
        "status": "known",
        "reviewed": "2026-09-30T00:00:00.000Z"
      }
    },
    "/src/routes/kb/incidents/4471-review/+page.svx": {
      "metadata": {
        "layout": "runbook",
        "title": "#4471 review \xB7 separate causes behind the date reports",
        "owner": "hello2kamal and Codex",
        "status": "closed per engineering update",
        "reviewed": "2026-11-02",
        "signature": "v1.eyJzdWIiOiIyNjM0IiwiYXVkIjoiY2hhbGxlbmdlOndoYXQtaXQtc2hvd3MiLCJpYXQiOjE3OTM2NjMwNjksImV4cCI6MTc5Mzc0OTQ2OX0.nMSOaNWc0Epv1P_syFBuFCK3yMD-hjYTjJpoQlZooXk"
      }
    },
    "/src/routes/kb/triage/dedupe/+page.svx": {
      "metadata": {
        "layout": "runbook",
        "title": "Triage: duplicate reports",
        "owner": "support desk",
        "status": "accepted",
        "reviewed": "2024-06-11T00:00:00.000Z"
      }
    }
  };
  const rows = Object.entries(pages).map(([path, mod]) => ({
    href: path.replace("/src/routes", "").replace("/+page.svx", ""),
    ...mod.metadata
  })).sort((x, y) => x.href.localeCompare(y.href));
  init();
  var table = root_12();
  var tbody = sibling(child(table));
  each(tbody, 5, () => rows, (r2) => r2.href, ($$anchor2, r2) => {
    var tr = root2();
    var td = child(tr);
    var a = child(td);
    var text2 = only_child(a, true);
    reset(td);
    var td_1 = sibling(td);
    var text_1 = only_child(td_1, true);
    var td_2 = sibling(td_1);
    var text_2 = only_child(td_2, true);
    var td_3 = sibling(td_2);
    let classes;
    var text_3 = only_child(td_3, true);
    reset(tr);
    template_effect(
      ($0, $1) => {
        set_attribute2(a, "href", get(r2).href);
        set_text(text2, get(r2).title);
        set_text(text_1, get(r2).owner);
        set_text(text_2, get(r2).status);
        classes = set_class(td_3, 1, "svelte-10d5lcy", null, classes, { stale: $0 });
        set_text(text_3, $1);
      },
      [
        () => daysSince(get(r2).reviewed) > STALE_AFTER_DAYS,
        () => isoDay(get(r2).reviewed)
      ]
    );
    append($$anchor2, tr);
  });
  reset(tbody);
  reset(table);
  append($$anchor, table);
  pop();
}

// support-kb/src/routes/kb/+page.svx
var metadata = {
  "layout": "runbook",
  "title": "Support knowledge base",
  "owner": "support desk",
  "status": "living",
  "reviewed": "2026-09-28T00:00:00.000Z"
};
var { layout, title, owner, status, reviewed } = metadata;
var root3 = from_html(
  `<p>What the support desk knows, kept next to the code that knows it. One desk, every product: <code>sched-prod</code> (calendar invites for about 300k people) and the rest. When something breaks, the reports land here first.</p> <p>Start with <a href="/kb/triage/dedupe">triage</a> if you are new on the desk.</p> <h2>Pages</h2> <!> <h2>Writing a page</h2> <p>Keep the words here and the logic in <code>src/lib</code>. A number that can be computed should be
computed by a component, not typed into a paragraph.</p>`,
  1
);
function _page_svx($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  Runbook($$anchor, spread_props(() => $$sanitized_props, () => metadata, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root3();
      var node = sibling(first_child(fragment_1), 6);
      KbIndex(node, {});
      next(4);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}

// support-kb/src/routes/kb/decisions/0001-dedupe-by-subject/+page.svx
var metadata2 = {
  "layout": "runbook",
  "title": "0001 \xB7 Duplicates share a subject line",
  "owner": "rune",
  "status": "accepted",
  "reviewed": "2024-06-11T00:00:00.000Z"
};
var { layout: layout2, title: title2, owner: owner2, status: status2, reviewed: reviewed2 } = metadata2;
var root4 = from_html(
  `<p><strong>Date:</strong> 11 June 2024 \xB7 <strong>Deciders:</strong> Rune (product), support desk</p> <h2>Context</h2> <p>Reports arrive faster than the desk can read them. During incidents the same problem comes in
hundreds of times, and engineering asks for one ticket per issue.</p> <h2>Decision</h2> <p>Two reports are the same issue when their subject lines match after lowercasing and stripping
punctuation. The desk merges on subject alone; nobody has to read the body.</p> <h2>Consequences</h2> <ul><li>Fast: one person can triage an incident morning.</li> <li>Reports with different subjects about the same bug end up in separate tickets. Accepted;
engineering merges them later.</li></ul>`,
  1
);
function _page_svx2($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  Runbook($$anchor, spread_props(() => $$sanitized_props, () => metadata2, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root4();
      next(12);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}

// support-kb/src/lib/data/reports-4471.json
var reports_4471_default = [
  {
    id: "R-41200",
    receivedAt: "2026-04-01T09:12:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Our 7 April reminder went out on 4 July. Is this a joke. It is not April Fools where we are.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:03:00+02:00"
  },
  {
    id: "R-41201",
    receivedAt: "2026-04-01T09:34:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Sorry. 4 July went out on 7 April. I have been up since five.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:05:00+02:00"
  },
  {
    id: "R-41202",
    receivedAt: "2026-04-02T10:41:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Invite says Tuesday 12 May. Calendar says Monday 11 May. My client turned up on the Monday. We had coffee.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:06:00+02:00"
  },
  {
    id: "R-41203",
    receivedAt: "2026-04-03T12:14:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Booked for 2 December. The invite says 12 February.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:09:00+02:00"
  },
  {
    id: "R-41204",
    receivedAt: "2026-04-04T21:55:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Dates mixed up",
    body: "Invite says Thursday 10 December. We agreed Monday 12 October. Which one do I trust?",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:10:00+02:00"
  },
  {
    id: "R-41205",
    receivedAt: "2026-04-05T12:29:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Booking shows a different day",
    body: "Customer booked 3 October and got an invite for 10 March. Please look at this.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:13:00+02:00"
  },
  {
    id: "R-41206",
    receivedAt: "2026-04-05T16:54:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Second time this month: 4 March turned into 3 April.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:15:00+02:00"
  },
  {
    id: "R-41208",
    receivedAt: "2026-04-06T14:52:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Dates mixed up",
    body: "Booked for 2 March. The invite says 3 February.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:18:00+02:00"
  },
  {
    id: "R-41209",
    receivedAt: "2026-04-06T15:18:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Every booking in June is one day off. Only June. Why only June.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:19:00+02:00"
  },
  {
    id: "R-41210",
    receivedAt: "2026-04-07T08:53:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Second time this month: 12 April turned into 4 December.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:20:00+02:00"
  },
  {
    id: "R-41211",
    receivedAt: "2026-04-07T09:28:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "The reminder for 5 March arrived for 3 May.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:23:00+02:00"
  },
  {
    id: "R-41212",
    receivedAt: "2026-04-07T10:22:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Every booking we make shows the wrong day. 8 December is now 12 August.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:25:00+02:00"
  },
  {
    id: "R-41213",
    receivedAt: "2026-04-07T17:14:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "Monday 1 June showed as Tuesday 6 January. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:27:00+02:00"
  },
  {
    id: "R-41214",
    receivedAt: "2026-04-08T18:22:00+02:00",
    tenant: "copper.studio",
    channel: "email",
    subject: "Date is wrong",
    body: "Invite says Thursday 9 July. We agreed Monday 7 September. Which one do I trust?",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:28:00+02:00"
  },
  {
    id: "R-41215",
    receivedAt: "2026-04-08T19:23:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "My client came on 3 February instead of 2 March. We sorted it out.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:30:00+02:00"
  },
  {
    id: "R-41216",
    receivedAt: "2026-04-11T12:34:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "We had two people show up on 5 December. They were booked for 12 May.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:33:00+02:00"
  },
  {
    id: "R-41217",
    receivedAt: "2026-04-12T15:23:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The reminder for 9 May arrived for 5 September.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:34:00+02:00"
  },
  {
    id: "R-41218",
    receivedAt: "2026-04-12T18:55:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "Customer booked 6 November and got an invite for 11 June. Please look at this.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:35:00+02:00"
  },
  {
    id: "R-41219",
    receivedAt: "2026-04-13T13:46:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Thursday 12 March showed as Thursday 3 December. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:36:00+02:00"
  },
  {
    id: "R-41220",
    receivedAt: "2026-04-13T18:08:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "We had two people show up on 5 June. They were booked for 6 May.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:38:00+02:00"
  },
  {
    id: "R-41221",
    receivedAt: "2026-04-13T21:27:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Date is wrong",
    body: "Booked for 2 July. The invite says 7 February.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:41:00+02:00"
  },
  {
    id: "R-41222",
    receivedAt: "2026-04-14T17:49:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Customer booked 1 October and got an invite for 10 January. Please look at this.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:43:00+02:00"
  },
  {
    id: "R-41223",
    receivedAt: "2026-04-14T19:08:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Wrong date again",
    body: "Tuesday 8 December showed as Wednesday 12 August. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:44:00+02:00"
  },
  {
    id: "R-41224",
    receivedAt: "2026-04-17T13:50:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "Every booking we make shows the wrong day. 10 September is now 9 October.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:47:00+02:00"
  },
  {
    id: "R-41225",
    receivedAt: "2026-04-17T14:02:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Wrong date again",
    body: "The reminder for 3 May arrived for 5 March.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:48:00+02:00"
  },
  {
    id: "R-41227",
    receivedAt: "2026-04-17T14:23:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "We had two people show up on 2 June. They were booked for 6 February.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:50:00+02:00"
  },
  {
    id: "R-41228",
    receivedAt: "2026-04-17T17:27:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Customer booked 2 July and got an invite for 7 February. Please look at this.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:51:00+02:00"
  },
  {
    id: "R-41229",
    receivedAt: "2026-04-17T20:59:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Every booking we make shows the wrong day. 5 March is now 3 May.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:54:00+02:00"
  },
  {
    id: "R-41230",
    receivedAt: "2026-04-17T22:44:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "My client came on 1 June instead of 6 January. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:56:00+02:00"
  },
  {
    id: "R-41231",
    receivedAt: "2026-04-18T11:22:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Second time this month: 8 January turned into 1 August.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T09:58:00+02:00"
  },
  {
    id: "R-41232",
    receivedAt: "2026-04-19T13:15:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Date is wrong",
    body: "Second time this month: 6 January turned into 1 June.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:00:00+02:00"
  },
  {
    id: "R-41233",
    receivedAt: "2026-04-19T21:27:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Month and day swapped?",
    body: "We had two people show up on 10 November. They were booked for 11 October.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:01:00+02:00"
  },
  {
    id: "R-41234",
    receivedAt: "2026-04-20T07:46:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Every booking we make shows the wrong day. 1 March is now 3 January.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:03:00+02:00"
  },
  {
    id: "R-41235",
    receivedAt: "2026-04-20T10:50:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Wrong date again",
    body: "Second time this month: 2 May turned into 5 February.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:06:00+02:00"
  },
  {
    id: "R-41236",
    receivedAt: "2026-04-20T11:52:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "The invite arrived before I made the booking. I would like to know how.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:08:00+02:00"
  },
  {
    id: "R-41237",
    receivedAt: "2026-04-20T21:02:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Date is wrong",
    body: "The reminder for 12 January arrived for 1 December.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:08:00+02:00"
  },
  {
    id: "R-41238",
    receivedAt: "2026-04-20T22:16:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Every booking we make shows the wrong day. 8 March is now 3 August.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:11:00+02:00"
  },
  {
    id: "R-41239",
    receivedAt: "2026-04-21T10:21:00+02:00",
    tenant: "kettle.books",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "The reminder for 8 November arrived for 11 August.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:13:00+02:00"
  },
  {
    id: "R-41240",
    receivedAt: "2026-04-21T12:34:00+02:00",
    tenant: "morrow.tax",
    channel: "form",
    subject: "Month and day swapped?",
    body: "Second time this month: 7 February turned into 2 July.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:14:00+02:00"
  },
  {
    id: "R-41241",
    receivedAt: "2026-04-21T19:21:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Invite came on the wrong day",
    body: "We had two people show up on 8 June. They were booked for 6 August.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:15:00+02:00"
  },
  {
    id: "R-41242",
    receivedAt: "2026-04-22T14:50:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "The reminder for 5 October arrived for 10 May.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:16:00+02:00"
  },
  {
    id: "R-41243",
    receivedAt: "2026-04-22T21:56:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "My client came on 5 October instead of 10 May. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:18:00+02:00"
  },
  {
    id: "R-41244",
    receivedAt: "2026-04-23T13:35:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Wrong date again",
    body: "Second time this month: 1 December turned into 12 January.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:19:00+02:00"
  },
  {
    id: "R-41245",
    receivedAt: "2026-04-23T18:38:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Month and day swapped?",
    body: "My client came on 10 November instead of 11 October. We sorted it out.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:21:00+02:00"
  },
  {
    id: "R-41246",
    receivedAt: "2026-04-24T10:27:00+01:00",
    tenant: "stone.and.sons",
    channel: "form",
    subject: "Dates mixed up",
    body: "We had two people show up on 12 June. They were booked for 6 December.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:22:00+02:00"
  },
  {
    id: "R-41247",
    receivedAt: "2026-04-24T12:30:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Customer booked 11 March and got an invite for 3 November. Please look at this.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:25:00+02:00"
  },
  {
    id: "R-41248",
    receivedAt: "2026-04-24T15:13:00+02:00",
    tenant: "long.table",
    channel: "form",
    subject: "Invite came on the wrong day",
    body: "Invite says Wednesday 5 August. We agreed Friday 8 May. Which one do I trust?",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:27:00+02:00"
  },
  {
    id: "R-41249",
    receivedAt: "2026-04-24T19:27:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Date is wrong",
    body: "My client came on 10 November instead of 11 October. We sorted it out.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:28:00+02:00"
  },
  {
    id: "R-41250",
    receivedAt: "2026-04-24T19:35:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Wrong date again",
    body: "Booked for 10 December. The invite says 12 October.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:29:00+02:00"
  },
  {
    id: "R-41251",
    receivedAt: "2026-04-25T20:48:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Booking on the wrong date",
    body: "Wednesday 7 January showed as Wednesday 1 July. I moved it myself.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:30:00+02:00"
  },
  {
    id: "R-41251",
    receivedAt: "2026-04-25T20:48:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Booking on the wrong date",
    body: "Wednesday 7 January showed as Wednesday 1 July. I moved it myself.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:30:00+02:00"
  },
  {
    id: "R-41252",
    receivedAt: "2026-04-26T15:56:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Wrong date again",
    body: "The reminder for 3 January arrived for 1 March.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:31:00+02:00"
  },
  {
    id: "R-41253",
    receivedAt: "2026-04-27T13:56:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "My client came on 4 February instead of 2 April. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:33:00+02:00"
  },
  {
    id: "R-41254",
    receivedAt: "2026-04-28T20:08:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "The reminder for 8 April arrived for 4 August.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:35:00+02:00"
  },
  {
    id: "R-41255",
    receivedAt: "2026-04-29T13:22:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Dates mixed up",
    body: "Customer booked 6 December and got an invite for 12 June. Please look at this.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:38:00+02:00"
  },
  {
    id: "R-41256",
    receivedAt: "2026-04-29T16:38:00+02:00",
    tenant: "long.table",
    channel: "form",
    subject: "Month and day swapped?",
    body: "My client came on 6 July instead of 7 June. We sorted it out.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:40:00+02:00"
  },
  {
    id: "R-41257",
    receivedAt: "2026-04-30T09:53:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Every booking we make shows the wrong day. 12 August is now 8 December.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:42:00+02:00"
  },
  {
    id: "R-41258",
    receivedAt: "2026-05-01T11:08:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "We had two people show up on 9 December. They were booked for 12 September.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:44:00+02:00"
  },
  {
    id: "R-41259",
    receivedAt: "2026-05-01T12:24:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Client turned up on the wrong day",
    body: "Customer booked 11 April and got an invite for 4 November. Please look at this.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:45:00+02:00"
  },
  {
    id: "R-41260",
    receivedAt: "2026-05-01T21:18:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Second time this month: 1 November turned into 11 January.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:47:00+02:00"
  },
  {
    id: "R-41261",
    receivedAt: "2026-05-02T10:47:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Booked for 2 September. The invite says 9 February.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:50:00+02:00"
  },
  {
    id: "R-41262",
    receivedAt: "2026-05-02T13:17:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Month and day swapped?",
    body: "We had two people show up on 3 February. They were booked for 2 March.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:52:00+02:00"
  },
  {
    id: "R-41263",
    receivedAt: "2026-05-02T15:49:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "The reminder for 3 February arrived for 2 March.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:53:00+02:00"
  },
  {
    id: "R-41264",
    receivedAt: "2026-05-02T18:18:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Invite says Sunday 5 April. We agreed Monday 4 May. Which one do I trust?",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:56:00+02:00"
  },
  {
    id: "R-41265",
    receivedAt: "2026-05-03T08:12:00+02:00",
    tenant: "long.table",
    channel: "form",
    subject: "Booking shows a different day",
    body: "The reminder for 7 August arrived for 8 July.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T10:59:00+02:00"
  },
  {
    id: "R-41266",
    receivedAt: "2026-05-03T11:40:00+02:00",
    tenant: "copper.studio",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "Every booking we make shows the wrong day. 12 November is now 11 December.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:01:00+02:00"
  },
  {
    id: "R-41267",
    receivedAt: "2026-05-03T14:36:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Date is wrong",
    body: "The calendar invite for 12 November landed on 11 December. Nobody here touched it.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:02:00+02:00"
  },
  {
    id: "R-41268",
    receivedAt: "2026-05-03T16:23:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Wrong date again",
    body: "The reminder for 5 February arrived for 2 May.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:03:00+02:00"
  },
  {
    id: "R-41269",
    receivedAt: "2026-05-04T14:49:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Second time this month: 5 August turned into 8 May.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:05:00+02:00"
  },
  {
    id: "R-41270",
    receivedAt: "2026-05-04T16:03:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Our 5 June invoice meeting is shown as 6 May. We paid someone on the wrong day because of this. Not your problem. Noting it.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:08:00+02:00"
  },
  {
    id: "R-41271",
    receivedAt: "2026-05-04T16:33:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Wrong date again",
    body: "Second time this month: 12 January turned into 1 December.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:10:00+02:00"
  },
  {
    id: "R-41272",
    receivedAt: "2026-05-04T21:05:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "We had two people show up on 12 January. They were booked for 1 December.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:11:00+02:00"
  },
  {
    id: "R-41273",
    receivedAt: "2026-05-07T10:16:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Dates mixed up",
    body: "Saturday 3 January showed as Sunday 1 March. I moved it myself.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:14:00+02:00"
  },
  {
    id: "R-41274",
    receivedAt: "2026-05-07T15:27:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Friday 7 August showed as Wednesday 8 July. I moved it myself.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:16:00+02:00"
  },
  {
    id: "R-41275",
    receivedAt: "2026-05-07T18:27:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Month and day swapped?",
    body: "My client came on 11 July instead of 7 November. We sorted it out.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:18:00+02:00"
  },
  {
    id: "R-41276",
    receivedAt: "2026-05-08T12:58:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Customer booked 11 June and got an invite for 6 November. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:20:00+02:00"
  },
  {
    id: "R-41277",
    receivedAt: "2026-05-08T17:43:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The reminder for 11 January arrived for 1 November.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:23:00+02:00"
  },
  {
    id: "R-41278",
    receivedAt: "2026-05-08T18:54:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:25:00+02:00"
  },
  {
    id: "R-41279",
    receivedAt: "2026-05-08T19:21:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Second time this month: 6 November turned into 11 June.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:28:00+02:00"
  },
  {
    id: "R-41280",
    receivedAt: "2026-05-10T16:29:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Every booking we make shows the wrong day. 11 January is now 1 November.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:31:00+02:00"
  },
  {
    id: "R-41281",
    receivedAt: "2026-05-11T09:44:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Booked for 7 June. The invite says 6 July.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:34:00+02:00"
  },
  {
    id: "R-41282",
    receivedAt: "2026-05-12T13:50:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Second time this month: 11 April turned into 4 November.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:37:00+02:00"
  },
  {
    id: "R-41283",
    receivedAt: "2026-05-12T16:23:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Date is wrong",
    body: "My client came on 10 December instead of 12 October. We sorted it out.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:40:00+02:00"
  },
  {
    id: "R-41284",
    receivedAt: "2026-05-14T11:06:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "Every booking we make shows the wrong day. 6 August is now 8 June.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:42:00+02:00"
  },
  {
    id: "R-41285",
    receivedAt: "2026-05-14T22:27:00+02:00",
    tenant: "lantern.row",
    channel: "form",
    subject: "Calendar invite is wrong",
    body: "Booked for 1 December. The invite says 12 January.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:43:00+02:00"
  },
  {
    id: "R-41286",
    receivedAt: "2026-05-17T09:27:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Invite says Monday 9 November. We agreed Friday 11 September. Which one do I trust?",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:45:00+02:00"
  },
  {
    id: "R-41287",
    receivedAt: "2026-05-17T17:10:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Date is wrong",
    body: "Second time this month: 8 February turned into 2 August.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:47:00+02:00"
  },
  {
    id: "R-41288",
    receivedAt: "2026-05-17T21:53:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Customer booked 7 October and got an invite for 10 July. Please look at this.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:49:00+02:00"
  },
  {
    id: "R-41289",
    receivedAt: "2026-05-18T15:42:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Every booking we make shows the wrong day. 7 August is now 8 July.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:50:00+02:00"
  },
  {
    id: "R-41290",
    receivedAt: "2026-05-19T13:44:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Appointment moved by itself",
    body: 'Is there a setting for "my country writes the day first". I have looked. I would pay for it.',
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:51:00+02:00"
  },
  {
    id: "R-41291",
    receivedAt: "2026-05-20T09:56:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "The calendar invite for 12 February landed on 2 December. Nobody here touched it.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:53:00+02:00"
  },
  {
    id: "R-41292",
    receivedAt: "2026-05-20T14:29:00+01:00",
    tenant: "harbour.dental",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "Tuesday 10 November showed as Sunday 11 October. I moved it myself.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:54:00+02:00"
  },
  {
    id: "R-41293",
    receivedAt: "2026-05-20T21:10:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Date is wrong",
    body: "Customer booked 1 September and got an invite for 9 January. Please look at this.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:55:00+02:00"
  },
  {
    id: "R-41294",
    receivedAt: "2026-05-21T21:10:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Wrong date again",
    body: "Thursday 5 November showed as Monday 11 May. I moved it myself.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T11:58:00+02:00"
  },
  {
    id: "R-41295",
    receivedAt: "2026-05-22T20:49:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Wrong date again",
    body: "Invite says Monday 2 March. We agreed Tuesday 3 February. Which one do I trust?",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:01:00+02:00"
  },
  {
    id: "R-41296",
    receivedAt: "2026-05-23T18:39:00+02:00",
    tenant: "copper.studio",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "Invite says Monday 6 July. We agreed Sunday 7 June. Which one do I trust?",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:04:00+02:00"
  },
  {
    id: "R-41297",
    receivedAt: "2026-05-23T21:58:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong date again",
    body: "Customer booked 7 June and got an invite for 6 July. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:06:00+02:00"
  },
  {
    id: "R-41298",
    receivedAt: "2026-05-24T14:52:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The reminder for 12 January arrived for 1 December.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:08:00+02:00"
  },
  {
    id: "R-41299",
    receivedAt: "2026-05-24T14:39:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Month and day swapped?",
    body: "We had two people show up on 9 October. They were booked for 10 September.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:08:00+02:00"
  },
  {
    id: "R-41300",
    receivedAt: "2026-05-24T22:57:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Booked for 12 October. The invite says 10 December.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:10:00+02:00"
  },
  {
    id: "R-41301",
    receivedAt: "2026-05-26T09:53:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong date again",
    body: "Booked for 2 July. The invite says 7 February.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:12:00+02:00"
  },
  {
    id: "R-41300",
    receivedAt: "2026-05-24T22:57:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Booked for 12 October. The invite says 10 December.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:10:00+02:00"
  },
  {
    id: "R-41301",
    receivedAt: "2026-05-26T09:53:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong date again",
    body: "Booked for 2 July. The invite says 7 February.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:12:00+02:00"
  },
  {
    id: "R-41302",
    receivedAt: "2026-05-26T18:23:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Dates mixed up",
    body: "The reminder for 5 November arrived for 11 May.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:14:00+02:00"
  },
  {
    id: "R-41303",
    receivedAt: "2026-05-27T08:55:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Booked for 8 November. The invite says 11 August.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:16:00+02:00"
  },
  {
    id: "R-41304",
    receivedAt: "2026-05-27T09:16:00+02:00",
    tenant: "lantern.row",
    channel: "form",
    subject: "Appointment moved by itself",
    body: "The calendar invite for 8 January landed on 1 August. Nobody here touched it.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:18:00+02:00"
  },
  {
    id: "R-41305",
    receivedAt: "2026-05-27T13:04:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Reminder went out on the wrong day",
    body: "Booked for 9 August. The invite says 8 September.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:19:00+02:00"
  },
  {
    id: "R-41306",
    receivedAt: "2026-05-27T14:19:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "Thursday 10 December showed as Monday 12 October. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:22:00+02:00"
  },
  {
    id: "R-41308",
    receivedAt: "2026-05-28T09:27:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Invite came on the wrong day",
    body: "We had two people show up on 3 May. They were booked for 5 March.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:25:00+02:00"
  },
  {
    id: "R-41309",
    receivedAt: "2026-05-28T17:27:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Wrong date again",
    body: "Thursday 8 January showed as Saturday 1 August. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:28:00+02:00"
  },
  {
    id: "R-41310",
    receivedAt: "2026-05-29T21:44:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "The calendar invite for 12 July landed on 7 December. Nobody here touched it.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:29:00+02:00"
  },
  {
    id: "R-41311",
    receivedAt: "2026-05-30T10:55:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Booking shows a different day",
    body: "Booked for 8 May. The invite says 5 August.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:30:00+02:00"
  },
  {
    id: "R-41312",
    receivedAt: "2026-05-30T20:00:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Month and day swapped?",
    body: "We had two people show up on 4 June. They were booked for 6 April.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:33:00+02:00"
  },
  {
    id: "R-41313",
    receivedAt: "2026-05-31T09:05:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Customer booked 11 May and got an invite for 5 November. Please look at this.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:36:00+02:00"
  },
  {
    id: "R-41314",
    receivedAt: "2026-05-31T13:28:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Booked for 8 April. The invite says 4 August.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:37:00+02:00"
  },
  {
    id: "R-41315",
    receivedAt: "2026-05-31T19:21:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "The calendar invite for 1 November landed on 11 January. Nobody here touched it.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:38:00+02:00"
  },
  {
    id: "R-41316",
    receivedAt: "2026-06-01T18:59:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Friday 2 October showed as Tuesday 10 February. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:40:00+02:00"
  },
  {
    id: "R-41317",
    receivedAt: "2026-06-01T20:05:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Wrong date again",
    body: "Second time this month: 1 September turned into 9 January.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:42:00+02:00"
  },
  {
    id: "R-41318",
    receivedAt: "2026-06-02T22:28:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Every booking we make shows the wrong day. 12 November is now 11 December.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:44:00+02:00"
  },
  {
    id: "R-41319",
    receivedAt: "2026-06-03T12:43:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Invite says Wednesday 4 November. We agreed Saturday 11 April. Which one do I trust?",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:45:00+02:00"
  },
  {
    id: "R-41320",
    receivedAt: "2026-06-04T15:35:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "We had two people show up on 5 November. They were booked for 11 May.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:47:00+02:00"
  },
  {
    id: "R-41321",
    receivedAt: "2026-06-04T16:56:00+01:00",
    tenant: "harbour.dental",
    channel: "form",
    subject: "Dates mixed up",
    body: "Customer booked 12 May and got an invite for 5 December. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:49:00+02:00"
  },
  {
    id: "R-41322",
    receivedAt: "2026-06-05T09:57:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Month and day swapped?",
    body: "My client came on 10 December instead of 12 October. We sorted it out.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:52:00+02:00"
  },
  {
    id: "R-41323",
    receivedAt: "2026-06-05T12:35:00+02:00",
    tenant: "morrow.tax",
    channel: "form",
    subject: "Client turned up on the wrong day",
    body: "The reminder for 12 August arrived for 8 December.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:53:00+02:00"
  },
  {
    id: "R-41324",
    receivedAt: "2026-06-05T16:33:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Customer booked 4 December and got an invite for 12 April. Please look at this.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:56:00+02:00"
  },
  {
    id: "R-41325",
    receivedAt: "2026-06-05T22:13:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Month and day swapped?",
    body: "The reminder for 12 June arrived for 6 December.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T12:59:00+02:00"
  },
  {
    id: "R-41327",
    receivedAt: "2026-06-06T08:52:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "My client came on 9 January instead of 1 September. We sorted it out.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:02:00+02:00"
  },
  {
    id: "R-41328",
    receivedAt: "2026-06-06T20:06:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "My client came on 2 May instead of 5 February. We sorted it out.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:05:00+02:00"
  },
  {
    id: "R-41329",
    receivedAt: "2026-06-07T11:27:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "The calendar invite for 12 November landed on 11 December. Nobody here touched it.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:06:00+02:00"
  },
  {
    id: "R-41330",
    receivedAt: "2026-06-07T16:11:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Customer booked 7 April and got an invite for 4 July. Please look at this.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:08:00+02:00"
  },
  {
    id: "R-41331",
    receivedAt: "2026-06-07T17:36:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Client turned up on the wrong day",
    body: "Customer booked 2 April and got an invite for 4 February. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:09:00+02:00"
  },
  {
    id: "R-41332",
    receivedAt: "2026-06-07T20:06:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "We had two people show up on 1 September. They were booked for 9 January.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:11:00+02:00"
  },
  {
    id: "R-41333",
    receivedAt: "2026-06-07T22:08:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "Saturday 12 September showed as Wednesday 9 December. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:14:00+02:00"
  },
  {
    id: "R-41334",
    receivedAt: "2026-06-08T10:59:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "My client came on 2 May instead of 5 February. We sorted it out.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:15:00+02:00"
  },
  {
    id: "R-41335",
    receivedAt: "2026-06-08T20:22:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Client turned up on the wrong day",
    body: "The calendar invite for 9 October landed on 10 September. Nobody here touched it.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:16:00+02:00"
  },
  {
    id: "R-41336",
    receivedAt: "2026-06-08T20:25:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Tuesday 12 May showed as Saturday 5 December. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:19:00+02:00"
  },
  {
    id: "R-41337",
    receivedAt: "2026-06-08T21:27:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "We had two people show up on 8 June. They were booked for 6 August.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:21:00+02:00"
  },
  {
    id: "R-41338",
    receivedAt: "2026-06-09T08:51:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Date is wrong",
    body: "Saturday 7 February showed as Thursday 2 July. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:22:00+02:00"
  },
  {
    id: "R-41339",
    receivedAt: "2026-06-09T22:38:00+02:00",
    tenant: "morrow.tax",
    channel: "form",
    subject: "Appointment moved by itself",
    body: "The calendar invite for 5 March landed on 3 May. Nobody here touched it.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:25:00+02:00"
  },
  {
    id: "R-41340",
    receivedAt: "2026-06-10T18:22:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Invite says Sunday 9 August. We agreed Tuesday 8 September. Which one do I trust?",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:27:00+02:00"
  },
  {
    id: "R-41341",
    receivedAt: "2026-06-10T22:43:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Booking shows a different day",
    body: "The calendar invite for 9 June landed on 6 September. Nobody here touched it.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:29:00+02:00"
  },
  {
    id: "R-41342",
    receivedAt: "2026-06-11T08:32:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "Every booking we make shows the wrong day. 4 March is now 3 April.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:31:00+02:00"
  },
  {
    id: "R-41343",
    receivedAt: "2026-06-11T15:23:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Dates mixed up",
    body: "The calendar invite for 6 May landed on 5 June. Nobody here touched it.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:33:00+02:00"
  },
  {
    id: "R-41344",
    receivedAt: "2026-06-12T09:58:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "Client in Lisbon got Tuesday. Client in Toronto got Monday. Same meeting. We held it twice.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:35:00+02:00"
  },
  {
    id: "R-41345",
    receivedAt: "2026-06-12T22:52:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Customer booked 9 February and got an invite for 2 September. Please look at this.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:38:00+02:00"
  },
  {
    id: "R-41346",
    receivedAt: "2026-06-13T13:25:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Date is wrong",
    body: "Booked for 11 January. The invite says 1 November.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:39:00+02:00"
  },
  {
    id: "R-41347",
    receivedAt: "2026-06-13T17:11:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Second time this month: 1 July turned into 7 January.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:41:00+02:00"
  },
  {
    id: "R-41348",
    receivedAt: "2026-06-14T12:50:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "The reminder for 10 July arrived for 7 October.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:42:00+02:00"
  },
  {
    id: "R-41349",
    receivedAt: "2026-06-14T14:49:00+02:00",
    tenant: "ridge.clinic",
    channel: "form",
    subject: "Month and day swapped?",
    body: "Thursday 10 September showed as Friday 9 October. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:43:00+02:00"
  },
  {
    id: "R-41350",
    receivedAt: "2026-06-15T16:29:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Wrong date again",
    body: "Second time this month: 2 June turned into 6 February.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:45:00+02:00"
  },
  {
    id: "R-41351",
    receivedAt: "2026-06-16T08:43:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Every booking we make shows the wrong day. 11 February is now 2 November.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:47:00+02:00"
  },
  {
    id: "R-41352",
    receivedAt: "2026-06-16T10:44:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Second time this month: 5 March turned into 3 May.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:48:00+02:00"
  },
  {
    id: "R-41353",
    receivedAt: "2026-06-16T10:46:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Every booking we make shows the wrong day. 3 August is now 8 March.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:50:00+02:00"
  },
  {
    id: "R-41352",
    receivedAt: "2026-06-16T10:44:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Second time this month: 5 March turned into 3 May.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:48:00+02:00"
  },
  {
    id: "R-41353",
    receivedAt: "2026-06-16T10:46:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Every booking we make shows the wrong day. 3 August is now 8 March.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:50:00+02:00"
  },
  {
    id: "R-41354",
    receivedAt: "2026-06-16T15:49:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Month and day swapped?",
    body: "The calendar invite for 8 June landed on 6 August. Nobody here touched it.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:53:00+02:00"
  },
  {
    id: "R-41355",
    receivedAt: "2026-06-16T20:42:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Customer booked 6 November and got an invite for 11 June. Please look at this.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:56:00+02:00"
  },
  {
    id: "R-41356",
    receivedAt: "2026-06-17T12:32:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Wednesday 5 August showed as Friday 8 May. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T13:58:00+02:00"
  },
  {
    id: "R-41357",
    receivedAt: "2026-06-17T14:48:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Wednesday 1 July showed as Wednesday 7 January. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:01:00+02:00"
  },
  {
    id: "R-41358",
    receivedAt: "2026-06-17T21:40:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Month and day swapped?",
    body: "The reminder for 1 July arrived for 7 January.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:04:00+02:00"
  },
  {
    id: "R-41359",
    receivedAt: "2026-06-18T08:01:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "Invite says Friday 4 September. We agreed Thursday 9 April. Which one do I trust?",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:06:00+02:00"
  },
  {
    id: "R-41360",
    receivedAt: "2026-06-18T11:29:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "We had two people show up on 4 October. They were booked for 10 April.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:09:00+02:00"
  },
  {
    id: "R-41361",
    receivedAt: "2026-06-18T21:08:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The calendar invite for 1 August landed on 8 January. Nobody here touched it.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:12:00+02:00"
  },
  {
    id: "R-41362",
    receivedAt: "2026-06-19T13:21:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Date is wrong",
    body: "Customer booked 12 February and got an invite for 2 December. Please look at this.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:14:00+02:00"
  },
  {
    id: "R-41363",
    receivedAt: "2026-06-19T14:27:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Month and day swapped?",
    body: "My client came on 12 January instead of 1 December. We sorted it out.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:15:00+02:00"
  },
  {
    id: "R-41364",
    receivedAt: "2026-06-20T14:19:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "We had two people show up on 10 January. They were booked for 1 October.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:16:00+02:00"
  },
  {
    id: "R-41365",
    receivedAt: "2026-06-20T21:21:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Invite says Tuesday 4 August. We agreed Wednesday 8 April. Which one do I trust?",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:19:00+02:00"
  },
  {
    id: "R-41366",
    receivedAt: "2026-06-21T13:17:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Calendar invite is wrong",
    body: "Sunday 11 October showed as Tuesday 10 November. I moved it myself.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:22:00+02:00"
  },
  {
    id: "R-41367",
    receivedAt: "2026-06-22T12:14:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Wednesday 11 March showed as Tuesday 3 November. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:25:00+02:00"
  },
  {
    id: "R-41368",
    receivedAt: "2026-06-24T09:08:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Month and day swapped?",
    body: "We had two people show up on 9 April. They were booked for 4 September.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:27:00+02:00"
  },
  {
    id: "R-41369",
    receivedAt: "2026-06-25T11:43:00+02:00",
    tenant: "nine.lanterns",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "Booked for 5 November. The invite says 11 May.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:27:00+02:00"
  },
  {
    id: "R-41370",
    receivedAt: "2026-06-25T11:59:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Booking shows a different day",
    body: "The calendar invite for 9 December landed on 12 September. Nobody here touched it.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:29:00+02:00"
  },
  {
    id: "R-41371",
    receivedAt: "2026-06-25T15:06:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "The calendar invite for 7 June landed on 6 July. Nobody here touched it.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:32:00+02:00"
  },
  {
    id: "R-41372",
    receivedAt: "2026-06-25T20:34:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Dates mixed up",
    body: "Invite says Tuesday 8 September. We agreed Sunday 9 August. Which one do I trust?",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:35:00+02:00"
  },
  {
    id: "R-41373",
    receivedAt: "2026-06-26T09:18:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Booked for 7 March. The invite says 3 July.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:37:00+02:00"
  },
  {
    id: "R-41374",
    receivedAt: "2026-06-26T09:57:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "The reminder for 9 November arrived for 11 September.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:39:00+02:00"
  },
  {
    id: "R-41375",
    receivedAt: "2026-06-27T11:13:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "The calendar invite for 7 April landed on 4 July. Nobody here touched it.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:41:00+02:00"
  },
  {
    id: "R-41376",
    receivedAt: "2026-06-27T19:29:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "The reminder for 12 March arrived for 3 December.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:42:00+02:00"
  },
  {
    id: "R-41377",
    receivedAt: "2026-06-28T10:38:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Second time this month: 2 March turned into 3 February.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:43:00+02:00"
  },
  {
    id: "R-41378",
    receivedAt: "2026-06-29T08:06:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "The reminder for 7 February arrived for 2 July.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:44:00+02:00"
  },
  {
    id: "R-41379",
    receivedAt: "2026-06-30T08:21:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "We had two people show up on 12 October. They were booked for 10 December.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:47:00+02:00"
  },
  {
    id: "R-41380",
    receivedAt: "2026-06-30T10:27:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Month and day swapped?",
    body: "We had two people show up on 7 May. They were booked for 5 July.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:49:00+02:00"
  },
  {
    id: "R-41381",
    receivedAt: "2026-06-30T16:46:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "My client came on 10 February instead of 2 October. We sorted it out.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:52:00+02:00"
  },
  {
    id: "R-41382",
    receivedAt: "2026-06-30T18:12:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Every booking we make shows the wrong day. 6 August is now 8 June.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:53:00+02:00"
  },
  {
    id: "R-41383",
    receivedAt: "2026-07-01T13:45:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Monday 3 August showed as Sunday 8 March. I moved it myself.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:55:00+02:00"
  },
  {
    id: "R-41384",
    receivedAt: "2026-07-01T15:19:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Calendar invite is wrong",
    body: "The calendar invite for 8 January landed on 1 August. Nobody here touched it.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:56:00+02:00"
  },
  {
    id: "R-41385",
    receivedAt: "2026-07-01T20:36:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Second time this month: 5 December turned into 12 May.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T14:57:00+02:00"
  },
  {
    id: "R-41386",
    receivedAt: "2026-07-01T21:52:00+01:00",
    tenant: "harbour.dental",
    channel: "form",
    subject: "Dates mixed up",
    body: "Second time this month: 10 August turned into 8 October.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T15:00:00+02:00"
  },
  {
    id: "R-41387",
    receivedAt: "2026-07-02T08:17:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Date is wrong",
    body: "Invite says Sunday 4 October. We agreed Friday 10 April. Which one do I trust?",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-02T15:01:00+02:00"
  },
  {
    id: "R-41388",
    receivedAt: "2026-07-02T21:41:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Wrong date again",
    body: "Invite says Sunday 4 January. We agreed Wednesday 1 April. Which one do I trust?",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-03T00:32:00+02:00"
  },
  {
    id: "R-41389",
    receivedAt: "2026-07-03T19:42:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Dates mixed up",
    body: "Wednesday 4 February showed as Thursday 2 April. I moved it myself.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-03T23:58:00+02:00"
  },
  {
    id: "R-41390",
    receivedAt: "2026-07-05T08:08:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "We had two people show up on 9 August. They were booked for 8 September.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-05T10:56:00+02:00"
  },
  {
    id: "R-41391",
    receivedAt: "2026-07-05T11:06:00+02:00",
    tenant: "copper.studio",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The reminder for 12 October arrived for 10 December.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-05T15:27:00+02:00"
  },
  {
    id: "R-41392",
    receivedAt: "2026-07-05T13:19:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Wrong date again",
    body: "The reminder for 3 February arrived for 2 March.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-05T17:02:00+02:00"
  },
  {
    id: "R-41393",
    receivedAt: "2026-07-06T12:22:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The reminder for 1 July arrived for 7 January.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-06T15:28:00+02:00"
  },
  {
    id: "R-41394",
    receivedAt: "2026-07-06T13:12:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "We had two people show up on 1 September. They were booked for 9 January.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-06T18:00:00+02:00"
  },
  {
    id: "R-41395",
    receivedAt: "2026-07-07T17:15:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Sunday 5 July showed as Thursday 7 May. I moved it myself.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-07T18:54:00+02:00"
  },
  {
    id: "R-41396",
    receivedAt: "2026-07-07T19:19:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Dates mixed up",
    body: "My client came on 10 April instead of 4 October. We sorted it out.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-07T23:59:00+02:00"
  },
  {
    id: "R-41397",
    receivedAt: "2026-07-07T19:05:00+01:00",
    tenant: "stone.and.sons",
    channel: "form",
    subject: "Calendar invite is wrong",
    body: "My client came on 4 December instead of 12 April. We sorted it out.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-08T00:24:00+02:00"
  },
  {
    id: "R-41398",
    receivedAt: "2026-07-07T22:47:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "The calendar invite for 7 June landed on 6 July. Nobody here touched it.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-08T00:12:00+02:00"
  },
  {
    id: "R-41399",
    receivedAt: "2026-07-08T12:03:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Wrong date again",
    body: "The reminder for 2 March arrived for 3 February.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-08T12:54:00+02:00"
  },
  {
    id: "R-41400",
    receivedAt: "2026-07-09T15:16:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Reminder went out on the wrong day",
    body: "We had two people show up on 11 October. They were booked for 10 November.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-09T19:04:00+02:00"
  },
  {
    id: "R-41401",
    receivedAt: "2026-07-09T16:13:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "We had two people show up on 10 June. They were booked for 6 October.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-09T17:31:00+02:00"
  },
  {
    id: "R-41402",
    receivedAt: "2026-07-10T13:17:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "The reminder for 4 September arrived for 9 April.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-10T15:17:00+02:00"
  },
  {
    id: "R-41403",
    receivedAt: "2026-07-10T16:32:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "The reminder for 7 February arrived for 2 July.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-10T20:11:00+02:00"
  },
  {
    id: "R-41402",
    receivedAt: "2026-07-10T13:17:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "The reminder for 4 September arrived for 9 April.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-10T15:17:00+02:00"
  },
  {
    id: "R-41403",
    receivedAt: "2026-07-10T16:32:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "The reminder for 7 February arrived for 2 July.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-10T20:11:00+02:00"
  },
  {
    id: "R-41404",
    receivedAt: "2026-07-10T15:56:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong date again",
    body: "My client came on 1 February instead of 2 January. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-10T20:23:00+02:00"
  },
  {
    id: "R-41405",
    receivedAt: "2026-07-11T15:22:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Every booking we make shows the wrong day. 1 October is now 10 January.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-11T15:45:00+02:00"
  },
  {
    id: "R-41406",
    receivedAt: "2026-07-11T17:06:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "Every booking we make shows the wrong day. 8 July is now 7 August.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-11T20:34:00+02:00"
  },
  {
    id: "R-41408",
    receivedAt: "2026-07-12T14:40:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Wrong date again",
    body: "Every booking we make shows the wrong day. 12 November is now 11 December.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-12T16:14:00+02:00"
  },
  {
    id: "R-41409",
    receivedAt: "2026-07-12T14:52:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "My client came on 4 June instead of 6 April. We sorted it out.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-12T18:38:00+02:00"
  },
  {
    id: "R-41410",
    receivedAt: "2026-07-12T15:02:00+02:00",
    tenant: "morrow.tax",
    channel: "form",
    subject: "Reminder went out on the wrong day",
    body: "Invite says Friday 2 October. We agreed Tuesday 10 February. Which one do I trust?",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-12T16:52:00+02:00"
  },
  {
    id: "R-41411",
    receivedAt: "2026-07-12T17:04:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "Invite says Friday 7 August. We agreed Wednesday 8 July. Which one do I trust?",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-12T20:29:00+02:00"
  },
  {
    id: "R-41412",
    receivedAt: "2026-07-12T22:40:00+02:00",
    tenant: "nine.lanterns",
    channel: "form",
    subject: "Date is wrong",
    body: "Wednesday 8 July showed as Friday 7 August. I moved it myself.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-13T00:16:00+02:00"
  },
  {
    id: "R-41413",
    receivedAt: "2026-07-13T16:27:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Dates mixed up",
    body: "The reminder for 10 May arrived for 5 October.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-13T19:21:00+02:00"
  },
  {
    id: "R-41414",
    receivedAt: "2026-07-13T20:54:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "Invite says Monday 6 July. We agreed Sunday 7 June. Which one do I trust?",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-13T22:12:00+02:00"
  },
  {
    id: "R-41415",
    receivedAt: "2026-07-14T07:43:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Invite came on the wrong day",
    body: "The calendar invite for 9 January landed on 1 September. Nobody here touched it.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-14T12:44:00+02:00"
  },
  {
    id: "R-41416",
    receivedAt: "2026-07-14T09:29:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Month and day swapped?",
    body: "The reminder for 1 November arrived for 11 January.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-14T14:01:00+02:00"
  },
  {
    id: "R-41417",
    receivedAt: "2026-07-14T14:21:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Your software sent my mother to the dentist on the wrong day. She went anyway. They fitted her in. This is not a complaint about the dentist.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-14T15:49:00+02:00"
  },
  {
    id: "R-41418",
    receivedAt: "2026-07-14T17:03:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Dates mixed up",
    body: "The reminder for 1 December arrived for 12 January.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-14T21:39:00+02:00"
  },
  {
    id: "R-41419",
    receivedAt: "2026-07-15T17:57:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Booked for 9 August. The invite says 8 September.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-15T18:38:00+02:00"
  },
  {
    id: "R-41420",
    receivedAt: "2026-07-15T21:14:00+02:00",
    tenant: "copper.studio",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Invite says Monday 9 November. We agreed Friday 11 September. Which one do I trust?",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-15T21:37:00+02:00"
  },
  {
    id: "R-41421",
    receivedAt: "2026-07-15T22:49:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "My client came on 7 August instead of 8 July. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-15T23:24:00+02:00"
  },
  {
    id: "R-41422",
    receivedAt: "2026-07-16T09:20:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Date is wrong",
    body: "Invite says Wednesday 6 May. We agreed Friday 5 June. Which one do I trust?",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-16T11:45:00+02:00"
  },
  {
    id: "R-41423",
    receivedAt: "2026-07-16T12:00:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "We had two people show up on 10 August. They were booked for 8 October.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-16T16:33:00+02:00"
  },
  {
    id: "R-41424",
    receivedAt: "2026-07-16T20:03:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Customer booked 4 August and got an invite for 8 April. Please look at this.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-17T00:53:00+02:00"
  },
  {
    id: "R-41425",
    receivedAt: "2026-07-16T22:17:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Dates mixed up",
    body: "Invite says Thursday 8 January. We agreed Saturday 1 August. Which one do I trust?",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-16T23:53:00+02:00"
  },
  {
    id: "R-41427",
    receivedAt: "2026-07-18T18:09:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "We had two people show up on 7 October. They were booked for 10 July.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-18T22:18:00+02:00"
  },
  {
    id: "R-41428",
    receivedAt: "2026-07-19T08:01:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Client turned up on the wrong day",
    body: "My client came on 6 July instead of 7 June. We sorted it out.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-19T11:13:00+02:00"
  },
  {
    id: "R-41429",
    receivedAt: "2026-07-19T15:45:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Booked for 5 December. The invite says 12 May.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-19T19:24:00+02:00"
  },
  {
    id: "R-41430",
    receivedAt: "2026-07-19T22:06:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Tuesday 1 September showed as Friday 9 January. I moved it myself.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-19T22:42:00+02:00"
  },
  {
    id: "R-41431",
    receivedAt: "2026-07-20T12:27:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Dates mixed up",
    body: "Invite says Friday 10 April. We agreed Sunday 4 October. Which one do I trust?",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-20T15:43:00+02:00"
  },
  {
    id: "R-41432",
    receivedAt: "2026-07-20T15:14:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Monday 12 January showed as Tuesday 1 December. I moved it myself.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-20T16:02:00+02:00"
  },
  {
    id: "R-41433",
    receivedAt: "2026-07-21T13:32:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Customer booked 12 July and got an invite for 7 December. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-21T15:19:00+02:00"
  },
  {
    id: "R-41434",
    receivedAt: "2026-07-21T18:41:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "The reminder for 1 October arrived for 10 January.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-21T21:10:00+02:00"
  },
  {
    id: "R-41435",
    receivedAt: "2026-07-21T19:00:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "Customer booked 7 October and got an invite for 10 July. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-22T00:47:00+02:00"
  },
  {
    id: "R-41436",
    receivedAt: "2026-07-21T21:40:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Wrong date again",
    body: "Customer booked 2 January and got an invite for 1 February. Please look at this.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-22T00:01:00+02:00"
  },
  {
    id: "R-41437",
    receivedAt: "2026-07-22T07:02:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Wednesday 4 March showed as Friday 3 April. I moved it myself.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-22T10:59:00+02:00"
  },
  {
    id: "R-41438",
    receivedAt: "2026-07-22T11:54:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Wednesday 3 June showed as Friday 6 March. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-22T16:24:00+02:00"
  },
  {
    id: "R-41439",
    receivedAt: "2026-07-22T14:51:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Date is wrong",
    body: "Booked for 3 January. The invite says 1 March.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-22T15:38:00+02:00"
  },
  {
    id: "R-41440",
    receivedAt: "2026-07-23T16:06:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "Booked for 1 November. The invite says 11 January.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-23T18:10:00+02:00"
  },
  {
    id: "R-41441",
    receivedAt: "2026-07-23T15:17:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Dates mixed up",
    body: "The reminder for 6 April arrived for 4 June.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-23T17:49:00+02:00"
  },
  {
    id: "R-41442",
    receivedAt: "2026-07-24T10:15:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Every booking we make shows the wrong day. 4 June is now 6 April.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-24T11:20:00+02:00"
  },
  {
    id: "R-41443",
    receivedAt: "2026-07-24T12:28:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Wrong date again",
    body: "Second time this month: 10 May turned into 5 October.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-24T16:23:00+02:00"
  },
  {
    id: "R-41444",
    receivedAt: "2026-07-25T21:59:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Customer booked 2 May and got an invite for 5 February. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-26T00:11:00+02:00"
  },
  {
    id: "R-41445",
    receivedAt: "2026-07-26T09:05:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "Second time this month: 10 March turned into 3 October.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-26T10:34:00+02:00"
  },
  {
    id: "R-41446",
    receivedAt: "2026-07-27T18:22:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "We had two people show up on 6 May. They were booked for 5 June.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-27T20:30:00+02:00"
  },
  {
    id: "R-41447",
    receivedAt: "2026-07-27T21:45:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "My client came on 6 February instead of 2 June. We sorted it out.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-27T22:50:00+02:00"
  },
  {
    id: "R-41448",
    receivedAt: "2026-07-28T09:48:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Date is wrong",
    body: "Tuesday 4 August showed as Wednesday 8 April. I moved it myself.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-28T12:42:00+02:00"
  },
  {
    id: "R-41449",
    receivedAt: "2026-07-29T17:47:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "Thursday 8 January showed as Saturday 1 August. I moved it myself.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-29T22:38:00+02:00"
  },
  {
    id: "R-41450",
    receivedAt: "2026-07-29T20:22:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Sunday 5 April showed as Monday 4 May. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-30T01:08:00+02:00"
  },
  {
    id: "R-41451",
    receivedAt: "2026-07-30T11:32:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Date is wrong",
    body: "We had two people show up on 6 August. They were booked for 8 June.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-30T14:50:00+02:00"
  },
  {
    id: "R-41452",
    receivedAt: "2026-07-30T11:48:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Date is wrong",
    body: "We had two people show up on 2 October. They were booked for 10 February.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-30T14:34:00+02:00"
  },
  {
    id: "R-41453",
    receivedAt: "2026-07-30T15:44:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Calendar invite is wrong",
    body: "Booked for 10 February. The invite says 2 October.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-30T19:05:00+02:00"
  },
  {
    id: "R-41454",
    receivedAt: "2026-07-31T16:31:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "The calendar invite for 10 June landed on 6 October. Nobody here touched it.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-31T20:19:00+02:00"
  },
  {
    id: "R-41455",
    receivedAt: "2026-07-31T17:03:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Booking shows a different day",
    body: "My client came on 5 September instead of 9 May. We sorted it out.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-31T21:06:00+02:00"
  },
  {
    id: "R-41454",
    receivedAt: "2026-07-31T16:31:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "The calendar invite for 10 June landed on 6 October. Nobody here touched it.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-31T20:19:00+02:00"
  },
  {
    id: "R-41455",
    receivedAt: "2026-07-31T17:03:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Booking shows a different day",
    body: "My client came on 5 September instead of 9 May. We sorted it out.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-31T21:06:00+02:00"
  },
  {
    id: "R-41456",
    receivedAt: "2026-07-31T17:35:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Invite came on the wrong day",
    body: "My client came on 6 January instead of 1 June. We sorted it out.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-31T21:49:00+02:00"
  },
  {
    id: "R-41457",
    receivedAt: "2026-07-31T19:10:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Customer booked 6 February and got an invite for 2 June. Please look at this.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-07-31T20:30:00+02:00"
  },
  {
    id: "R-41458",
    receivedAt: "2026-08-01T08:35:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Customer booked 2 September and got an invite for 9 February. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-01T11:44:00+02:00"
  },
  {
    id: "R-41459",
    receivedAt: "2026-08-01T09:27:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Second time this month: 9 June turned into 6 September.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-01T11:21:00+02:00"
  },
  {
    id: "R-41460",
    receivedAt: "2026-08-01T13:05:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Month and day swapped?",
    body: "Second time this month: 5 July turned into 7 May.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-01T15:09:00+02:00"
  },
  {
    id: "R-41461",
    receivedAt: "2026-08-01T16:27:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "We had two people show up on 5 March. They were booked for 3 May.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-01T18:12:00+02:00"
  },
  {
    id: "R-41462",
    receivedAt: "2026-08-01T16:35:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Wrong date again",
    body: "Every booking we make shows the wrong day. 8 April is now 4 August.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-01T21:29:00+02:00"
  },
  {
    id: "R-41463",
    receivedAt: "2026-08-02T07:37:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Wrong date again",
    body: "Second time this month: 5 October turned into 10 May.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-02T11:04:00+02:00"
  },
  {
    id: "R-41464",
    receivedAt: "2026-08-02T14:27:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Date is wrong",
    body: "Invite says Friday 4 December. We agreed Sunday 12 April. Which one do I trust?",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-02T19:08:00+02:00"
  },
  {
    id: "R-41465",
    receivedAt: "2026-08-04T07:55:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "The calendar invite for 10 August landed on 8 October. Nobody here touched it.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-04T09:39:00+02:00"
  },
  {
    id: "R-41466",
    receivedAt: "2026-08-04T22:44:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "We had two people show up on 9 November. They were booked for 11 September.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-05T01:00:00+02:00"
  },
  {
    id: "R-41467",
    receivedAt: "2026-08-05T14:32:00+02:00",
    tenant: "kettle.books",
    channel: "form",
    subject: "Month and day swapped?",
    body: "Saturday 10 January showed as Thursday 1 October. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-05T15:41:00+02:00"
  },
  {
    id: "R-41468",
    receivedAt: "2026-08-05T14:53:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Booked for 6 May. The invite says 5 June.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-05T18:30:00+02:00"
  },
  {
    id: "R-41469",
    receivedAt: "2026-08-05T13:59:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Wrong date again",
    body: "The reminder for 1 August arrived for 8 January.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-05T18:37:00+02:00"
  },
  {
    id: "R-41470",
    receivedAt: "2026-08-06T11:37:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "The calendar invite for 10 December landed on 12 October. Nobody here touched it.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-06T15:35:00+02:00"
  },
  {
    id: "R-41471",
    receivedAt: "2026-08-06T18:29:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Second time this month: 11 January turned into 1 November.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-06T20:29:00+02:00"
  },
  {
    id: "R-41472",
    receivedAt: "2026-08-09T20:37:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "Tuesday 9 June showed as Sunday 6 September. I moved it myself.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-09T23:31:00+02:00"
  },
  {
    id: "R-41473",
    receivedAt: "2026-08-10T15:27:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Date is wrong",
    body: "Wednesday 1 July showed as Wednesday 7 January. I moved it myself.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-10T20:20:00+02:00"
  },
  {
    id: "R-41474",
    receivedAt: "2026-08-11T11:28:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "The calendar invite for 4 January landed on 1 April. Nobody here touched it.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-11T16:09:00+02:00"
  },
  {
    id: "R-41475",
    receivedAt: "2026-08-11T19:53:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Booked for 2 July. The invite says 7 February.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-11T23:22:00+02:00"
  },
  {
    id: "R-41476",
    receivedAt: "2026-08-12T09:16:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Booked for 2 March. The invite says 3 February.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-12T12:12:00+02:00"
  },
  {
    id: "R-41477",
    receivedAt: "2026-08-12T22:58:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "Every booking we make shows the wrong day. 10 June is now 6 October.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-12T23:38:00+02:00"
  },
  {
    id: "R-41478",
    receivedAt: "2026-08-13T09:09:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "We had two people show up on 3 June. They were booked for 6 March.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-13T13:41:00+02:00"
  },
  {
    id: "R-41479",
    receivedAt: "2026-08-14T09:32:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-14T14:25:00+02:00"
  },
  {
    id: "R-41480",
    receivedAt: "2026-08-14T14:24:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Monday 8 June showed as Thursday 6 August. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-14T15:01:00+02:00"
  },
  {
    id: "R-41481",
    receivedAt: "2026-08-14T15:28:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Booking shows a different day",
    body: "We had two people show up on 12 January. They were booked for 1 December.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-14T20:20:00+02:00"
  },
  {
    id: "R-41482",
    receivedAt: "2026-08-14T14:59:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The reminder for 1 November arrived for 11 January.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-14T18:56:00+02:00"
  },
  {
    id: "R-41483",
    receivedAt: "2026-08-14T17:27:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "The reminder for 2 May arrived for 5 February.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-14T20:25:00+02:00"
  },
  {
    id: "R-41484",
    receivedAt: "2026-08-14T17:28:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Thursday 8 January showed as Saturday 1 August. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-14T20:17:00+02:00"
  },
  {
    id: "R-41485",
    receivedAt: "2026-08-14T21:55:00+02:00",
    tenant: "alder.physio",
    channel: "form",
    subject: "Client turned up on the wrong day",
    body: "The reminder for 4 November arrived for 11 April.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-14T22:20:00+02:00"
  },
  {
    id: "R-41486",
    receivedAt: "2026-08-15T09:19:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Customer booked 5 December and got an invite for 12 May. Please look at this.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-15T10:14:00+02:00"
  },
  {
    id: "R-41487",
    receivedAt: "2026-08-15T14:00:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "The reminder for 10 September arrived for 9 October.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-15T15:55:00+02:00"
  },
  {
    id: "R-41488",
    receivedAt: "2026-08-17T16:50:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Monday 6 July showed as Sunday 7 June. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-17T21:49:00+02:00"
  },
  {
    id: "R-41489",
    receivedAt: "2026-08-18T09:32:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "The reminder for 5 April arrived for 4 May.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-18T13:37:00+02:00"
  },
  {
    id: "R-41490",
    receivedAt: "2026-08-18T10:36:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Dates mixed up",
    body: "We had two people show up on 6 February. They were booked for 2 June.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-18T12:17:00+02:00"
  },
  {
    id: "R-41491",
    receivedAt: "2026-08-18T17:53:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Wrong date again",
    body: "Booked for 12 October. The invite says 10 December.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-18T18:22:00+02:00"
  },
  {
    id: "R-41492",
    receivedAt: "2026-08-19T12:08:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Second time this month: 12 November turned into 11 December.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-19T16:11:00+02:00"
  },
  {
    id: "R-41493",
    receivedAt: "2026-08-19T11:18:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Dates mixed up",
    body: "The reminder for 2 July arrived for 7 February.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-19T17:16:00+02:00"
  },
  {
    id: "R-41494",
    receivedAt: "2026-08-19T16:11:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Customer booked 3 November and got an invite for 11 March. Please look at this.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-19T18:42:00+02:00"
  },
  {
    id: "R-41495",
    receivedAt: "2026-08-19T15:12:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-19T19:04:00+02:00"
  },
  {
    id: "R-41496",
    receivedAt: "2026-08-19T18:17:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "Booked for 11 February. The invite says 2 November.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-19T19:47:00+02:00"
  },
  {
    id: "R-41497",
    receivedAt: "2026-08-19T22:37:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Date is wrong",
    body: "Second time this month: 12 November turned into 11 December.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-20T02:54:00+02:00"
  },
  {
    id: "R-41498",
    receivedAt: "2026-08-20T14:10:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Second time this month: 9 August turned into 8 September.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-20T16:29:00+02:00"
  },
  {
    id: "R-41499",
    receivedAt: "2026-08-20T16:53:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Second time this month: 3 June turned into 6 March.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-20T17:33:00+02:00"
  },
  {
    id: "R-41500",
    receivedAt: "2026-08-20T22:53:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Second time this month: 6 February turned into 2 June.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-20T23:41:00+02:00"
  },
  {
    id: "R-41501",
    receivedAt: "2026-08-21T08:13:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Date is wrong",
    body: "Invite says Monday 7 September. We agreed Thursday 9 July. Which one do I trust?",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-21T11:55:00+02:00"
  },
  {
    id: "R-41502",
    receivedAt: "2026-08-21T09:49:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "Thursday 5 March showed as Sunday 3 May. I moved it myself.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-21T09:59:00+02:00"
  },
  {
    id: "R-41503",
    receivedAt: "2026-08-21T17:09:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "My client came on 1 February instead of 2 January. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-21T18:38:00+02:00"
  },
  {
    id: "R-41504",
    receivedAt: "2026-08-21T19:24:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Customer booked 9 November and got an invite for 11 September. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-21T20:13:00+02:00"
  },
  {
    id: "R-41505",
    receivedAt: "2026-08-22T12:08:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Customer booked 9 June and got an invite for 6 September. Please look at this.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-22T13:25:00+02:00"
  },
  {
    id: "R-41504",
    receivedAt: "2026-08-21T19:24:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Customer booked 9 November and got an invite for 11 September. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-21T20:13:00+02:00"
  },
  {
    id: "R-41505",
    receivedAt: "2026-08-22T12:08:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Customer booked 9 June and got an invite for 6 September. Please look at this.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-22T13:25:00+02:00"
  },
  {
    id: "R-41506",
    receivedAt: "2026-08-22T14:21:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Invite says Friday 8 May. We agreed Wednesday 5 August. Which one do I trust?",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-22T15:30:00+02:00"
  },
  {
    id: "R-41508",
    receivedAt: "2026-08-22T18:19:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Booked for 12 July. The invite says 7 December.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-22T23:00:00+02:00"
  },
  {
    id: "R-41509",
    receivedAt: "2026-08-24T15:09:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Booking shows a different day",
    body: "Sunday 7 June showed as Monday 6 July. I moved it myself.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-24T15:25:00+02:00"
  },
  {
    id: "R-41510",
    receivedAt: "2026-08-24T20:19:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Customer booked 12 March and got an invite for 3 December. Please look at this.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-24T21:54:00+02:00"
  },
  {
    id: "R-41511",
    receivedAt: "2026-08-26T14:32:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Client turned up on the wrong day",
    body: "Every booking we make shows the wrong day. 5 October is now 10 May.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-26T18:54:00+02:00"
  },
  {
    id: "R-41512",
    receivedAt: "2026-08-26T21:51:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Monday 8 June showed as Thursday 6 August. I moved it myself.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-27T00:32:00+02:00"
  },
  {
    id: "R-41513",
    receivedAt: "2026-08-26T22:28:00+02:00",
    tenant: "kettle.books",
    channel: "form",
    subject: "Month and day swapped?",
    body: "Second time this month: 2 September turned into 9 February.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-27T00:01:00+02:00"
  },
  {
    id: "R-41514",
    receivedAt: "2026-08-27T17:35:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: 'I have started telling clients the date in words. "The second Tuesday." It works. Your product is now a phone call.',
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-27T19:49:00+02:00"
  },
  {
    id: "R-41515",
    receivedAt: "2026-08-27T20:34:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Booked for 6 April. The invite says 4 June.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-28T02:32:00+02:00"
  },
  {
    id: "R-41516",
    receivedAt: "2026-08-28T07:30:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "My client came on 7 December instead of 12 July. We sorted it out.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-28T08:56:00+02:00"
  },
  {
    id: "R-41517",
    receivedAt: "2026-08-29T09:25:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "Customer booked 10 September and got an invite for 9 October. Please look at this.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-29T14:20:00+02:00"
  },
  {
    id: "R-41518",
    receivedAt: "2026-08-29T18:47:00+02:00",
    tenant: "lantern.row",
    channel: "app",
    subject: "Wrong date again",
    body: "My client came on 7 November instead of 11 July. We sorted it out.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-29T21:45:00+02:00"
  },
  {
    id: "R-41519",
    receivedAt: "2026-08-29T19:02:00+02:00",
    tenant: "nine.lanterns",
    channel: "form",
    subject: "Booking on the wrong date",
    body: "Invite says Friday 3 April. We agreed Wednesday 4 March. Which one do I trust?",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-29T23:24:00+02:00"
  },
  {
    id: "R-41520",
    receivedAt: "2026-08-29T19:09:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "The calendar invite for 7 November landed on 11 July. Nobody here touched it.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-30T00:14:00+02:00"
  },
  {
    id: "R-41521",
    receivedAt: "2026-08-30T11:29:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Dates mixed up",
    body: "Customer booked 7 May and got an invite for 5 July. Please look at this.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-30T15:39:00+02:00"
  },
  {
    id: "R-41522",
    receivedAt: "2026-08-30T14:29:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Customer booked 7 December and got an invite for 12 July. Please look at this.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-30T17:41:00+02:00"
  },
  {
    id: "R-41523",
    receivedAt: "2026-08-31T11:17:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "My client came on 11 July instead of 7 November. We sorted it out.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-31T16:08:00+02:00"
  },
  {
    id: "R-41524",
    receivedAt: "2026-08-31T13:30:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Booking shows a different day",
    body: "The calendar invite for 11 October landed on 10 November. Nobody here touched it.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-31T16:12:00+02:00"
  },
  {
    id: "R-41525",
    receivedAt: "2026-08-31T19:47:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Wrong date again",
    body: "Customer booked 12 January and got an invite for 1 December. Please look at this.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-08-31T23:25:00+02:00"
  },
  {
    id: "R-41527",
    receivedAt: "2026-08-31T22:57:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Month and day swapped?",
    body: "We had two people show up on 9 October. They were booked for 10 September.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-01T03:49:00+02:00"
  },
  {
    id: "R-41528",
    receivedAt: "2026-09-01T08:30:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Wednesday 7 January showed as Wednesday 1 July. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-01T12:36:00+02:00"
  },
  {
    id: "R-41529",
    receivedAt: "2026-09-01T20:06:00+02:00",
    tenant: "ridge.clinic",
    channel: "form",
    subject: "Month and day swapped?",
    body: "Booked for 5 November. The invite says 11 May.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-02T00:10:00+02:00"
  },
  {
    id: "R-41530",
    receivedAt: "2026-09-01T20:56:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Wrong date again",
    body: "We had two people show up on 3 July. They were booked for 7 March.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-01T21:53:00+02:00"
  },
  {
    id: "R-41531",
    receivedAt: "2026-09-02T09:34:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Date is wrong",
    body: "Customer booked 3 August and got an invite for 8 March. Please look at this.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-02T12:37:00+02:00"
  },
  {
    id: "R-41532",
    receivedAt: "2026-09-02T09:00:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Booked for 5 August. The invite says 8 May.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-02T13:04:00+02:00"
  },
  {
    id: "R-41533",
    receivedAt: "2026-09-03T12:19:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "The calendar invite for 10 September landed on 9 October. Nobody here touched it.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-03T14:39:00+02:00"
  },
  {
    id: "R-41534",
    receivedAt: "2026-09-03T19:14:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "Saturday 5 December showed as Tuesday 12 May. I moved it myself.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-03T20:42:00+02:00"
  },
  {
    id: "R-41535",
    receivedAt: "2026-09-03T20:34:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Booked for 5 August. The invite says 8 May.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-03T21:45:00+02:00"
  },
  {
    id: "R-41536",
    receivedAt: "2026-09-04T13:31:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "The reminder for 5 December arrived for 12 May.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-04T16:10:00+02:00"
  },
  {
    id: "R-41537",
    receivedAt: "2026-09-04T14:11:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Date is wrong",
    body: "Saturday 10 January showed as Thursday 1 October. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-04T15:08:00+02:00"
  },
  {
    id: "R-41538",
    receivedAt: "2026-09-04T16:25:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Dates mixed up",
    body: "Invite says Wednesday 4 February. We agreed Thursday 2 April. Which one do I trust?",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-04T19:14:00+02:00"
  },
  {
    id: "R-41539",
    receivedAt: "2026-09-04T16:31:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Reminder went out on the wrong day",
    body: "The reminder for 2 March arrived for 3 February.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-04T19:44:00+02:00"
  },
  {
    id: "R-41540",
    receivedAt: "2026-09-05T13:58:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Invite says Tuesday 2 June. We agreed Friday 6 February. Which one do I trust?",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-05T15:57:00+02:00"
  },
  {
    id: "R-41541",
    receivedAt: "2026-09-06T10:14:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "My client came on 10 January instead of 1 October. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-06T12:15:00+02:00"
  },
  {
    id: "R-41542",
    receivedAt: "2026-09-06T14:06:00+02:00",
    tenant: "ridge.clinic",
    channel: "form",
    subject: "Invite came on the wrong day",
    body: "The reminder for 11 May arrived for 5 November.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-06T15:36:00+02:00"
  },
  {
    id: "R-41543",
    receivedAt: "2026-09-06T15:04:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Second time this month: 1 February turned into 2 January.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-06T19:17:00+02:00"
  },
  {
    id: "R-41544",
    receivedAt: "2026-09-06T17:10:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "Sunday 10 May showed as Monday 5 October. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-06T18:43:00+02:00"
  },
  {
    id: "R-41545",
    receivedAt: "2026-09-07T08:06:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Wednesday 6 May showed as Friday 5 June. I moved it myself.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-07T11:42:00+02:00"
  },
  {
    id: "R-41546",
    receivedAt: "2026-09-07T09:00:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "The calendar invite for 1 December landed on 12 January. Nobody here touched it.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-07T11:35:00+02:00"
  },
  {
    id: "R-41547",
    receivedAt: "2026-09-07T21:27:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Every booking we make shows the wrong day. 8 November is now 11 August.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-08T01:17:00+02:00"
  },
  {
    id: "R-41548",
    receivedAt: "2026-09-08T08:51:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "My client came on 9 December instead of 12 September. We sorted it out.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-08T12:33:00+02:00"
  },
  {
    id: "R-41549",
    receivedAt: "2026-09-08T10:00:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Friday 3 July showed as Saturday 7 March. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-08T15:59:00+02:00"
  },
  {
    id: "R-41550",
    receivedAt: "2026-09-08T17:55:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Monday 7 September showed as Thursday 9 July. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-08T22:17:00+02:00"
  },
  {
    id: "R-41551",
    receivedAt: "2026-09-08T18:03:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Date is wrong",
    body: "Second time this month: 9 June turned into 6 September.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-08T22:44:00+02:00"
  },
  {
    id: "R-41552",
    receivedAt: "2026-09-09T10:06:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "We had two people show up on 5 January. They were booked for 1 May.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-09T13:15:00+02:00"
  },
  {
    id: "R-41553",
    receivedAt: "2026-09-09T14:21:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Booked for 11 February. The invite says 2 November.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-09T16:21:00+02:00"
  },
  {
    id: "R-41554",
    receivedAt: "2026-09-09T17:50:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Customer booked 8 February and got an invite for 2 August. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-09T19:56:00+02:00"
  },
  {
    id: "R-41555",
    receivedAt: "2026-09-10T15:00:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Date is wrong",
    body: "My client came on 1 November instead of 11 January. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-10T16:14:00+02:00"
  },
  {
    id: "R-41556",
    receivedAt: "2026-09-10T21:14:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-10T22:39:00+02:00"
  },
  {
    id: "R-41557",
    receivedAt: "2026-09-11T09:38:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Dates mixed up",
    body: "The calendar invite for 4 October landed on 10 April. Nobody here touched it.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-11T12:37:00+02:00"
  },
  {
    id: "R-41556",
    receivedAt: "2026-09-10T21:14:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Calendar invite is wrong",
    body: "Invite says Tuesday 10 February. We agreed Friday 2 October. Which one do I trust?",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-10T22:39:00+02:00"
  },
  {
    id: "R-41557",
    receivedAt: "2026-09-11T09:38:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Dates mixed up",
    body: "The calendar invite for 4 October landed on 10 April. Nobody here touched it.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-11T12:37:00+02:00"
  },
  {
    id: "R-41558",
    receivedAt: "2026-09-11T13:08:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Reminder went out on the wrong day",
    body: "The reminder for 4 June arrived for 6 April.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-11T14:29:00+02:00"
  },
  {
    id: "R-41559",
    receivedAt: "2026-09-11T20:20:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Invite says Sunday 2 August. We agreed Sunday 8 February. Which one do I trust?",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-12T01:56:00+02:00"
  },
  {
    id: "R-41560",
    receivedAt: "2026-09-12T18:31:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Second time this month: 10 August turned into 8 October.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-12T19:45:00+02:00"
  },
  {
    id: "R-41561",
    receivedAt: "2026-09-12T20:47:00+02:00",
    tenant: "alder.physio",
    channel: "email",
    subject: "Dates mixed up",
    body: "Customer booked 1 April and got an invite for 4 January. Please look at this.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-13T01:44:00+02:00"
  },
  {
    id: "R-41562",
    receivedAt: "2026-09-13T09:32:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Wrong date again",
    body: "We had two people show up on 9 October. They were booked for 10 September.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-13T14:59:00+02:00"
  },
  {
    id: "R-41563",
    receivedAt: "2026-09-13T12:54:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Customer booked 1 September and got an invite for 9 January. Please look at this.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-13T16:36:00+02:00"
  },
  {
    id: "R-41564",
    receivedAt: "2026-09-13T17:15:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "Booked for 7 August. The invite says 8 July.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-13T20:36:00+02:00"
  },
  {
    id: "R-41565",
    receivedAt: "2026-09-14T16:40:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Booked for 9 March. The invite says 3 September.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-14T20:51:00+02:00"
  },
  {
    id: "R-41566",
    receivedAt: "2026-09-14T17:31:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Date is wrong",
    body: "Second time this month: 7 June turned into 6 July.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-14T19:03:00+02:00"
  },
  {
    id: "R-41567",
    receivedAt: "2026-09-15T15:52:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Thursday 11 June showed as Friday 6 November. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-15T17:51:00+02:00"
  },
  {
    id: "R-41568",
    receivedAt: "2026-09-15T20:35:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Client turned up on the wrong day",
    body: "Booked for 4 December. The invite says 12 April.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-15T21:02:00+02:00"
  },
  {
    id: "R-41569",
    receivedAt: "2026-09-16T13:14:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Booked for 10 February. The invite says 2 October.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-16T16:48:00+02:00"
  },
  {
    id: "R-41570",
    receivedAt: "2026-09-17T12:08:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "Second time this month: 1 June turned into 6 January.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-17T12:56:00+02:00"
  },
  {
    id: "R-41571",
    receivedAt: "2026-09-17T13:08:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "The reminder for 4 November arrived for 11 April.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-17T13:32:00+02:00"
  },
  {
    id: "R-41572",
    receivedAt: "2026-09-17T17:17:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Invite came on the wrong day",
    body: "Invite says Sunday 5 July. We agreed Thursday 7 May. Which one do I trust?",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-17T20:38:00+02:00"
  },
  {
    id: "R-41573",
    receivedAt: "2026-09-17T22:45:00+02:00",
    tenant: "morrow.tax",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "The reminder for 3 February arrived for 2 March.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-18T00:06:00+02:00"
  },
  {
    id: "R-41574",
    receivedAt: "2026-09-18T12:27:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "Wednesday 12 August showed as Tuesday 8 December. I moved it myself.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-18T15:54:00+02:00"
  },
  {
    id: "R-41575",
    receivedAt: "2026-09-18T12:46:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Thursday 2 July showed as Saturday 7 February. I moved it myself.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-18T14:41:00+02:00"
  },
  {
    id: "R-41576",
    receivedAt: "2026-09-19T22:35:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Dates mixed up",
    body: "Customer booked 12 January and got an invite for 1 December. Please look at this.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-19T23:55:00+02:00"
  },
  {
    id: "R-41577",
    receivedAt: "2026-09-20T10:02:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Invite came on the wrong day",
    body: "The calendar invite for 8 June landed on 6 August. Nobody here touched it.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-20T11:35:00+02:00"
  },
  {
    id: "R-41578",
    receivedAt: "2026-09-20T19:01:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Invite says Thursday 10 September. We agreed Friday 9 October. Which one do I trust?",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-20T23:38:00+02:00"
  },
  {
    id: "R-41579",
    receivedAt: "2026-09-20T18:49:00+01:00",
    tenant: "pale.harbour",
    channel: "email",
    subject: "Date is wrong",
    body: "The calendar invite for 1 March landed on 3 January. Nobody here touched it.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-20T22:51:00+02:00"
  },
  {
    id: "R-41580",
    receivedAt: "2026-09-21T08:29:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Date is wrong",
    body: "Saturday 5 December showed as Tuesday 12 May. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-21T14:20:00+02:00"
  },
  {
    id: "R-41581",
    receivedAt: "2026-09-22T12:37:00+02:00",
    tenant: "ridge.clinic",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "My client came on 10 May instead of 5 October. We sorted it out.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-22T15:54:00+02:00"
  },
  {
    id: "R-41582",
    receivedAt: "2026-09-22T17:15:00+01:00",
    tenant: "pale.harbour",
    channel: "form",
    subject: "Calendar invite is wrong",
    body: "The reminder for 7 March arrived for 3 July.",
    meta: {
      browserLocale: "pt-PT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-22T20:56:00+02:00"
  },
  {
    id: "R-41583",
    receivedAt: "2026-09-22T19:21:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Dates mixed up",
    body: "My client came on 2 May instead of 5 February. We sorted it out.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-23T00:08:00+02:00"
  },
  {
    id: "R-41584",
    receivedAt: "2026-09-22T20:01:00+02:00",
    tenant: "copper.studio",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "Every booking we make shows the wrong day. 7 November is now 11 July.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-23T00:10:00+02:00"
  },
  {
    id: "R-41585",
    receivedAt: "2026-09-22T20:01:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "My client came on 11 January instead of 1 November. We sorted it out.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-22T21:49:00+02:00"
  },
  {
    id: "R-41586",
    receivedAt: "2026-09-23T10:51:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "Booked for 6 May. The invite says 5 June.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-23T13:29:00+02:00"
  },
  {
    id: "R-41587",
    receivedAt: "2026-09-23T14:33:00+01:00",
    tenant: "harbour.dental",
    channel: "form",
    subject: "Wrong day on the invite",
    body: "My client came on 4 December instead of 12 April. We sorted it out.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-23T19:16:00+02:00"
  },
  {
    id: "R-41588",
    receivedAt: "2026-09-23T22:11:00+02:00",
    tenant: "copper.studio",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "The calendar invite for 5 March landed on 3 May. Nobody here touched it.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-23T23:52:00+02:00"
  },
  {
    id: "R-41589",
    receivedAt: "2026-09-24T11:34:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Month and day swapped?",
    body: "Every booking we make shows the wrong day. 4 August is now 8 April.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-24T13:29:00+02:00"
  },
  {
    id: "R-41590",
    receivedAt: "2026-09-24T12:40:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Second time this month: 8 May turned into 5 August.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-24T14:25:00+02:00"
  },
  {
    id: "R-41591",
    receivedAt: "2026-09-24T19:45:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Wrong date again",
    body: "The reminder for 6 March arrived for 3 June.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-25T01:23:00+02:00"
  },
  {
    id: "R-41592",
    receivedAt: "2026-09-24T22:01:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Date is wrong",
    body: "My client came on 3 November instead of 11 March. We sorted it out.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-24T23:49:00+02:00"
  },
  {
    id: "R-41593",
    receivedAt: "2026-09-25T08:37:00+02:00",
    tenant: "copper.studio",
    channel: "email",
    subject: "Client turned up on the wrong day",
    body: "Saturday 3 January showed as Sunday 1 March. I moved it myself.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-25T11:58:00+02:00"
  },
  {
    id: "R-41594",
    receivedAt: "2026-09-25T12:58:00+02:00",
    tenant: "long.table",
    channel: "email",
    subject: "Dates mixed up",
    body: "Customer booked 4 June and got an invite for 6 April. Please look at this.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-25T15:27:00+02:00"
  },
  {
    id: "R-41595",
    receivedAt: "2026-09-25T16:43:00+02:00",
    tenant: "copper.studio",
    channel: "email",
    subject: "Booking shows a different day",
    body: "The calendar invite for 4 August landed on 8 April. Nobody here touched it.",
    meta: {
      browserLocale: "es-ES",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-25T17:24:00+02:00"
  },
  {
    id: "R-41596",
    receivedAt: "2026-09-26T09:05:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Appointment moved by itself",
    body: "Invite says Sunday 8 November. We agreed Tuesday 11 August. Which one do I trust?",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-26T11:11:00+02:00"
  },
  {
    id: "R-41597",
    receivedAt: "2026-09-26T09:25:00+01:00",
    tenant: "pale.harbour",
    channel: "app",
    subject: "Reminder went out on the wrong day",
    body: "The calendar invite for 10 April landed on 4 October. Nobody here touched it.",
    meta: {
      browserLocale: "en-US",
      intakeTag: "hint"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-26T13:13:00+02:00"
  },
  {
    id: "R-41598",
    receivedAt: "2026-09-26T11:38:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Date is wrong",
    body: "Invite says Tuesday 1 December. We agreed Monday 12 January. Which one do I trust?",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-26T16:27:00+02:00"
  },
  {
    id: "R-41599",
    receivedAt: "2026-09-26T16:12:00+02:00",
    tenant: "long.table",
    channel: "app",
    subject: "Booking on the wrong date",
    body: "The calendar invite for 8 July landed on 7 August. Nobody here touched it.",
    meta: {
      browserLocale: "it-IT",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-26T17:09:00+02:00"
  },
  {
    id: "R-41600",
    receivedAt: "2026-09-27T13:57:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "My client came on 9 March instead of 3 September. We sorted it out.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-27T18:27:00+02:00"
  },
  {
    id: "R-41601",
    receivedAt: "2026-09-27T13:22:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "We had two people show up on 11 June. They were booked for 6 November.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-27T15:08:00+02:00"
  },
  {
    id: "R-41602",
    receivedAt: "2026-09-27T15:53:00+02:00",
    tenant: "nine.lanterns",
    channel: "app",
    subject: "Invite came on the wrong day",
    body: "The reminder for 11 March arrived for 3 November.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-27T17:16:00+02:00"
  },
  {
    id: "R-41603",
    receivedAt: "2026-09-27T19:00:00+01:00",
    tenant: "harbour.dental",
    channel: "app",
    subject: "Month and day swapped?",
    body: "The calendar invite for 6 March landed on 3 June. Nobody here touched it.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-28T00:23:00+02:00"
  },
  {
    id: "R-41604",
    receivedAt: "2026-09-27T22:20:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Month and day swapped?",
    body: "Booked for 4 December. The invite says 12 April.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-28T02:52:00+02:00"
  },
  {
    id: "R-41605",
    receivedAt: "2026-09-28T09:39:00+02:00",
    tenant: "morrow.tax",
    channel: "app",
    subject: "Wrong date again",
    body: "Customer booked 5 August and got an invite for 8 May. Please look at this.",
    meta: {
      browserLocale: "fr-FR",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-28T11:56:00+02:00"
  },
  {
    id: "R-41606",
    receivedAt: "2026-09-29T10:46:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Wrong date again",
    body: "Booked for 3 July. The invite says 7 March.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-29T14:16:00+02:00"
  },
  {
    id: "R-41608",
    receivedAt: "2026-09-30T19:43:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "We had two people show up on 8 September. They were booked for 9 August.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-30T22:00:00+02:00"
  },
  {
    id: "R-41606",
    receivedAt: "2026-09-29T10:46:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Wrong date again",
    body: "Booked for 3 July. The invite says 7 March.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-29T14:16:00+02:00"
  },
  {
    id: "R-41608",
    receivedAt: "2026-09-30T19:43:00+02:00",
    tenant: "nine.lanterns",
    channel: "email",
    subject: "Calendar invite is wrong",
    body: "We had two people show up on 8 September. They were booked for 9 August.",
    meta: {
      browserLocale: "pl-PL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-09-30T22:00:00+02:00"
  },
  {
    id: "R-41609",
    receivedAt: "2026-10-01T09:03:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Month and day swapped?",
    body: "The calendar invite for 10 November landed on 11 October. Nobody here touched it.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-01T13:28:00+02:00"
  },
  {
    id: "R-41610",
    receivedAt: "2026-10-01T13:56:00+02:00",
    tenant: "kettle.books",
    channel: "email",
    subject: "Client turned up on the wrong day",
    body: "Booked for 4 July. The invite says 7 April.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-01T14:23:00+02:00"
  },
  {
    id: "R-41611",
    receivedAt: "2026-10-01T14:30:00+02:00",
    tenant: "kettle.books",
    channel: "app",
    subject: "Wrong date again",
    body: "Booked for 1 April. The invite says 4 January.",
    meta: {
      browserLocale: "nl-NL",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-01T18:39:00+02:00"
  },
  {
    id: "R-41612",
    receivedAt: "2026-10-01T15:38:00+01:00",
    tenant: "stone.and.sons",
    channel: "app",
    subject: "Wrong day on the invite",
    body: "Invite says Friday 3 April. We agreed Wednesday 4 March. Which one do I trust?",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-01T20:22:00+02:00"
  },
  {
    id: "R-41613",
    receivedAt: "2026-10-01T17:50:00+02:00",
    tenant: "alder.physio",
    channel: "app",
    subject: "Month and day swapped?",
    body: "We had two people show up on 1 February. They were booked for 2 January.",
    meta: {
      browserLocale: "de-DE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-01T19:21:00+02:00"
  },
  {
    id: "R-41614",
    receivedAt: "2026-10-02T08:45:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Booking on the wrong date",
    body: "Thursday 8 January showed as Saturday 1 August. I moved it myself.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-02T10:27:00+02:00"
  },
  {
    id: "R-41615",
    receivedAt: "2026-10-02T12:16:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Our October bookings came through for January. We are a heating company. January is when we need them. Thank you, actually.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-02T16:44:00+02:00"
  },
  {
    id: "R-41616",
    receivedAt: "2026-10-02T18:03:00+01:00",
    tenant: "stone.and.sons",
    channel: "email",
    subject: "Wrong day on the invite",
    body: "Invite says Friday 7 August. We agreed Wednesday 8 July. Which one do I trust?",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-02T19:27:00+02:00"
  },
  {
    id: "R-41617",
    receivedAt: "2026-10-03T16:42:00+01:00",
    tenant: "stone.and.sons",
    channel: "form",
    subject: "Date is wrong",
    body: "Every booking we make shows the wrong day. 5 April is now 4 May.",
    meta: {
      browserLocale: "en-IE",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-03T18:08:00+02:00"
  },
  {
    id: "R-41618",
    receivedAt: "2026-10-03T20:42:00+02:00",
    tenant: "ridge.clinic",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Every booking we make shows the wrong day. 7 May is now 5 July.",
    meta: {
      browserLocale: "da-DK",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-03T21:05:00+02:00"
  },
  {
    id: "R-41619",
    receivedAt: "2026-10-04T20:30:00+01:00",
    tenant: "harbour.dental",
    channel: "email",
    subject: "Appointment moved by itself",
    body: "Booked for 9 December. The invite says 12 September.",
    meta: {
      browserLocale: "en-GB",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-04T21:58:00+02:00"
  },
  {
    id: "R-41620",
    receivedAt: "2026-10-04T21:49:00+02:00",
    tenant: "lantern.row",
    channel: "email",
    subject: "Date is wrong",
    body: "Tuesday 6 October showed as Monday. I moved it myself. I have stopped reporting these but my colleague says it helps you.",
    meta: {
      browserLocale: "cs-CZ",
      intakeTag: "parser"
    },
    mergedInto: 4471,
    mergedAt: "2026-10-04T21:58:00+02:00"
  }
];

// support-kb/src/lib/data/desk-notes.json
var desk_notes_default = {
  oneDayMove: [
    "R-41202",
    "R-41209",
    "R-41236",
    "R-41344",
    "R-41620"
  ]
};

// support-kb/src/lib/kb/causes.ts
var DATE_HINT = {
  "booking-v2": "DD/MM/YYYY",
  "booking-v3": "MM/DD/YYYY"
};
function dayFirst(locale) {
  const order = new Intl.DateTimeFormat(locale, { year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(Date.UTC(2026, 0, 2, 12))).map((p) => p.type);
  return order.indexOf("day") < order.indexOf("month");
}
function causeOf(r2, t) {
  if (!t || !dayFirst(t.locale)) return null;
  return r2.channel === "form" && DATE_HINT[t.form].startsWith("MM") ? "hint" : "parser";
}
function sameCause(a, ta, b, tb) {
  const ca = causeOf(a, ta);
  return ca !== null && ca === causeOf(b, tb);
}
function uniqueById(reports) {
  return [...new Map(reports.map((r2) => [r2.id, r2])).values()];
}
function groupByCause(reports, tenantOf2) {
  const byCause = /* @__PURE__ */ new Map();
  for (const r2 of reports) {
    const cause = causeOf(r2, tenantOf2(r2)) ?? "unplaced";
    byCause.set(cause, [...byCause.get(cause) ?? [], r2]);
  }
  return [...byCause.entries()].map(([cause, rs]) => {
    const days = rs.map((r2) => r2.receivedAt.slice(0, 10)).sort();
    return {
      cause,
      reports: rs,
      taggedAs: rs.reduce((n, r2) => ({ ...n, [r2.meta.intakeTag]: (n[r2.meta.intakeTag] ?? 0) + 1 }), {}),
      tenants: new Set(rs.map((r2) => r2.tenant)).size,
      firstSeen: days[0],
      lastSeen: days[days.length - 1],
      mergedInto: [...new Set(rs.flatMap((r2) => r2.mergedInto ? [r2.mergedInto] : []))]
    };
  }).sort((a, b) => b.reports.length - a.reports.length);
}
function ticketCause(groups, ticket) {
  return groups.find((g) => g.mergedInto.includes(ticket))?.cause ?? null;
}
function readAs(g, ids) {
  return g.reports.filter((r2) => ids.includes(r2.id)).length;
}

// support-kb/src/lib/kb/locales.ts
var tenants = Object.values({ "alder.physio": { "handle": "alder.physio", "name": "Alder Physio", "locale": "de-DE", "form": "booking-v3" }, "copper.studio": { "handle": "copper.studio", "name": "Copper Studio", "locale": "es-ES", "form": "booking-v3" }, "harbour.dental": { "handle": "harbour.dental", "name": "Harbour Dental", "locale": "en-GB", "form": "booking-v2" }, "kettle.books": { "handle": "kettle.books", "name": "Kettle Books", "locale": "nl-NL", "form": "booking-v2" }, "lantern.row": { "handle": "lantern.row", "name": "Lantern Row", "locale": "cs-CZ", "form": "booking-v2" }, "long.table": { "handle": "long.table", "name": "Long Table", "locale": "it-IT", "form": "booking-v2" }, "morrow.tax": { "handle": "morrow.tax", "name": "Morrow Tax", "locale": "fr-FR", "form": "booking-v2" }, "nine.lanterns": { "handle": "nine.lanterns", "name": "Nine Lanterns", "locale": "pl-PL", "form": "booking-v2" }, "pale.harbour": { "handle": "pale.harbour", "name": "Pale Harbour", "locale": "pt-PT", "form": "booking-v3" }, "ridge.clinic": { "handle": "ridge.clinic", "name": "Ridge Clinic", "locale": "da-DK", "form": "booking-v2" }, "stone.and.sons": { "handle": "stone.and.sons", "name": "Stone and Sons", "locale": "en-IE", "form": "booking-v2" } });
var byHandle = new Map(tenants.map((t) => [t.handle, t]));
function tenantOf(r2) {
  return byHandle.get(r2.tenant);
}
var tenantHandles = () => [...byHandle.keys()].sort();

// support-kb/src/lib/kb/CauseTable.svelte
var root5 = from_html(`<tr><td class="svelte-t8rnbm"><code> </code></td><td class="svelte-t8rnbm"> </td><td class="tags svelte-t8rnbm"> </td><td class="svelte-t8rnbm"> </td><td class="svelte-t8rnbm"> </td><td class="svelte-t8rnbm"> </td></tr>`);
var root_13 = from_html(`<p class="note svelte-t8rnbm"> <code> </code> by tenant.</p>`);
var root_2 = from_html(`<p class="sum svelte-t8rnbm"><strong> </strong> <strong> </strong> </p> <table><thead><tr><th>cause</th><th>reports</th><th>tagged as</th><th>tenants</th><th>seen</th><th></th></tr></thead><tbody></tbody></table> <!>`, 1);
var $$css3 = {
  hash: "svelte-t8rnbm",
  code: ".sum.svelte-t8rnbm {font-size:1.1rem;}.tags.svelte-t8rnbm {color:var(--muted);font-size:0.85em;}.note.svelte-t8rnbm {color:var(--muted);font-size:0.85em;}.wrong.svelte-t8rnbm td:where(.svelte-t8rnbm) {background:var(--warn-bg);}.wrong.svelte-t8rnbm td:where(.svelte-t8rnbm):last-child {color:var(--warn);font-weight:600;}"
};
function CauseTable($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css3);
  const merged = user_derived(() => uniqueById(reports_4471_default).filter((r2) => r2.mergedInto === $$props.ticket));
  const groups = user_derived(() => groupByCause(get(merged), tenantOf));
  const owner6 = user_derived(() => ticketCause(get(groups), $$props.ticket));
  const tags = (g) => Object.entries(g.taggedAs).sort((a, b) => b[1] - a[1]).map(([tag2, n]) => `${tag2} \xD7${n}`).join(" \xB7 ");
  var fragment = root_2();
  var p = first_child(fragment);
  var strong = child(p);
  var text2 = only_child(strong, true);
  var text_1 = sibling(strong);
  var strong_1 = sibling(text_1);
  var text_2 = only_child(strong_1, true);
  var text_3 = sibling(strong_1);
  reset(p);
  var table = sibling(p, 2);
  var tbody = sibling(child(table));
  each(tbody, 21, () => get(groups), (g) => g.cause, ($$anchor2, g) => {
    var tr = root5();
    let classes;
    var td = child(tr);
    var code = child(td);
    var text_4 = only_child(code, true);
    reset(td);
    var td_1 = sibling(td);
    var text_5 = only_child(td_1, true);
    var td_2 = sibling(td_1);
    var text_6 = only_child(td_2, true);
    var td_3 = sibling(td_2);
    var text_7 = only_child(td_3, true);
    var td_4 = sibling(td_3);
    var text_8 = only_child(td_4);
    var td_5 = sibling(td_4);
    var text_9 = only_child(td_5, true);
    reset(tr);
    template_effect(
      ($0) => {
        classes = set_class(tr, 1, "svelte-t8rnbm", null, classes, { wrong: get(g).cause !== get(owner6) });
        set_text(text_4, get(g).cause);
        set_text(text_5, get(g).reports.length);
        set_text(text_6, $0);
        set_text(text_7, get(g).tenants);
        set_text(text_8, `${get(g).firstSeen ?? ""} \u2192 ${get(g).lastSeen ?? ""}`);
        set_text(text_9, get(g).cause === get(owner6) ? `#${$$props.ticket}` : "not this ticket \u2014 no ticket of its own");
      },
      [() => tags(get(g))]
    );
    append($$anchor2, tr);
  });
  reset(tbody);
  reset(table);
  var node = sibling(table, 2);
  each(node, 17, () => get(groups), (g) => g.cause, ($$anchor2, g) => {
    const moved = user_derived(() => readAs(get(g), desk_notes_default.oneDayMove));
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    {
      var consequent = ($$anchor3) => {
        var p_1 = root_13();
        var text_10 = child(p_1);
        var code_1 = sibling(text_10);
        var text_11 = only_child(code_1, true);
        next();
        reset(p_1);
        template_effect(() => {
          set_text(text_10, `${get(moved) ?? ""} reports read as a one-day move; filed under `);
          set_text(text_11, get(g).cause);
        });
        append($$anchor3, p_1);
      };
      if_block(node_1, ($$render) => {
        if (get(moved)) $$render(consequent);
      });
    }
    append($$anchor2, fragment_1);
  });
  template_effect(() => {
    set_text(text2, get(merged).length);
    set_text(text_1, ` reports merged into #${$$props.ticket ?? ""} \xB7 `);
    set_text(text_2, get(groups).length);
    set_text(text_3, ` ${get(groups).length === 1 ? "cause" : "causes"}`);
  });
  append($$anchor, fragment);
  pop();
}

// support-kb/src/lib/kb/QueueTimeline.svelte
var root6 = from_svg(`<text y="128" class="svelte-17lf50r"> </text>`);
var root_14 = from_svg(`<rect class="in svelte-17lf50r" width="9"></rect><rect class="merged svelte-17lf50r" width="9"></rect><!>`, 1);
var root_22 = from_html(`<figure><svg role="img" class="svelte-17lf50r"></svg> <figcaption class="svelte-17lf50r"><span class="key in svelte-17lf50r"></span> received \xB7 <span class="key merged svelte-17lf50r"></span> </figcaption></figure>`);
var $$css4 = {
  hash: "svelte-17lf50r",
  code: "svg.svelte-17lf50r {width:100%;max-width:640px;}.in.svelte-17lf50r {fill:var(--warn);}.merged.svelte-17lf50r {fill:var(--accent);}text.svelte-17lf50r {font:8px var(--mono);fill:var(--muted);text-anchor:middle;}figcaption.svelte-17lf50r {color:var(--muted);font-size:0.85rem;}.key.svelte-17lf50r {display:inline-block;width:0.7em;height:0.7em;border-radius:2px;}.key.in.svelte-17lf50r {background:var(--warn);}.key.merged.svelte-17lf50r {background:var(--accent);}"
};
function QueueTimeline($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css4);
  let from = prop($$props, "from", 3, "2026-03-30"), to = prop($$props, "to", 3, "2026-10-05");
  const WEEK = 7 * 864e5;
  const day = (iso) => Date.parse(iso.slice(0, 10));
  const weeks = user_derived(() => {
    const start = day(from());
    const count = Math.ceil((day(to()) - start) / WEEK);
    const rows = Array.from({ length: count }, (_, i) => ({ at: start + i * WEEK, received: 0, merged: 0 }));
    const weekOf = (iso) => rows[Math.floor((day(iso) - start) / WEEK)];
    for (const r2 of uniqueById(reports_4471_default)) {
      if (r2.mergedInto !== $$props.ticket) continue;
      const rIn = weekOf(r2.receivedAt);
      if (rIn) rIn.received++;
      const rMerged = r2.mergedAt ? weekOf(r2.mergedAt) : void 0;
      if (rMerged) rMerged.merged++;
    }
    return rows;
  });
  const max = user_derived(() => Math.max(...get(weeks).flatMap((w) => [w.received, w.merged])));
  const label = (ms) => new Date(ms).toISOString().slice(5, 10);
  const h = (n) => n / get(max) * 100;
  var figure = root_22();
  var svg = child(figure);
  each(svg, 23, () => get(weeks), (w) => w.at, ($$anchor2, w, i) => {
    var fragment = root_14();
    var rect = first_child(fragment);
    var rect_1 = sibling(rect);
    var node = sibling(rect_1);
    {
      var consequent = ($$anchor3) => {
        var text2 = root6();
        var text_1 = only_child(text2, true);
        template_effect(
          ($0) => {
            set_attribute2(text2, "x", get(i) * 24 + 12);
            set_text(text_1, $0);
          },
          [() => label(get(w).at)]
        );
        append($$anchor3, text2);
      };
      if_block(node, ($$render) => {
        if (get(i) % 4 === 0) $$render(consequent);
      });
    }
    template_effect(
      ($0, $1, $2, $3) => {
        set_attribute2(rect, "x", get(i) * 24 + 2);
        set_attribute2(rect, "y", $0);
        set_attribute2(rect, "height", $1);
        set_attribute2(rect_1, "x", get(i) * 24 + 12);
        set_attribute2(rect_1, "y", $2);
        set_attribute2(rect_1, "height", $3);
      },
      [
        () => 110 - h(get(w).received),
        () => h(get(w).received),
        () => 110 - h(get(w).merged),
        () => h(get(w).merged)
      ]
    );
    append($$anchor2, fragment);
  });
  reset(svg);
  var figcaption = sibling(svg, 2);
  var text_2 = sibling(child(figcaption), 3);
  reset(figcaption);
  reset(figure);
  template_effect(() => {
    set_attribute2(svg, "viewBox", `0 0 ${get(weeks).length * 24} 140`);
    set_attribute2(svg, "aria-label", `reports received and merged into #${$$props.ticket ?? ""}, per week`);
    set_text(text_2, ` merged into #${$$props.ticket ?? ""} \xB7 per week`);
  });
  append($$anchor, figure);
  pop();
}

// support-kb/src/lib/kb/Callout.svelte
var root7 = from_html(`<aside><!></aside>`);
var $$css5 = {
  hash: "svelte-v1dgzr",
  code: "aside.svelte-v1dgzr {border-left:4px solid var(--accent);padding:0.5rem 1rem;margin:1rem 0;background:var(--note-bg);}aside.warn.svelte-v1dgzr {border-color:var(--warn);background:var(--warn-bg);}"
};
function Callout($$anchor, $$props) {
  append_styles($$anchor, $$css5);
  let kind = prop($$props, "kind", 3, "note");
  var aside = root7();
  var node = child(aside);
  snippet(node, () => $$props.children);
  reset(aside);
  template_effect(() => set_class(aside, 1, clsx2(kind()), "svelte-v1dgzr"));
  append($$anchor, aside);
}

// support-kb/src/routes/kb/incidents/4471/+page.svx
var metadata3 = {
  "layout": "runbook",
  "title": "#4471 \xB7 dates parse mm/dd in eu locales",
  "owner": "support desk",
  "status": "known",
  "reviewed": "2026-09-30T00:00:00.000Z"
};
var { layout: layout3, title: title3, owner: owner3, status: status3, reviewed: reviewed3 } = metadata3;
var root8 = from_html(
  `<p>Since April, people have told us their bookings land on the wrong day: a month flipped. By
4 October the desk had <strong>412 reports</strong>.</p> <p><strong>Merged as one issue.</strong> The parser reads dates month first, and our tenants write the day
first. The fix is queued.</p> <!> <h2>What was merged</h2> <!> <h2>Since April</h2> <!> <h2>Lessons</h2> <ul><li>A big ticket is mostly one bug reported many times. Merge early, count once.</li> <li>Write the page while the queue is still in your head.</li></ul>`,
  1
);
function _page_svx3($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  Runbook($$anchor, spread_props(() => $$sanitized_props, () => metadata3, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root8();
      var node = sibling(first_child(fragment_1), 4);
      Callout(node, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text2 = text("Known. One issue, one fix queued.");
          append($$anchor3, text2);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 4);
      CauseTable(node_1, { ticket: 4471 });
      var node_2 = sibling(node_1, 4);
      QueueTimeline(node_2, { ticket: 4471 });
      next(4);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}

// support-kb/src/lib/kb/dedupe-cases.ts
var DEDUPE_CASES = [
  {
    why: "app vs email, same tenant",
    a: { tenant: "kettle.books", channel: "app", subject: "Wrong day on the invite" },
    b: { tenant: "kettle.books", channel: "email", subject: "Client turned up on the wrong day" }
  },
  {
    why: "same subject, same tenant, different channel",
    a: { tenant: "alder.physio", channel: "form", subject: "Booking on the wrong date" },
    b: { tenant: "alder.physio", channel: "app", subject: "Booking on the wrong date" }
  },
  {
    why: "same subject, same channel, different tenant",
    a: { tenant: "copper.studio", channel: "form", subject: "Date is wrong" },
    b: { tenant: "morrow.tax", channel: "form", subject: "Date is wrong" }
  },
  {
    why: "different subject, same way in",
    a: { tenant: "pale.harbour", channel: "form", subject: "Month and day swapped?" },
    b: { tenant: "alder.physio", channel: "form", subject: "Appointment moved by itself" }
  },
  {
    why: "no tenant on file",
    a: { tenant: "unknown.sender", channel: "email", subject: "Dates mixed up" },
    b: { tenant: "unknown.sender", channel: "email", subject: "Dates mixed up" }
  }
];

// support-kb/src/lib/kb/DedupeExplorer.svelte
var root9 = from_html(`<option> </option>`);
var root_15 = from_html(`<fieldset class="svelte-19vkis7"><legend></legend> <select aria-label="tenant"></select> <select aria-label="channel"></select> <input aria-label="subject"/> <code> </code></fieldset>`);
var root_23 = from_html(`<tr><td> </td><td> </td><td> </td></tr>`);
var root_3 = from_html(`<div class="try svelte-19vkis7"><!> <p> </p></div> <table><thead><tr><th>case</th><th>same subject</th><th>same cause</th></tr></thead><tbody></tbody></table>`, 1);
var $$css6 = {
  hash: "svelte-19vkis7",
  code: ".try.svelte-19vkis7 {display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:0.75rem;margin:1rem 0;}fieldset.svelte-19vkis7 {display:grid;gap:0.4rem;border:1px solid var(--line);border-radius:6px;}.verdict.svelte-19vkis7 {grid-column:1 / -1;margin:0;font-weight:600;color:var(--muted);}.dup.svelte-19vkis7 {color:var(--accent);font-weight:600;}"
};
function DedupeExplorer($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css6);
  const CHANNELS = ["app", "email", "form"];
  let a = proxy({
    tenant: "alder.physio",
    channel: "form",
    subject: "Booking on the wrong date"
  });
  let b = proxy({
    tenant: "kettle.books",
    channel: "form",
    subject: "Booking on the wrong date"
  });
  const same = (x, y) => sameCause(x, tenantOf(x), y, tenantOf(y));
  var fragment = root_3();
  var div = first_child(fragment);
  var node = child(div);
  each(node, 17, () => [a, b], index, ($$anchor2, side, i) => {
    var fieldset = root_15();
    var legend = child(fieldset);
    legend.textContent = `report ${i === 0 ? "A" : "B"}`;
    var select = sibling(legend, 2);
    each(select, 20, tenantHandles, (handle) => handle, ($$anchor3, handle) => {
      var option = root9();
      var text2 = only_child(option, true);
      var option_value = {};
      template_effect(() => {
        set_text(text2, handle);
        if (option_value !== (option_value = handle)) {
          option.__value = option_value;
        }
      });
      append($$anchor3, option);
    });
    reset(select);
    init_select(select);
    var select_1 = sibling(select, 2);
    each(select_1, 20, () => CHANNELS, (channel) => channel, ($$anchor3, channel) => {
      var option_1 = root9();
      var text_1 = only_child(option_1, true);
      var option_1_value = {};
      template_effect(() => {
        set_text(text_1, channel);
        if (option_1_value !== (option_1_value = channel)) {
          option_1.__value = option_1_value;
        }
      });
      append($$anchor3, option_1);
    });
    reset(select_1);
    init_select(select_1);
    var input = sibling(select_1, 2);
    remove_input_defaults(input);
    var code = sibling(input, 2);
    var text_2 = only_child(code, true);
    reset(fieldset);
    template_effect(($0) => set_text(text_2, $0), [
      () => causeOf(get(side), tenantOf(get(side))) ?? "no cause"
    ]);
    bind_select_value(select, () => get(side).tenant, ($$value) => get(side).tenant = $$value);
    bind_select_value(select_1, () => get(side).channel, ($$value) => get(side).channel = $$value);
    bind_value(input, () => get(side).subject, ($$value) => get(side).subject = $$value);
    append($$anchor2, fieldset);
  });
  var p = sibling(node, 2);
  let classes;
  var text_3 = only_child(p, true);
  reset(div);
  var table = sibling(div, 2);
  var tbody = sibling(child(table));
  each(tbody, 21, () => DEDUPE_CASES, (c) => c.why, ($$anchor2, c) => {
    var tr = root_23();
    var td = child(tr);
    var text_4 = only_child(td, true);
    var td_1 = sibling(td);
    var text_5 = only_child(td_1, true);
    var td_2 = sibling(td_1);
    let classes_1;
    var text_6 = only_child(td_2, true);
    reset(tr);
    template_effect(
      ($0, $1) => {
        set_text(text_4, get(c).why);
        set_text(text_5, get(c).a.subject === get(c).b.subject ? "yes" : "no");
        classes_1 = set_class(td_2, 1, "svelte-19vkis7", null, classes_1, { dup: $0 });
        set_text(text_6, $1);
      },
      [
        () => same(get(c).a, get(c).b),
        () => same(get(c).a, get(c).b) ? "yes" : "no"
      ]
    );
    append($$anchor2, tr);
  });
  reset(tbody);
  reset(table);
  template_effect(
    ($0, $1) => {
      classes = set_class(p, 1, "verdict svelte-19vkis7", null, classes, { dup: $0 });
      set_text(text_3, $1);
    },
    [
      () => same(a, b),
      () => same(a, b) ? "same cause \u2014 merge" : "different causes \u2014 keep apart"
    ]
  );
  append($$anchor, fragment);
  pop();
}

// support-kb/src/lib/kb/desk-ref.ts
var ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
function fnv1a(text2, seed) {
  let h = seed >>> 0;
  for (let i = 0; i < text2.length; i++) {
    h ^= text2.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}
function deskRef(signature2) {
  const t = signature2.trim();
  const a = fnv1a(t, 2166136261);
  const b = fnv1a(t, 2654435769);
  let bits = BigInt(a) << 8n | BigInt(b & 255);
  let out = "";
  for (let i = 0; i < 8; i++) {
    out = ALPHABET[Number(bits & 31n)] + out;
    bits >>= 5n;
  }
  return `DR-${out.slice(0, 4)}-${out.slice(4)}`;
}

// support-kb/src/lib/kb/RenderStamp.svelte
var root10 = from_html(`<p class="stamp svelte-1f7mvdy">desk ref <b class="svelte-1f7mvdy"> </b></p>`);
var root_16 = from_html(`<p class="stamp missing svelte-1f7mvdy">no desk ref: this page isn't signed (no <code>signature</code> in its frontmatter)</p>`);
var $$css7 = {
  hash: "svelte-1f7mvdy",
  code: ".stamp.svelte-1f7mvdy {margin:2rem 0 0;font:0.85rem var(--mono);color:var(--muted);}.stamp.svelte-1f7mvdy b:where(.svelte-1f7mvdy) {color:var(--accent);letter-spacing:0.04em;}.missing.svelte-1f7mvdy {color:var(--warn);}"
};
function RenderStamp($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css7);
  const ref = user_derived(() => $$props.signature ? deskRef($$props.signature) : null);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var p = root10();
      var b = sibling(child(p));
      var text2 = only_child(b, true);
      reset(p);
      template_effect(() => set_text(text2, get(ref)));
      append($$anchor2, p);
    };
    var alternate = ($$anchor2) => {
      var p_1 = root_16();
      append($$anchor2, p_1);
    };
    if_block(node, ($$render) => {
      if (get(ref)) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
}

// support-kb/src/routes/kb/incidents/4471-review/+page.svx
var metadata4 = {
  "layout": "runbook",
  "title": "#4471 review \xB7 separate causes behind the date reports",
  "owner": "hello2kamal and Codex",
  "status": "closed per engineering update",
  "reviewed": "2026-11-02",
  "signature": "v1.eyJzdWIiOiIyNjM0IiwiYXVkIjoiY2hhbGxlbmdlOndoYXQtaXQtc2hvd3MiLCJpYXQiOjE3OTM2NjMwNjksImV4cCI6MTc5Mzc0OTQ2OX0.nMSOaNWc0Epv1P_syFBuFCK3yMD-hjYTjJpoQlZooXk"
};
var { layout: layout4, title: title4, owner: owner4, status: status4, reviewed: reviewed4, signature } = metadata4;
var root11 = from_html(
  `<p>This review checks the <a href="/kb/incidents/4471">original incident</a> against the supplied export,
dated 2026-10-04. It is a snapshot investigation, not a live queue count or an implemented fix.
The counts below come from components running the supplied code and tenant directory.</p> <h2>Engineering outcome \xB7 5 October 2026</h2> <p>After the course accepted the two tickets, its <a href="https://hq.mega.dev/challenges/what-it-shows" rel="nofollow">Challenge page</a> published a new engineering update: #4471 closed on 5 October.</p> <ul><li><a href="https://github.com/hello2kamal/mega-s01e03-what-it-shows/issues/1" rel="nofollow">Parser ticket #1</a>: <strong>fixed</strong>, <code>fix(dates): parse dd/mm for eu locales</code>. Close as completed.</li> <li><a href="https://github.com/hello2kamal/mega-s01e03-what-it-shows/issues/2" rel="nofollow">Hint ticket #2</a>: <strong>won\u2019t fix</strong>,
because the booking-v3 form was retired. Close as not planned; retirement is not a parser fix.</li></ul> <p>This status comes from the course\u2019s engineering update, not a production test performed here.
The older export and computed counts below remain evidence of the original reports.</p> <h2>One merged ticket conceals different causes</h2> <!> <p><strong>Parser:</strong> the shared parser reads month first although the tenant writes day first.
Harbour Dental\u2019s R-41200 describes 7 April becoming 4 July. R-41201 corrects the opposite
direction in a separate report. Day-first app/email reports and booking-v2 form reports
are assigned to this group by the supplied classifier.</p> <p><strong>Form hint:</strong> booking-v3 prints MM/DD/YYYY but interprets input in the tenant\u2019s day-first
convention. People following that hint can enter a different date than the form reads.
The relevant form reports are from Alder Physio, Copper Studio and Pale Harbour.
R-41230, R-41241 and R-41251 are examples. Fixing the shared parser is not evidence that
this separate hint mismatch is resolved.</p> <!> <h2>Read the timeline correctly</h2> <!> <p>Reports received and reports merged are different events. The backlog begins in April;
merging into this ticket begins in July. A merge spike is not evidence of a new failure
starting that week. The chart displays weekly buckets and retains both series.</p> <h2>Why the existing triage text needs review</h2> <p>The <a href="/kb/triage/dedupe">triage page</a> and <a href="/kb/decisions/0001-dedupe-by-subject">accepted decision 0001</a> describe merging on subject.
Their review date is old enough to trigger the layout\u2019s staleness warning. Age is a reason
to check evidence, not automatic proof that a rule is invalid.</p> <p>The executable examples compare actual causes, with tenant locale, form and channel.
Matching subjects can hide different causes; different subjects can describe the same cause.
Unknown tenants cannot be safely assigned a cause. Browser-locale intake tags can disagree
with the tenant-based classification. Export pagination overlaps, so deduplicate by report ID.</p> <!> <h2>Follow-up and retained uncertainty</h2> <ul><li>Retain separate engineering tickets for the parser problem and the booking-v3 hint problem,
with the distinct closure outcomes above.</li> <li>Carry the report IDs and export date with each count; recheck counts against fresh data.</li> <li>Investigate the five anomalous reports before claiming a complete causal explanation.</li> <li>Propose a new decision record for cause-based deduplication. Preserve accepted decision
0001 unchanged and obtain approval before declaring a replacement policy accepted.</li> <li>Reconcile the incident narrative and triage guidance with the reviewed decision and code.</li></ul> <p>Sources: <code>src/lib/data/reports-4471.json</code>, <code>desk-notes.json</code>, tenant JSON, <code>src/lib/kb/causes.ts</code>, <code>locales.ts</code>, <code>dedupe-cases.ts</code>, <code>staleness.ts</code>, and the linked pages.
No independent production-fix verification or replacement-policy approval is claimed by this review.</p> <!>`,
  1
);
function _page_svx4($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  Runbook($$anchor, spread_props(() => $$sanitized_props, () => metadata4, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root11();
      var node = sibling(first_child(fragment_1), 12);
      CauseTable(node, { ticket: 4471 });
      var node_1 = sibling(node, 6);
      Callout(node_1, {
        kind: "warn",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text2 = text("The classifier's groups are not a complete root-cause diagnosis of every report.\nThe five one-day-move notes remain counted where the supplied code files them.\nTheir descriptions, including R-41344's Lisbon/Toronto difference, need separate\ninvestigation. They do not establish a timezone defect or justify a second count.");
          append($$anchor3, text2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 4);
      QueueTimeline(node_2, { ticket: 4471 });
      var node_3 = sibling(node_2, 10);
      DedupeExplorer(node_3, {});
      var node_4 = sibling(node_3, 8);
      RenderStamp(node_4, {
        get signature() {
          return signature;
        }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}

// support-kb/src/routes/kb/triage/dedupe/+page.svx
var metadata5 = {
  "layout": "runbook",
  "title": "Triage: duplicate reports",
  "owner": "support desk",
  "status": "accepted",
  "reviewed": "2024-06-11T00:00:00.000Z"
};
var { layout: layout5, title: title5, owner: owner5, status: status5, reviewed: reviewed5 } = metadata5;
var root12 = from_html(
  `<p>A busy morning brings hundreds of reports about the same thing. We keep one ticket per issue
and merge every duplicate into it, so engineering sees one thread with a count.</p> <h2>The rule</h2> <p>A report is a duplicate when its <strong>subject line matches</strong> the subject of an open ticket
(<a href="/kb/decisions/0001-dedupe-by-subject">decision 0001</a>):</p> <ol><li>lowercase the subject and strip punctuation;</li> <li>look for an open ticket with the same subject;</li> <li>found one: merge the report into it. None: open a new ticket.</li></ol> <!> <h2>Try it</h2> <!> <h2>When you are unsure</h2> <p>Merge. Splitting a ticket later is cheaper than two engineers chasing the same bug.</p>`,
  1
);
function _page_svx5($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  Runbook($$anchor, spread_props(() => $$sanitized_props, () => metadata5, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root12();
      var node = sibling(first_child(fragment_1), 8);
      Callout(node, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text2 = text("Matching on subject is fast and needs no reading. During an incident that matters more than\nanything else.");
          append($$anchor3, text2);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 4);
      DedupeExplorer(node_1, {});
      next(4);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}

// .build/client-entry.mjs
var routes = { "/kb": _page_svx, "/kb/decisions/0001-dedupe-by-subject": _page_svx2, "/kb/incidents/4471": _page_svx3, "/kb/incidents/4471-review": _page_svx4, "/kb/triage/dedupe": _page_svx5 };
var route = document.getElementById("app").dataset.route;
hydrate(routes[route], { target: document.getElementById("app") });
