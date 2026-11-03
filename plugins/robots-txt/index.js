/**
 * Publishes `/robots.txt`: one `User-agent: *` group with the given `Disallow` rules and,
 * when `sitemap` is set, a `Sitemap:` line pointing at the site's `sitemap.xml`.
 *
 * Docusaurus has no robots.txt of its own, and a file in `static/` would be the same for
 * every SITE_MODE, so the config passes the rules for the mode being built.
 *
 * `postBuild` runs once per locale, and only the default locale builds into the site root:
 * the others build into `build/<locale>/`, where crawlers never look for robots.txt.
 */

const fs = require('fs');
const path = require('path');

module.exports = function pluginRobotsTxt(context, options) {
  const {disallow = [], sitemap = false} = options;

  return {
    name: 'onlyoffice-robots-txt',

    async postBuild({outDir, siteConfig}) {
      const {currentLocale, defaultLocale} = context.i18n;
      if (currentLocale !== defaultLocale) {
        return;
      }

      const siteUrl = siteConfig.url.replace(/\/$/, '');
      const lines = ['User-agent: *', ...disallow.map((rule) => `Disallow: ${rule}`)];
      if (sitemap) {
        lines.push(`Sitemap: ${siteUrl}/sitemap.xml`);
      }

      await fs.promises.writeFile(path.join(outDir, 'robots.txt'), `${lines.join('\n')}\n`, 'utf8');
      console.log(`robots-txt: wrote robots.txt to ${outDir}`);
    },
  };
};
