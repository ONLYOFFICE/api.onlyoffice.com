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
 * A section can still be too big for one file. A category whose pages all lie under one
 * of the `split` prefixes is given an llms.txt of its own, which the section's file links
 * to in its place. Inside such a file each subcategory is a heading, and the pages nested
 * one level further are named after it: `ApiRange.AddComment`, not one `AddComment` among
 * many. Pages directly in a subcategory, like the plugin API's `Methods/`, keep their names.
 *
 * Each file is laid out the way the spec asks: the H1, a `>` blockquote holding the
 * summary, then plain paragraphs saying how to read what follows. Those are two slots, not
 * one — a parser reads the blockquote as the summary, so the navigation note stays out of
 * it.
 */

const sectionDetails = (rootUrl, split) =>
  'Links below point to the Markdown version of each page' +
  (split ? ', except those to a further llms.txt: the full index of the pages under that entry' : '') +
  `. For the other sections of this documentation, see the [index](${rootUrl}).`;

const splitDetails = (sectionUrl, rootUrl) =>
  'Links below point to the Markdown version of each page. This file covers one part of the ' +
  `[section index](${sectionUrl}); for the other sections of this documentation, see the ` +
  `[index](${rootUrl}).`;

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

/**
 * The entries of a sidebar category, in sidebar order: `{id}` for a page, `{category}` for
 * a category whose pages all lie under one of the `splits` prefixes, which is not entered.
 */
function* sidebarEntries(items, splits) {
  for (const item of items) {
    if (item.type === 'doc') {
      yield {id: item.id};
    } else if (item.type === 'category') {
      const ids = [...sidebarDocs([item])];
      if (ids.length && splits.some((prefix) => ids.every((id) => id.startsWith(prefix)))) {
        yield {category: item};
        continue;
      }
      if (item.link?.type === 'doc') {
        yield {id: item.link.id};
      }
      yield* sidebarEntries(item.items, splits);
    }
  }
}

/**
 * The headings of a split category's file: its own page and loose pages under `Overview`,
 * then one per subcategory. A page nested below a subcategory is a member of it, so its
 * label carries the subcategory's: `ApiRange.AddComment`.
 */
function splitCategory(category) {
  const loose = category.link?.type === 'doc' ? [{id: category.link.id}] : [];
  const headings = [];

  for (const item of category.items) {
    if (item.type === 'doc') {
      loose.push({id: item.id});
    } else if (item.type === 'category') {
      const entries = item.link?.type === 'doc' ? [{id: item.link.id}] : [];
      for (const member of item.items) {
        if (member.type === 'doc') {
          entries.push({id: member.id});
        } else if (member.type === 'category') {
          entries.push(...[...sidebarDocs([member])].map((id) => ({id, owner: item.label})));
        }
      }
      headings.push({label: item.label, entries});
    }
  }

  return [{label: 'Overview', entries: loose}, ...headings];
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
function splitSidebar(items, splits) {
  const loose = [];
  const categories = [];

  for (const item of items) {
    if (item.type === 'doc') {
      loose.push({id: item.id});
    } else if (item.type === 'category') {
      const entries = item.link?.type === 'doc' ? [{id: item.link.id}] : [];
      entries.push(...sidebarEntries(item.items, splits));
      categories.push({label: item.label, entries});
    }
  }

  return [{label: 'Overview', entries: loose}, ...categories];
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
 * @param split Doc id prefixes. A category below a section's headings whose pages all lie
 *   under one is written to an llms.txt of its own, at the route its pages share.
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
  split = [],
  sidebars,
  entry,
  siteUrl,
  baseUrl,
}) {
  const rootUrl = `${siteUrl}${baseUrl}llms.txt`;
  const files = [];
  const groups = [];

  for (const section of sections) {
    const items = sidebars[section.sidebar];
    if (!items) {
      throw new Error(`No sidebar named ${section.sidebar}`);
    }

    // A doc reached twice — a category index also listed as a page — is printed once.
    const seen = new Set();
    const routes = [];
    const children = [];

    // `## label` over the entries that resolve, or null when none does. The routes of the
    // pages listed go to `into`, which decides where the file is written.
    const block = (label, entries, into) => {
      const lines = [];
      for (const item of entries) {
        if (item.category) {
          const child = splitFile(item.category);
          if (child) {
            children.push(child);
            into.push(...child.routes);
            lines.push(`- [${child.label}](${child.url})${child.described}\n`);
          }
          continue;
        }
        if (seen.has(item.id)) {
          continue;
        }
        seen.add(item.id);
        const doc = entry(item.id);
        if (doc) {
          into.push(doc.route);
          const name = item.owner ? `${item.owner}.${doc.title}` : doc.title;
          lines.push(`- [${name}](${doc.url})${describe(doc)}\n`);
        }
      }
      return lines.length ? `## ${label}\n\n${lines.join('')}` : null;
    };

    // A split category's own file; its heading and summary are filled in once the
    // section's own route, which it links back to, is known.
    const splitFile = (category) => {
      const own = [];
      const blocks = splitCategory(category)
        .map(({label, entries}) => block(label, entries, own))
        .filter(Boolean);
      if (!blocks.length) {
        return null;
      }
      const route = commonRoute(own);
      const doc = category.link?.type === 'doc' ? entry(category.link.id) : null;
      return {
        label: category.label,
        summary: doc?.description,
        described: describe({title: category.label, description: doc?.description}),
        url: `${siteUrl}${route}llms.txt`,
        route,
        routes: own,
        blocks,
      };
    };

    // Loose pages get a heading of their own: the spec lists files under an H2 only.
    const blocks = splitSidebar(items, split)
      .map(({label, entries}) => block(label, entries, routes))
      .filter(Boolean);

    if (!blocks.length) {
      continue;
    }

    const route = commonRoute(routes);
    const heading = `${section.group}: ${section.name}`;
    const sectionUrl = `${siteUrl}${route}llms.txt`;

    const written = [
      {
        route,
        content:
          header(heading, section.description, sectionDetails(rootUrl, children.length > 0)) +
          blocks.join('\n'),
      },
      ...children.map((child) => ({
        route: child.route,
        content:
          header(`${heading} — ${child.label}`, child.summary, splitDetails(sectionUrl, rootUrl)) +
          child.blocks.join('\n'),
      })),
    ];

    for (const file of written) {
      if (!file.route.startsWith(baseUrl) || file.route === baseUrl) {
        throw new Error(
          `Pages of ${section.sidebar} share no route below ${baseUrl}, so an llms.txt would replace the root index`,
        );
      }
      if (files.some((other) => other.route === file.route)) {
        throw new Error(`Two llms.txt files share the route ${file.route}`);
      }
      files.push(file);
    }

    let group = groups.at(-1);
    if (group?.name !== section.group) {
      group = {name: section.group, entries: []};
      groups.push(group);
    }

    const described = describe({title: section.name, description: section.description});
    group.entries.push(`- [${section.name}](${sectionUrl})${described}\n`);
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
