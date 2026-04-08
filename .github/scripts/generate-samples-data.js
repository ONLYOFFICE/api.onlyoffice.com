const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SOURCES = [
  // Docs
  { dir: 'site/docs/docs-api/samples', routeBase: 'docs/docs-api/samples', output: 'docs-samples.json' },
  { dir: 'site/docs/office-api/samples', routeBase: 'docs/office-api/samples', output: 'docs-office-api-samples.json' },
  { dir: 'site/docs/plugin-and-macros/samples', routeBase: 'docs/plugin-and-macros/samples', output: 'docs-plugins-samples.json' },
  { dir: 'site/docs/document-builder/samples', routeBase: 'docs/document-builder/samples', output: 'docs-builder-samples.json' },
  // AI
  { dir: 'site/docs/plugin-and-macros/samples/custom-ai-tools', routeBase: 'docs/plugin-and-macros/samples/custom-ai-tools', output: 'ai-samples.json' },
  // DocSpace
  { dir: 'site/docspace/api-backend/samples', routeBase: 'docspace/api-backend/samples', output: 'docspace-samples.json' },
  { dir: 'site/docspace/javascript-sdk/samples', routeBase: 'docspace/javascript-sdk/samples', output: 'docspace-jssdk-samples.json' },
  { dir: 'site/docspace/plugins-sdk/samples', routeBase: 'docspace/plugins-sdk/samples', output: 'docspace-plugins-samples.json' },
];

const ROOT = path.resolve(__dirname, '../..');
const OUTPUT_DIR = path.resolve(ROOT, 'src/data');

function parseFrontMatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
      data[key] = val;
    }
  }
  return data;
}

function getTitleFromBody(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : '';
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const source of SOURCES) {
  const samplesDir = path.resolve(ROOT, source.dir);
  if (!fs.existsSync(samplesDir)) {
    console.log(`Skipped ${source.dir} (not found)`);
    continue;
  }

  const files = glob.sync('**/*.md', { cwd: samplesDir });

  const items = files
    .filter(f => {
      if (f.includes('_category_')) return false;
      const name = path.basename(f, '.md');
      const parent = path.basename(path.dirname(f));
      const dirName = path.basename(source.dir);
      return name !== parent && name !== dirName;
    })
    .map(f => {
      const content = fs.readFileSync(path.join(samplesDir, f), 'utf-8');
      const fm = parseFrontMatter(content);
      const title = fm.title || getTitleFromBody(content) || f.replace(/\.md$/, '').split('/').pop().replace(/-/g, ' ');
      const description = fm.description || '';
      const slug = f.replace(/\.md$/, '');

      return {
        title,
        description,
        path: `/${source.routeBase}/${slug}/`,
      };
    });

  const outputPath = path.join(OUTPUT_DIR, source.output);
  fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));
  console.log(`Generated ${items.length} samples → ${outputPath}`);
}
