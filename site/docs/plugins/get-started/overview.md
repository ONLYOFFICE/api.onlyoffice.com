---
sidebar_position: -1
description: Build ONLYOFFICE plugins with HTML, CSS, and JavaScript to add panels, toolbar buttons, and third-party integrations to the document, spreadsheet, presentation, and PDF editors.
---

# Overview

ONLYOFFICE plugins are web apps built with HTML, CSS, and JavaScript that run inside the document, spreadsheet, presentation, and PDF editors. A plugin can open a panel or a window, add toolbar buttons and context menu items, or run in the background, and it reads and changes the document through the Plugin API. Plugins work in ONLYOFFICE Docs, ONLYOFFICE DocSpace, and ONLYOFFICE Desktop Editors.

If you prefer to start coding right away, go directly to the [quick start](quick-start.md) or try things out in the [interactive playground](playground.md).

## What you can build

Build sophisticated integrations that feel native to ONLYOFFICE.

**Perfect for**:

- Embedding external content ([YouTube](../samples/youtube.md), media galleries)
- Third-party integrations ([Translator](../samples/translator.md), [Zotero](../samples/zotero.md), CRM systems)
- Advanced processing ([OCR](../samples/ocr.md), image manipulation, data visualization)
- Custom workflows (form builders, approval systems, templates)

**Development profile**:

- **Skill**: Intermediate | **Tech**: HTML/CSS/JavaScript
- **Distribution**: the ONLYOFFICE Plugin Marketplace, built into the editors ([how to submit](../development-workflow/publishing/submit-to-marketplace.md)), or [private deployment](../development-workflow/publishing/private-distribution.md)

## What plugins cannot do

- Directly access the editor's internal DOM or JavaScript scope
- Access the file system on the user's machine
- Bypass the API to perform operations not exposed by the plugin SDK

This sandboxing is intentional - it keeps the editor stable and secure regardless of what the plugin does.

![Plugin architecture](/assets/images/plugins/plugin-architecture-detailed.svg#gh-light-mode-only)![Plugin architecture](/assets/images/plugins/plugin-architecture-detailed-dark.svg#gh-dark-mode-only)

## Comparing approaches

Not sure which approach fits your use case? See how plugins compare to macros and custom AI tools.

![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme.svg#gh-light-mode-only)
![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme-dark.svg#gh-dark-mode-only)

| Feature               | **Plugins**                        | **Macros**                   | **AI tools**                     |
| --------------------- | ---------------------------------- | ---------------------------- | -------------------------------- |
| **What is it?**       | HTML/CSS/JS app embedded in editor | JavaScript code in documents | Plugin + AI provider integration |
| **Installation**      | Required (marketplace or manual)   | None (embedded in docs)      | Required (like plugins)          |
| **User interface**    | ✅ Full custom UI                   | ❌ No UI                      | ✅ Full custom UI                 |
| **External APIs**     | ✅ Yes (REST, GraphQL, etc.)        | ❌ No                         | ✅ Yes (AI services required)     |
| **Offline use**       | ⚠️ Depends on features             | ✅ Fully offline              | ❌ Requires internet              |
| **Skill level**       | Intermediate                       | Beginner                     | Advanced                         |
| **Distribution**      | Marketplace, GitHub, private       | Copy-paste, templates        | Marketplace, private             |
| **Best for**          | Reusable tools, integrations       | Personal automation          | AI-powered features              |
| **Framework support** | ✅ Any (React, Vue, Angular, or plain HTML) | ❌ Plain JavaScript only      | ✅ Any (same as plugins)          |

Also available: [Macros](../../macros/get-started/overview.md) | [Custom AI tools](../../ai/get-started/overview.md)

## Troubleshooting

If a plugin does not appear, shows a blank window, or an API call fails, see [Common errors and solutions](../development-workflow/common-errors-solutions.md) for symptoms and fixes, and [Debugging plugins](../development-workflow/debugging-plugins.md) for inspecting a running plugin in DevTools.

Still stuck? Ask on the [ONLYOFFICE forum](https://forum.onlyoffice.com/) or [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice), or report a bug in [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).

## Resources

- **[API reference](../interacting-with-editors/overview/overview.md)** - Plugin methods, events, and the `window.Asc.plugin` object
- **[Plugin configuration](../configuration/configuration.md)** - Every `config.json` parameter
- **[Interactive playground](playground.md)** - Run plugin code without installing anything
- **[Plugin samples](/samples/?doctype=docs&text=plugin)** - Working plugins to copy from
- **[UI component library](https://onlyoffice.github.io/storybook/static/)** - Controls styled to match the editors
- **[Official plugins source code](https://github.com/ONLYOFFICE/sdkjs-plugins)** - Complete plugins maintained by ONLYOFFICE
- **[FAQ](../more-information/faq.md)** - Frequently asked questions
- **[Changelog](../more-information/changelog.md)** - Which version added each method and event

## Next steps

- [Plugin quick start](quick-start.md)
- [Plugin events](../interacting-with-editors/overview/asc-plugin.md#events)
- [Developing plugins](../development-workflow/developing-plugins.md)
- [Publishing guide](../development-workflow/publishing/submit-to-marketplace.md)
