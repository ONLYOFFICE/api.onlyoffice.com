## What you can build {#what-you-can-build}

### Plugins — interactive tools with rich UI

Build sophisticated integrations that feel native to ONLYOFFICE.

**Perfect for:**

- Embedding external content ([YouTube](/docs/plugins/samples/youtube), media galleries)
- Third-party integrations ([Translator](/docs/plugins/samples/translator), [Zotero](/docs/plugins/samples/zotero), CRM systems)
- Advanced processing ([OCR](/docs/plugins/samples/ocr), image manipulation, data visualization)
- Custom workflows (form builders, approval systems, templates)

**Development profile:**

- **Time:** 2-7 days | **Skill:** Intermediate | **Tech:** HTML/CSS/JavaScript
- **Distribution:** [ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en) or private deployment

[Browse live examples in ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en)

### Macros — instant automation scripts

Lightweight JavaScript that runs directly in documents — no installation needed.

**Perfect for:**

- One-click formatting ([Reset text properties](/docs/macros/samples/document-editor/reset-text-properties) — quickly reset your text to default formatting)
- Batch operations ([Remove empty tables](/docs/macros/samples/document-editor/remove-empty-tables) — remove all empty tables across the entire document)
- Custom calculations ([Find weighted average](/docs/macros/samples/spreadsheet-editor/weighted-average-function) — calculate a weighted average on the selected range)
- Document cleanup ([Remove empty paragraphs](/docs/macros/samples/presentation-editor/remove-empty-paragraphs) — remove all unnecessary blank paragraphs across the entire presentation)

**Development profile:**

- **Time:** 30 mins - 2 hours | **Skill:** Beginner | **Tech:** JavaScript basics
- **Distribution:** Copy-paste code or embed in document templates

[Browse all macro examples](/samples/?doctype=docs&text=macros)

### Custom AI tools — intelligent assistants

Custom tools enhanced with AI capabilities for next-generation document workflows.

**Perfect for:**

- Writing assistance ([Check spelling](/docs/ai/samples/document-editor/check-spelling) — AI-powered spell checking)
- Smart styling ([Change text style](/docs/ai/samples/document-editor/change-text-style) — AI-powered text styling)
- Automatic shape generation ([Add shape](/docs/ai/samples/presentation-editor/add-shape-to-slide) — AI-powered presentation design)
- Data insights ([Explain formula](/docs/ai/samples/spreadsheet-editor/explain-formula) — AI-powered formula explanations)

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
- Check method syntax in the [API reference](/docs/plugins/interacting-with-editors/overview/)
- Verify editor type compatibility

### Macro issues

**Macro doesn't run:**

- Ensure macros are enabled in your ONLYOFFICE configuration (contact your administrator if the **Macros** button is missing from the **View** tab)
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
