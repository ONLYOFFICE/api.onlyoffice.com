# Getting started

ONLYOFFICE supports three ways to extend editor functionality: **plugins**, **macros**, and **custom AI tools**. This page helps you choose the right approach and get started.

If you prefer to start coding right away, go directly to the [quick start guides](quick-start/hello-world-macro.md) or try things out in the [interactive playground](playground.md).

## What you can build {#what-you-can-build}

### Plugins — interactive tools with rich UI

Build sophisticated integrations that feel native to ONLYOFFICE.

**Perfect for:**

- Embedding external content ([YouTube](../../plugins/samples/youtube.md), media galleries)
- Third-party integrations ([Translator](../../plugins/samples/translator.md), [Zotero](../../plugins/samples/zotero.md), CRM systems)
- Advanced processing ([OCR](../../plugins/samples/ocr.md), image manipulation, data visualization)
- Custom workflows (form builders, approval systems, templates)

**Development profile:**

- **Time:** 2-7 days | **Skill:** Intermediate | **Tech:** HTML/CSS/JavaScript
- **Distribution:** [ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en) or private deployment

[Browse live examples in ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en)

### Macros — instant automation scripts

Lightweight JavaScript that runs directly in documents — no installation needed.

**Perfect for:**

- One-click formatting ([Reset text properties](../samples/document-editor/reset-text-properties.md) — quickly reset your text to default formatting)
- Batch operations ([Remove empty tables](../samples/document-editor/remove-empty-tables.md) — remove all empty tables across the entire document)
- Custom calculations ([Find weighted average](../samples/spreadsheet-editor/weighted-average-function.md) — calculate a weighted average on the selected range)
- Document cleanup ([Remove empty paragraphs](../samples/presentation-editor/remove-empty-paragraphs.md) — remove all unnecessary blank paragraphs across the entire presentation)

**Development profile:**

- **Time:** 30 mins - 2 hours | **Skill:** Beginner | **Tech:** JavaScript basics
- **Distribution:** Copy-paste code or embed in document templates

[Browse all macro examples](/samples/?doctype=docs&text=macros)

### Custom AI tools — intelligent assistants

Custom tools enhanced with AI capabilities for next-generation document workflows.

**Perfect for:**

- Writing assistance ([Check spelling](../../ai/samples/document-editor/check-spelling.md) — AI-powered spell checking)
- Smart styling ([Change text style](../../ai/samples/document-editor/change-text-style.md) — AI-powered text styling)
- Automatic shape generation ([Add shape](../../ai/samples/presentation-editor/add-shape-to-slide.md) — AI-powered presentation design)
- Data insights ([Explain formula](../../ai/samples/spreadsheet-editor/explain-formula.md) — AI-powered formula explanations)

**Development profile:**

- **Time:** 3-10 days | **Skill:** Advanced | **Tech:** Plugin API + AI provider integration
- **Requirements:** API keys for OpenAI, Claude, or custom AI services

[Browse all AI function examples](/samples/?doctype=ai&text=ai+tools)

## Which approach would you choose? {#which-approach-would-you-choose}

Answer these questions to find your ideal path:

![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme.svg#gh-light-mode-only)
![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme-dark.svg#gh-dark-mode-only)

## Detailed comparison {#detailed-comparison}

| Feature               | **Plugins**                        | **Macros**                   | **AI plugins**                   |
| --------------------- | ---------------------------------- | ---------------------------- | -------------------------------- |
| **What is it?**       | HTML/CSS/JS app embedded in editor | JavaScript code in documents | Plugin + AI provider integration |
| **Installation**      | Required (marketplace or manual)   | None (embedded in docs)      | Required (like plugins)          |
| **User interface**    | ✅ Full custom UI                   | ❌ No UI                      | ✅ Full custom UI                 |
| **External APIs**     | ✅ Yes (REST, GraphQL, etc.)        | ❌ No                         | ✅ Yes (AI services required)     |
| **Offline use**       | ⚠️ Depends on features             | ✅ Fully offline              | ❌ Requires internet              |
| **Skill level**       | Intermediate                       | Beginner                     | Advanced                         |
| **Dev time**          | 2-7 days                           | 30 mins - 2 hours            | 3-10 days                        |
| **Distribution**      | Marketplace, GitHub, private       | Copy-paste, templates        | Marketplace, private             |
| **Best for**          | Reusable tools, integrations       | Personal automation          | AI-powered features              |
| **Framework support** | ✅ React, Vue, Angular              | ❌ Vanilla JS only            | ✅ Any framework                  |

## Troubleshooting {#troubleshooting}

### Plugin issues

**Plugin doesn't appear:**

- Check `config.json` has a unique GUID
- Verify file paths are correct
- Restart ONLYOFFICE

**JavaScript errors:**

- Open browser DevTools (F12)
- Check the Console tab for error messages
- Verify `plugin.js` is loaded

**API methods fail:**

- Ensure your ONLYOFFICE version supports the method
- Check method syntax in the [API reference](../../plugins/interacting-with-editors/overview/overview.md)
- Verify editor type compatibility

### Macro issues

**Macro doesn't run:**

- Check macros are enabled in **Tools → Settings**
- Look for syntax errors in the macro editor
- Verify API method names are correct

**Unexpected results:**

- Add `console.log()` statements for debugging
- Test each step individually
- Check document state before running

**Need more help?**

- [Developer Forum](https://forum.onlyoffice.com/) — Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — Report bugs
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) — Q&A archive

## Resources {#resources}

### Development tools

- **[Interactive playground](playground.md)** — Test code without installation
- **[UI component library](https://onlyoffice.github.io/storybook/static/)** — Pre-built components
- **[Plugin templates](https://github.com/ONLYOFFICE/sdkjs-plugins)** — Starter projects
- **[Browser DevTools](../../plugins/development-workflow/debugging/browser-devtools-guide.md)** — Debugging guide

### Sample code

- **[Plugin examples](/samples/?doctype=docs&text=plugin)** — Working examples
- **[Macro examples](/samples/?doctype=docs&text=macros)** — Common automation scripts
- **[AI function examples](/samples/?doctype=ai&text=ai+tools)** — AI integration patterns

### Documentation

- **[API reference](../../plugins/interacting-with-editors/overview/overview.md)** — Complete API documentation
- **[Plugin structure](../../plugins/fundamentals/configuration/config-json.md)** — Configuration guide
- **[Macro guide](../macros/writing-macros.md)** — Macro development
- **[AI integration](../../ai/ai/ai-plugin.md)** — AI plugin setup
- **[FAQ](../more-information/faq.md)** — Frequently asked questions

### Community

- **[Forum](https://forum.onlyoffice.com/)** — Ask questions, share projects
- **[GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins)** — Source code, issues, contributions
- **[Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice)** — Technical Q&A
- **[Changelog](../more-information/changelog.md)** — Latest API updates

## Next steps {#next-steps}

**Start building:**

- [Quick start guides](quick-start/hello-world-macro.md)
- [Plugin tutorial](../../plugins/fundamentals/getting-started/what-is-a-plugin.md)
- [Macro tutorial](../macros/getting-started.md)
- [AI integration](../../ai/ai/ai-plugin.md)

**Experiment:**

- [Open playground](playground.md)
- [Browse examples](https://github.com/ONLYOFFICE/sdkjs-plugins)

**Learn more:**

- [API reference](../../plugins/interacting-with-editors/overview/overview.md)
- [Best practices](../../plugins/development-workflow/developing/for-web-editors.md)
- [Publishing guide](../../plugins/development-workflow/publishing/marketplace-submission.md)
