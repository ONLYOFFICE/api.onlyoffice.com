/**
 * Publishes a Markdown twin of every doc page beside its HTML — `/docs/x/y/` becomes
 * `/docs/x/y.md` — and an `llms.txt` index of the site.
 *
 * The twins are the page sources, not the rendered pages: these docs are written as plain
 * Markdown, so a twin only needs its links made absolute. The generated OpenAPI pages are
 * the exception, since their source is components around a compressed spec; those are
 * rendered from that spec instead.
 *
 * `postBuild` runs once per locale with that locale's `outDir` and docs, so nothing here
 * has to know which locales are being built.
 */

const fs = require('fs');
const path = require('path');

const {createMarkdownResolver, rewriteLinks} = require('./links');
const {buildLlmsTxt} = require('./llms-txt');
const {renderApiPage} = require('./openapi');

const DOCS_PLUGIN = 'docusaurus-plugin-content-docs';

/** Where a page's twin is published: `/docs/x/y/` -> `<outDir>/docs/x/y.md`. */
function twinPath(permalink, baseUrl, outDir) {
  const route = permalink.slice(baseUrl.length).replace(/\/$/, '');
  return path.join(outDir, route ? `${route}.md` : 'index.md');
}

/** The URL of that twin: the page URL with its trailing slash replaced by `.md`. */
function twinUrl(permalink) {
  return `${permalink.replace(/\/$/, '')}.md`;
}

module.exports = function pluginLlmsTxt(context, options) {
  const {siteDir} = context;
  const {
    docsPluginId = 'default',
    exclude = [],
    sections = [],
    title,
    description,
  } = options;

  let version = null;

  return {
    name: 'onlyoffice-llms-txt',

    async allContentLoaded({allContent}) {
      // Held for postBuild, which is not passed the docs plugin's content. This is the
      // translated content, so a zh-CN build sees zh-CN titles and descriptions.
      version = allContent[DOCS_PLUGIN]?.[docsPluginId]?.loadedVersions?.[0] ?? null;
    },

    async postBuild({outDir, baseUrl, siteConfig}) {
      if (!version) {
        throw new Error(`No content loaded for the "${docsPluginId}" docs plugin`);
      }

      const siteUrl = siteConfig.url.replace(/\/$/, '');

      // Deprecated sections get no twins, and no llms.txt entries either.
      const hasTwin = (doc) => !exclude.some((prefix) => doc.id.startsWith(prefix));

      // Links are resolved against every page, the excluded ones included: a link into
      // Workspace still has to become a URL, it just cannot become a Markdown one.
      const sourceToPermalink = new Map(version.docs.map((doc) => [doc.source, doc.permalink]));
      const twins = new Set(version.docs.filter(hasTwin).map((doc) => doc.permalink));

      const resolveMarkdown = createMarkdownResolver({
        siteDir,
        sourceToPermalink,
        contentPaths: {
          contentPath: version.contentPath,
          contentPathLocalized: version.contentPathLocalized,
        },
      });

      // A link to a page that has a twin points at the twin, so that a reader following it
      // stays in Markdown. A link to any other page points at the page.
      const urlOf = (permalink) =>
        `${siteUrl}${twins.has(permalink) ? twinUrl(permalink) : permalink}`;

      const docs = version.docs.filter(hasTwin);
      let written = 0;
      const broken = [];

      for (const doc of docs) {
        const sourceFilePath = doc.source.replace(/^@site/, siteDir);
        const source = await fs.promises.readFile(sourceFilePath, 'utf8');

        let content = sourceFilePath.endsWith('.api.mdx')
          ? renderApiPage(source, {title: doc.title})
          : null;

        if (!content) {
          const rewritten = rewriteLinks(source, {
            sourceFilePath,
            permalink: doc.permalink,
            resolveMarkdown,
            urlOf,
            siteUrl,
          });
          content = rewritten.content;
          broken.push(...rewritten.broken.map((target) => `${doc.id}: ${target}`));
        }

        const target = twinPath(doc.permalink, baseUrl, outDir);
        await fs.promises.mkdir(path.dirname(target), {recursive: true});
        await fs.promises.writeFile(target, content, 'utf8');
        written += 1;
      }

      const byId = new Map(docs.map((doc) => [doc.id, doc]));
      const llmsTxt = buildLlmsTxt({
        title,
        description,
        sections,
        sidebars: version.sidebars,
        entry: (id) => {
          const doc = byId.get(id);
          return doc
            ? {title: doc.title, description: doc.description, url: urlOf(doc.permalink)}
            : null;
        },
      });

      await fs.promises.writeFile(path.join(outDir, 'llms.txt'), llmsTxt, 'utf8');

      console.log(`llms-txt: wrote ${written} Markdown twins and llms.txt to ${outDir}`);
      if (broken.length) {
        // Reported rather than thrown: `onBrokenMarkdownLinks` already governs these, and
        // a twin with one stale link is better than no twins at all.
        console.warn(
          `llms-txt: ${broken.length} Markdown links did not resolve, first few:\n  ${broken
            .slice(0, 5)
            .join('\n  ')}`,
        );
      }
    },
  };
};
