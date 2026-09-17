/**
 * Rewrites the links of a page source so the published Markdown twin stands on its own.
 *
 * A twin is served from a different URL than the source is written against
 * (`site/docs/ai/guides/ai-agent.md` -> `/docs/ai/guides/ai-agent.md`) and is meant to be
 * read far from the site, so every link becomes absolute. Links to a page that has a twin
 * of its own point at that twin, which keeps a reader inside Markdown; everything else —
 * images, Workspace, the routes that are not docs pages — points at the site.
 *
 * Markdown links are resolved with `resolveMarkdownLinkPathname`, the same function the
 * MDX loader resolves them with, so a twin's links land where the page's links land. What
 * it does not treat as a Markdown link (a link that omits the extension, an image, a bare
 * `#anchor`) is resolved as a URL against the page's own URL, which is what the browser
 * does with it.
 */

const {
  normalizeUrl,
  parseLocalURLPath,
  resolveMarkdownLinkPathname,
  resolvePathname,
  serializeURLPath,
} = require('@docusaurus/utils');

/** `](target)` or `](target "title")`. No source uses angle-bracket or parenthesised targets. */
const INLINE_LINK = /(\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g;

/** A reference definition: `[label]: target`, optionally followed by a title. */
const REFERENCE_LINK = /^(\s{0,3}\[[^\]]+\]:\s*)(\S+)/;

/** `src="/assets/…"` on an image or a component — a link that is not Markdown syntax. */
const ATTRIBUTE_URL = /\b(src|href)=("|')([^"']+)\2/g;

/** A fence opening or closing a code block, left untouched. Any indent: `<TabItem>` nests them. */
const FENCE = /^\s*(```+|~~~+)/;

/** Docusaurus only resolves a link against the sources when it names a Markdown file. */
const MARKDOWN_EXTENSION = /\.mdx?$/i;

/**
 * Rewrites every link in `source` to an absolute URL.
 *
 * @param source The page source, frontmatter included.
 * @param sourceFilePath The absolute path of the file `source` was read from.
 * @param permalink The route of the page itself, which relative links resolve against.
 * @param resolveMarkdown Maps a Markdown link's pathname to a permalink, or to null.
 * @param urlOf Maps a permalink to the absolute URL a link to it should use.
 * @param siteUrl The site's origin, without a trailing slash.
 * @returns The source with its links rewritten, and the Markdown links that resolved to
 *   nothing — the build reports those itself through `onBrokenMarkdownLinks`.
 */
function rewriteLinks(source, {sourceFilePath, permalink, resolveMarkdown, urlOf, siteUrl}) {
  const broken = [];

  const rewrite = (target) => {
    const urlPath = parseLocalURLPath(target);
    if (!urlPath) {
      return target;
    }

    if (MARKDOWN_EXTENSION.test(urlPath.pathname)) {
      const resolved = resolveMarkdown(urlPath.pathname, sourceFilePath);
      if (!resolved) {
        broken.push(target);
        return target;
      }
      return serializeURLPath({...urlPath, pathname: urlOf(resolved)});
    }

    const pathname = urlPath.pathname
      ? normalizeUrl([siteUrl, resolvePathname(urlPath.pathname, permalink)])
      : `${siteUrl}${permalink}`;

    return serializeURLPath({...urlPath, pathname});
  };

  let fence = null;
  // The frontmatter is copied as it stands, and its `---` is not a code fence.
  let inFrontMatter = source.startsWith('---\n');

  const lines = source.split('\n').map((line, index) => {
    if (inFrontMatter) {
      inFrontMatter = index === 0 || line.trimEnd() !== '---';
      return line;
    }

    const fenceMatch = line.match(FENCE);
    if (fence) {
      if (fenceMatch && fenceMatch[1].startsWith(fence[0]) && fenceMatch[1].length >= fence.length) {
        fence = null;
      }
      return line;
    }
    if (fenceMatch) {
      fence = fenceMatch[1];
      return line;
    }

    return line
      .replace(INLINE_LINK, (_match, open, target, close) => `${open}${rewrite(target)}${close}`)
      .replace(REFERENCE_LINK, (_match, open, target) => `${open}${rewrite(target)}`)
      .replace(
        ATTRIBUTE_URL,
        (_match, name, quote, target) => `${name}=${quote}${rewrite(target)}${quote}`,
      );
  });

  return {content: lines.join('\n'), broken};
}

/**
 * A `resolveMarkdown` bound to one docs version: the same inputs the MDX loader hands
 * `resolveMarkdownLinkPathname` while compiling these pages.
 */
function createMarkdownResolver({siteDir, contentPaths, sourceToPermalink}) {
  return (linkPathname, sourceFilePath) =>
    resolveMarkdownLinkPathname(linkPathname, {
      sourceFilePath,
      sourceToPermalink,
      contentPaths,
      siteDir,
    });
}

module.exports = {rewriteLinks, createMarkdownResolver};
