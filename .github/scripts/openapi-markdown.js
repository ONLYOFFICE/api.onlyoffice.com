/**
 * Renders one OpenAPI operation as Markdown, from the spec embedded in the page's `api:`
 * frontmatter. Called by `generate-openapi-md.js` beside it, which decodes that blob.
 */

/** Deeper nesting collapses into a single `…` row rather than exploding the table. */
const MAX_DEPTH = 5;

/** Longer enum lists are cut off with "and N more"; some run to hundreds of values. */
const MAX_ENUM_VALUES = 15;

/** Escape the characters that would otherwise break out of a Markdown table cell. */
function cell(text) {
  return text.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim();
}

function formatValue(value) {
  return typeof value === 'string' ? value : JSON.stringify(value) ?? '';
}

/** Merge `allOf` members into one schema; for `oneOf`/`anyOf`, keep only the first branch. */
function resolveSchema(schema, seen = 0) {
  if (!schema || seen > 10) {
    return schema ?? {};
  }

  const composed = schema.allOf ?? schema.oneOf ?? schema.anyOf;
  if (!composed?.length) {
    return schema;
  }

  const members = schema.allOf ? composed : composed.slice(0, 1);
  const merged = {...schema};
  delete merged.allOf;
  delete merged.oneOf;
  delete merged.anyOf;

  for (const member of members) {
    const resolved = resolveSchema(member, seen + 1);
    Object.assign(merged, resolved, {
      properties: {...merged.properties, ...resolved.properties},
      required: [...(merged.required ?? []), ...(resolved.required ?? [])],
      // The outer schema's own description beats the inherited one.
      description: schema.description ?? merged.description ?? resolved.description,
    });
  }

  return resolveSchema(merged, seen + 1);
}

/** A human-readable type, e.g. `string (uuid)`, `integer[]`, `string, nullable`. */
function describeType(schema) {
  const resolved = resolveSchema(schema);

  let type = resolved.type ?? '';
  if (type === 'array') {
    const items = resolveSchema(resolved.items);
    type = `${items.type ?? 'object'}[]`;
    if (items.format) {
      type += ` (${items.format})`;
    }
  } else if (resolved.format) {
    type += ` (${resolved.format})`;
  }

  if (!type) {
    type = resolved.properties ? 'object' : 'any';
  }
  if (resolved.nullable) {
    type += ', nullable';
  }
  return type;
}

/** The description cell: prose first, then the constraints worth knowing. */
function describeSchema(schema, ownDescription) {
  const resolved = resolveSchema(schema);
  const parts = [];

  const description = ownDescription ?? resolved.description;
  if (description) {
    parts.push(description);
  }
  if (resolved.deprecated) {
    parts.push('**Deprecated.**');
  }

  const enumValues = resolved.enum ?? resolveSchema(resolved.items).enum;
  if (enumValues?.length) {
    const shown = enumValues.slice(0, MAX_ENUM_VALUES).map((v) => `\`${formatValue(v)}\``);
    const rest = enumValues.length - shown.length;
    parts.push(`One of: ${shown.join(', ')}${rest > 0 ? `, and ${rest} more` : ''}.`);
  }
  if (resolved.default !== undefined) {
    parts.push(`Default: \`${formatValue(resolved.default)}\`.`);
  }
  if (resolved.example !== undefined && typeof resolved.example !== 'object') {
    parts.push(`Example: \`${formatValue(resolved.example)}\`.`);
  }

  return cell(parts.join(' '));
}

/** Walk an object schema into flat rows named by dotted path (`response.manager.email`). */
function flattenSchema(schema, prefix = '', depth = 0) {
  const resolved = resolveSchema(schema);

  // Step through arrays into the object they contain, so `items` properties are not lost.
  const target = resolved.type === 'array' ? resolveSchema(resolved.items) : resolved;
  if (!target.properties) {
    return [];
  }

  if (depth >= MAX_DEPTH) {
    return [
      {
        name: `${prefix}…`,
        type: 'object',
        required: false,
        description: 'Nested further; see the page itself for the full schema.',
      },
    ];
  }

  const required = new Set(target.required ?? []);
  const rows = [];

  for (const [name, raw] of Object.entries(target.properties)) {
    const property = resolveSchema(raw);
    const path = `${prefix}${name}`;

    rows.push({
      name: path,
      type: describeType(property),
      required: required.has(name),
      description: describeSchema(property),
    });
    rows.push(...flattenSchema(property, `${path}.`, depth + 1));
  }

  return rows;
}

function renderRows(rows) {
  let table = '| Property | Type | Required | Description |\n| --- | --- | --- | --- |\n';
  for (const row of rows) {
    table += `| \`${row.name}\` | ${row.type} | ${row.required ? 'Yes' : 'No'} | ${row.description} |\n`;
  }
  return `${table}\n`;
}

/** Render one request or response body: its content types and their schemas. */
function renderBody(body) {
  if (!body?.content) {
    return '';
  }

  let markdown = '';
  for (const [mediaType, media] of Object.entries(body.content)) {
    markdown += `Content type: \`${mediaType}\`\n\n`;

    const rows = flattenSchema(media.schema);
    if (rows.length) {
      markdown += renderRows(rows);
      continue;
    }

    // A scalar or free-form object; one with no `type` yields nothing but its content type.
    const resolved = resolveSchema(media.schema);
    if (resolved.type) {
      const description = describeSchema(resolved);
      markdown += `Type: ${describeType(resolved)}.${description ? ` ${description}` : ''}\n\n`;
    }
  }
  return markdown;
}

/** The auth schemes an operation accepts, named as the spec's `securitySchemes` defines them. */
function renderAuthorization(spec) {
  const names = new Set();
  for (const requirement of spec.security ?? []) {
    for (const name of Object.keys(requirement)) {
      names.add(name);
    }
  }
  if (!names.size) {
    return '';
  }

  let markdown = '## Authorization\n\nOne of:\n\n';
  for (const name of names) {
    const scheme = spec.securitySchemes?.[name];
    const kind = [scheme?.type, scheme?.scheme].filter(Boolean).join(' ');
    const where = scheme?.in && scheme?.name ? ` — \`${scheme.name}\` in ${scheme.in}` : '';
    markdown += `- \`${name}\`${kind ? ` (${kind})` : ''}${where}\n`;
  }
  return `${markdown}\n`;
}

function generateMarkdownFromApiSpec(apiSpec, options = {}) {
  if (!apiSpec) {
    throw new Error('Invalid API specification');
  }
  if (!options.title) {
    // Specs carry no title, so one taken from the spec would name every page the same.
    throw new Error('A title is required: specs carry none of their own');
  }

  let markdown = `# ${options.title}\n\n`;

  if (apiSpec.method && apiSpec.path) {
    markdown += `\`${apiSpec.method.toUpperCase()} ${apiSpec.path}\`\n\n`;
  }
  if (apiSpec.deprecated) {
    markdown += '**Deprecated.**\n\n';
  }
  if (apiSpec.description) {
    markdown += `${apiSpec.description}\n\n`;
  }
  if (apiSpec.operationId) {
    markdown += `Operation ID: \`${apiSpec.operationId}\`\n\n`;
  }

  markdown += renderAuthorization(apiSpec);

  if (apiSpec.parameters?.length) {
    markdown += '## Parameters\n\n';
    markdown += '| Name | In | Type | Required | Description |\n| --- | --- | --- | --- | --- |\n';
    for (const parameter of apiSpec.parameters) {
      const type = describeType(parameter.schema ?? {});
      const description = describeSchema(parameter.schema ?? {}, parameter.description);
      const deprecated = parameter.deprecated ? '**Deprecated.** ' : '';
      markdown += `| \`${parameter.name ?? ''}\` | ${parameter.in ?? ''} | ${type} | ${parameter.required ? 'Yes' : 'No'} | ${deprecated}${description} |\n`;
    }
    markdown += '\n';
  }

  if (apiSpec.requestBody) {
    markdown += '## Request body\n\n';
    if (apiSpec.requestBody.description) {
      markdown += `${apiSpec.requestBody.description}\n\n`;
    }
    markdown += renderBody(apiSpec.requestBody);

    if (apiSpec.jsonRequestBodyExample !== undefined) {
      markdown += `Example:\n\n\`\`\`json\n${JSON.stringify(apiSpec.jsonRequestBodyExample, null, 2)}\n\`\`\`\n\n`;
    }
  }

  if (apiSpec.responses && Object.keys(apiSpec.responses).length) {
    markdown += '## Responses\n\n';
    for (const [status, response] of Object.entries(apiSpec.responses)) {
      markdown += `### ${status}${response.description ? ` — ${response.description}` : ''}\n\n`;
      markdown += renderBody(response);
    }
  }

  return markdown;
}

module.exports = {generateMarkdownFromApiSpec};
