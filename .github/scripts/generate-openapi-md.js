/**
 * Replaces the Markdown twins of the generated OpenAPI pages. The llms-txt plugin builds those
 * from rendered HTML, which for these pages carries no parameters and no schemas, while the
 * whole spec sits in each page's `api:` frontmatter. Runs after `docusaurus build`, so the
 * plugin has already written the files this overwrites.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const {generateMarkdownFromApiSpec} = require('./openapi-markdown.js');

const BUILD_DIR = 'build';
const SITE_DIR = 'site';

/** Same path under `site/` and under every build root. Workspace is deprecated: no twins. */
const SECTION = 'docspace/api-backend/usage-api';

/** The blob is zlib deflate, not gzip: `unzipSync` autodetects, `gunzipSync` would throw. */
function decodeApiSpec(blob) {
  return JSON.parse(zlib.unzipSync(Buffer.from(blob, 'base64')).toString('utf8'));
}

/** Each operation's id mapped to its spec blob and page title. */
function readSpecs() {
  const sourceDir = path.join(SITE_DIR, SECTION);
  if (!fs.existsSync(sourceDir)) {
    throw new Error(`${sourceDir} not found — run \`yarn docusaurus gen-api-docs all\`.`);
  }

  const specs = new Map();
  for (const file of fs.readdirSync(sourceDir)) {
    if (!file.endsWith('.api.mdx')) {
      continue;
    }

    const source = fs.readFileSync(path.join(sourceDir, file), 'utf8');
    const api = source.match(/^api:\s*(.+?)\s*$/m)?.[1];
    const title = source.match(/^title:\s*(.+?)\s*$/m)?.[1]?.replace(/^["'](.*)["']$/, '$1');
    if (!api || !title) {
      throw new Error(`Missing api or title in the frontmatter of ${file}`);
    }

    specs.set(file.replace(/\.api\.mdx$/, ''), {api, title});
  }

  if (!specs.size) {
    throw new Error(`No .api.mdx files in ${sourceDir}.`);
  }
  return specs;
}

/** `build/` plus any `build/<locale>/` that mirrors the site tree, so locales need no config. */
function localeRoots() {
  const mirrorsSite = (dir) => fs.existsSync(path.join(dir, SECTION));

  return [
    BUILD_DIR,
    ...fs
      .readdirSync(BUILD_DIR, {withFileTypes: true})
      .filter((entry) => entry.isDirectory())
      .map((entry) => path.join(BUILD_DIR, entry.name))
      .filter(mirrorsSite),
  ];
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    throw new Error(`${BUILD_DIR}/ not found — run this after \`docusaurus build\`.`);
  }

  const specs = readSpecs();
  const rendered = [];

  for (const root of localeRoots()) {
    let written = 0;

    for (const [id, spec] of specs) {
      // A partial build should degrade, not crash.
      if (!fs.existsSync(path.join(root, SECTION, id, 'index.html'))) {
        continue;
      }

      // The twin sits beside the page directory: <page>/index.html -> <page>.md
      fs.writeFileSync(
        path.join(root, SECTION, `${id}.md`),
        generateMarkdownFromApiSpec(decodeApiSpec(spec.api), {title: spec.title}),
        'utf8',
      );
      written += 1;
    }

    rendered.push(`${root} (${written})`);
    if (written < specs.size) {
      console.warn(`${root}: ${specs.size - written} of ${specs.size} specs had no built page`);
    }
  }

  console.log(`Rendered OpenAPI Markdown twins from ${specs.size} specs: ${rendered.join(', ')}`);
}

main();
