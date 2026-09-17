/**
 * Builds llms.txt: one section per sidebar, in the order the site's navigation puts the
 * pages in, with every entry linking to that page's Markdown twin.
 *
 * The sidebars are the index rather than the route tree, because they already carry the
 * order and the category labels a reader would recognise. Office API comes last on
 * purpose: it is most of the file, and a client that truncates should keep the rest.
 */

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

/**
 * @param sections `{sidebar, name}` pairs, in the order they should appear.
 * @param entry Maps a doc id to `{title, description, url}`, or null when it has no twin.
 */
function buildLlmsTxt({title, description, sections, sidebars, entry}) {
  const seen = new Set();

  // A doc reached twice — a category index also listed as a page — is printed once.
  const list = (ids) => {
    const fresh = ids.filter((id) => !seen.has(id));
    fresh.forEach((id) => seen.add(id));

    return fresh
      .map((id) => entry(id))
      .filter(Boolean)
      .map((doc) => `- [${doc.title}](${doc.url})${describe(doc)}\n`)
      .join('');
  };

  let content = `# ${title}\n\n`;
  if (description) {
    content += `> ${description}\n\n`;
  }

  for (const section of sections) {
    const items = sidebars[section.sidebar];
    if (!items) {
      throw new Error(`No sidebar named ${section.sidebar}`);
    }

    const {loose, categories} = splitSidebar(items);
    const blocks = [list(loose)];

    for (const category of categories) {
      const entries = list(category.ids);
      if (entries) {
        blocks.push(`### ${category.label}\n\n${entries}`);
      }
    }

    const body = blocks.filter(Boolean).join('\n');
    if (body) {
      content += `## ${section.name}\n\n${body}\n`;
    }
  }

  return content;
}

module.exports = {buildLlmsTxt};
