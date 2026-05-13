const fs = require("fs");
const path = require("path");

const file = process.argv[2];
if (!file) {
  console.error("Usage: node postprocess-schema.js <schema.json>");
  process.exit(1);
}

const filePath = path.resolve(file);
const schema = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// Inline root $ref so JSON Forms sees a concrete object schema
if (schema.$ref && schema.definitions) {
  const name = schema.$ref.replace("#/definitions/", "");
  const root = schema.definitions[name];
  if (root) {
    delete schema.$ref;
    Object.assign(schema, root);
    delete schema.definitions[name];
  }
}

// Collapse anyOf unions that JSON Forms cannot render
walk(schema);

// Remove deprecated properties
removeDeprecated(schema);

// Remove paths not renderable by JSON Forms
removePaths(schema, ["document.options"]);

// Transform event function properties into string-typed fields
transformEvents(schema);

// Clean up definitions no longer referenced
cleanDefinitions(schema);

fs.writeFileSync(filePath, JSON.stringify(schema, null, 2));
console.log(`Postprocessed ${path.basename(filePath)}`);

// ---------------------------------------------------------------------------

function walk(node) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach(walk);
    return;
  }

  if (Array.isArray(node.anyOf)) {
    collapseAnyOf(node);
  }

  for (const val of Object.values(node)) {
    walk(val);
  }
}

/**
 * Collapse anyOf unions in-place:
 * - object | boolean       → object
 * - object | string-consts → object
 * - "" | array             → array
 * - $ref-enum | string-consts → merged enum
 */
function collapseAnyOf(node) {
  const variants = node.anyOf;

  const objects = variants.filter((v) => v.type === "object" || v.properties);
  const booleans = variants.filter(
    (v) => v.type === "boolean" || typeof v.const === "boolean",
  );
  const stringConsts = variants.filter(
    (v) => v.type === "string" && "const" in v,
  );
  const arrays = variants.filter((v) => v.type === "array");
  const emptyStrings = variants.filter(
    (v) => v.type === "string" && v.const === "",
  );
  const refs = variants.filter((v) => "$ref" in v);

  // object | boolean → keep object, mark as also accepting boolean
  if (
    objects.length > 0 &&
    booleans.length > 0 &&
    objects.length + booleans.length === variants.length
  ) {
    replace(node, objects[0]);
    node["x-alsoBoolean"] = true;
    return;
  }

  // object | string-consts → keep object
  if (
    objects.length > 0 &&
    stringConsts.length > 0 &&
    objects.length + stringConsts.length === variants.length
  ) {
    replace(node, objects[0]);
    return;
  }

  // "" | array → keep array
  if (
    arrays.length > 0 &&
    emptyStrings.length > 0 &&
    arrays.length + emptyStrings.length === variants.length
  ) {
    replace(node, arrays[0]);
    return;
  }

  // $ref(enum) | string-consts → merge into single enum
  if (
    refs.length === 1 &&
    stringConsts.length > 0 &&
    refs.length + stringConsts.length === variants.length
  ) {
    const refName = refs[0].$ref.replace("#/definitions/", "");
    const def = schema.definitions?.[refName];
    if (def?.enum) {
      const extra = stringConsts.map((v) => v.const);
      replace(node, {
        type: def.type || "string",
        enum: [...new Set([...def.enum, ...extra])],
      });
      return;
    }
  }

  // all $refs pointing to string enums → merge into single flat enum
  if (refs.length > 1 && refs.length === variants.length) {
    const merged = [];
    for (const ref of refs) {
      const refName = ref.$ref.replace("#/definitions/", "");
      const def = schema.definitions?.[refName];
      if (!def?.enum) return;
      merged.push(...def.enum);
    }
    replace(node, { type: "string", enum: [...new Set(merged)] });
    return;
  }
}

/** Replace all own properties of `target` with those of `source`, removing anyOf. */
function replace(target, source) {
  const desc = target.description;
  delete target.anyOf;
  Object.assign(target, source);
  if (desc && !target.description) target.description = desc;
}

/** Remove properties marked as deprecated. */
function removeDeprecated(node) {
  if (!node || typeof node !== "object" || Array.isArray(node)) return;

  if (node.properties) {
    for (const [key, prop] of Object.entries(node.properties)) {
      if (prop.deprecated) {
        delete node.properties[key];
        if (Array.isArray(node.required)) {
          node.required = node.required.filter((k) => k !== key);
        }
      }
    }
  }

  for (const val of Object.values(node)) {
    removeDeprecated(val);
  }
}

/** Remove specific dot-separated paths (e.g. "events", "document.options"). */
function removePaths(schema, paths) {
  for (const p of paths) {
    const segments = p.split(".");
    const prop = segments.pop();
    let node = schema;
    for (const seg of segments) {
      node = node.properties?.[seg];
      if (!node) break;
    }
    if (node?.properties?.[prop]) {
      delete node.properties[prop];
      if (Array.isArray(node.required)) {
        node.required = node.required.filter((k) => k !== prop);
      }
    }
  }
}

/**
 * Transform event properties from function stubs into string-typed fields
 * so JSON Forms can render them as toggleable event handlers.
 */
function transformEvents(schema) {
  const events = schema.properties?.events;
  if (!events?.properties) return;

  for (const [name, prop] of Object.entries(events.properties)) {
    const comment = prop.$comment || "";
    const hasParam = /\(\s*event\s*:/.test(comment);
    const desc = prop.description || "";

    events.properties[name] = {
      type: "string",
      description: desc,
      "x-event": true,
      "x-hasEventParam": hasParam,
    };
  }

  // Ensure the wrapper is a plain object
  delete events.additionalProperties;
  if (!events.type) events.type = "object";
}

/** Remove definitions that are no longer referenced anywhere in the schema. */
function cleanDefinitions(schema) {
  if (!schema.definitions) return;
  const json = JSON.stringify(schema);
  for (const name of Object.keys(schema.definitions)) {
    const ref = `#/definitions/${name}`;
    if (!json.includes(ref)) {
      delete schema.definitions[name];
    }
  }
  if (!Object.keys(schema.definitions).length) {
    delete schema.definitions;
  }
}
