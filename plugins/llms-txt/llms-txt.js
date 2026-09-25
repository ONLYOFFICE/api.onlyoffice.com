/**
 * Builds the llms.txt files: a root index naming the documentation's sections, and one
 * llms.txt per section listing that section's pages in the order the navigation puts them.
 *
 * Splitting them is the spec's own design — a file "can be placed at the site root, or at
 * any path within it, covering the pages under that path", and an agent takes the most
 * specific one. It is also what keeps the root readable: Office API is four fifths of the
 * site's nine thousand pages, and one file listing them all came to well over a megabyte,
 * past what a client will read.
 *
 * The sidebars are the index rather than the route tree, because they already carry the
 * order and the category labels a reader would recognise. A section's file is written to
 * the route its pages share, so `/docs/office-api/llms.txt` covers `/docs/office-api/`.
 *
 * Each file is laid out the way the spec asks: the H1, a `>` blockquote holding the
 * summary, then plain paragraphs saying how to read what follows. Those are two slots, not
 * one — a parser reads the blockquote as the summary, so the navigation note stays out of
 * it.
 */

const sectionDetails = (rootUrl) =>
  'Links below point to the Markdown version of each page. For the other sections of this ' +
  `documentation, see the [index](${rootUrl}).`;

/** The entries of a sidebar category, flattened, in the order the sidebar puts them. */
function* sidebarDocs(items) {
  for (const item of items) {
    if (item.type === 'doc') {
      yield item.id;
    } else if (item.type === 'category') {
      if (item.link?.type === 'doc') {
        yield item.link.id;
      }
      yield* sidebarDocs(item.items);
    }
    // `ref` repeats a doc listed elsewhere; `link` and `html` are not pages of this site.
  }
}

/** A description worth printing: one line, and not the first sentence repeated as a title. */
function describe(doc) {
  const description = doc.description?.replace(/\s+/g, ' ').trim();
  return description && description !== doc.title ? `: ${description}` : '';
}

/**
 * The second level of a section: the sidebar's top-level categories. Pages sitting
 * directly in the sidebar are listed under the section itself, whatever their position,
 * so that a category heading never claims a page that is not in it.
 */
function splitSidebar(items) {
  const loose = [];
  const categories = [];

  for (const item of items) {
    if (item.type === 'doc') {
      loose.push(item.id);
    } else if (item.type === 'category') {
      categories.push({label: item.label, ids: [...sidebarDocs([item])]});
    }
  }

  return {loose, categories};
}

/** The route a section's pages share: `/docs/office-api/` for everything under it. */
function commonRoute(routes) {
  let prefix = routes[0].split('/').filter(Boolean);

  for (const route of routes.slice(1)) {
    const segments = route.split('/').filter(Boolean);
    let length = 0;
    while (length < prefix.length && prefix[length] === segments[length]) {
      length += 1;
    }
    prefix = prefix.slice(0, length);
  }

  return `/${prefix.map((segment) => `${segment}/`).join('')}`;
}

/** An llms.txt header: the H1, the summary the spec reads from the blockquote, the detail. */
function header(title, summary, details) {
  let content = `# ${title}\n\n`;
  if (summary) {
    content += `> ${summary.replace(/\s+/g, ' ').trim()}\n\n`;
  }
  if (details) {
    content += `${details}\n\n`;
  }
  return content;
}

/**
 * @param title The H1 of the root index.
 * @param description Its summary, printed as the blockquote the spec reads it from.
 * @param notes Paragraphs printed under that summary, saying how to read the file.
 * @param sections `{sidebar, group, name, description}`, in the order they should appear.
 *   `group` heads the root index's H2 the section is listed under; consecutive sections
 *   sharing one are listed together. `name` titles it there, and `group: name` is the H1
 *   of its own file, where `description` becomes the summary.
 * @param optional `{name, url, description}`, listed under `## Optional` at the end of the
 *   root index. A `url` without a scheme is resolved against the site, so a locale build
 *   links into its own locale; an absolute one is printed as it stands.
 * @param sidebars The loaded sidebars, keyed by name.
 * @param entry Maps a doc id to `{title, description, url, route}`, or null when it has no
 *   twin — a page of a deprecated section, which is left out of the index as well.
 * @param siteUrl The site's origin, without a trailing slash.
 * @param baseUrl The site's base path, where the root index is written.
 * @returns `[{route, content}]`, the root index first: the route each file belongs at.
 */
function buildLlmsTxt({
  title,
  description,
  notes,
  sections,
  optional = [],
  sidebars,
  entry,
  siteUrl,
  baseUrl,
}) {
  const rootUrl = `${siteUrl}${baseUrl}llms.txt`;
  const details = sectionDetails(rootUrl);
  const files = [];
  const groups = [];

  for (const section of sections) {
    const items = sidebars[section.sidebar];
    if (!items) {
      throw new Error(`No sidebar named ${section.sidebar}`);
    }

    // A doc reached twice — a category index also listed as a page — is printed once.
    const seen = new Set();
    const blocks = [];
    const routes = [];

    const list = (label, ids) => {
      const fresh = ids.filter((id) => !seen.has(id) && seen.add(id));

      const docs = fresh.map((id) => entry(id)).filter(Boolean);
      if (docs.length) {
        routes.push(...docs.map((doc) => doc.route));
        const lines = docs.map((doc) => `- [${doc.title}](${doc.url})${describe(doc)}\n`);
        blocks.push(`## ${label}\n\n${lines.join('')}`);
      }
    };

    const {loose, categories} = splitSidebar(items);
    // Loose pages get a heading of their own: the spec lists files under an H2 only.
    list('Overview', loose);
    for (const category of categories) {
      list(category.label, category.ids);
    }

    if (!blocks.length) {
      continue;
    }

    const route = commonRoute(routes);
    if (!route.startsWith(baseUrl) || route === baseUrl) {
      throw new Error(
        `The pages of ${section.sidebar} share no route below ${baseUrl}, so its llms.txt would replace the root index`,
      );
    }
    if (files.some((file) => file.route === route)) {
      throw new Error(`Two sections share the route ${route}, and so would share one llms.txt`);
    }

    const heading = `${section.group}: ${section.name}`;
    files.push({route, content: header(heading, section.description, details) + blocks.join('\n')});

    let group = groups.at(-1);
    if (group?.name !== section.group) {
      group = {name: section.group, entries: []};
      groups.push(group);
    }

    const url = `${siteUrl}${route}llms.txt`;
    const described = describe({title: section.name, description: section.description});
    group.entries.push(`- [${section.name}](${url})${described}\n`);
  }

  const index = groups.map((group) => `## ${group.name}\n\n${group.entries.join('')}`);

  // `Optional` is the spec's one meaningful section name: a client short of context skips it.
  const extras = optional.map(({name, url, description}) => {
    const target = /^[a-z]+:/.test(url) ? url : `${siteUrl}${baseUrl}${url.replace(/^\//, '')}`;
    return `- [${name}](${target})${describe({title: name, description})}\n`;
  });
  if (extras.length) {
    index.push(`## Optional\n\n${extras.join('')}`);
  }
  files.unshift({route: baseUrl, content: header(title, description, notes) + index.join('\n')});

  return files;
}

module.exports = {buildLlmsTxt};
