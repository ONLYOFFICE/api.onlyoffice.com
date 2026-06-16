const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SOURCES = [
  // Docs
  { dir: 'site/docs/docs-api/samples', routeBase: 'docs/docs-api/samples', output: 'docs-samples.json' },
  { dir: 'site/docs/office-api/samples', routeBase: 'docs/office-api/samples', output: 'docs-office-api-samples.json' },
  { dir: 'site/docs/plugins/samples', routeBase: 'docs/plugins/samples', output: 'docs-plugins-samples.json' },
  { dir: 'site/docs/macros/samples', routeBase: 'docs/macros/samples', output: 'docs-macros-samples.json' },
  // docs-builder-samples.json is maintained manually
  // AI - Docs
  { dir: 'site/docs/ai/samples', routeBase: 'docs/ai/samples', output: 'docs-ai-samples.json' },
  // AI - DocSpace
  { dir: 'site/docspace/mcp-server/use-cases', routeBase: 'docspace/mcp-server/use-cases', output: 'docspace-ai-samples.json' },
  // Docs - Connectors
  { dir: 'site/docs/docs-api/get-started/ready-to-use-connectors', routeBase: 'docs/docs-api/get-started/ready-to-use-connectors', output: 'docs-connectors-samples.json' },
  // DocSpace
  { dir: 'site/docspace/api-backend/samples', routeBase: 'docspace/api-backend/samples', output: 'docspace-samples.json' },
  { dir: 'site/docspace/javascript-sdk', routeBase: 'docspace/javascript-sdk', output: 'docspace-jssdk-samples.json', include: ['samples/**/*.md', 'get-started/react-component.md'] },
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
      const raw = line.slice(idx + 1).trim();
      if (raw.startsWith('[')) {
        try { data[key] = JSON.parse(raw); } catch { data[key] = raw; }
      } else {
        data[key] = raw.replace(/^["']|["']$/g, '');
      }
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

  const patterns = source.include || ['**/*.md'];
  const files = patterns.flatMap(p => glob.sync(p, { cwd: samplesDir }));

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

      const item = {
        title,
        description,
        path: `/${source.routeBase}/${slug}/`,
      };
      if (Array.isArray(fm.tags)) item.tags = fm.tags;
      return item;
    });

  const outputPath = path.join(OUTPUT_DIR, source.output);
  fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));
  console.log(`Generated ${items.length} samples → ${outputPath}`);
}
