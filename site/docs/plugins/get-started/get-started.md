---
sidebar_position: -1
---

# Getting started with plugins

ONLYOFFICE plugins are interactive tools built with HTML, CSS, and JavaScript that embed native-feeling features directly into the editors. Install them once and make them available to all users.

If you prefer to start coding right away, go directly to the [quick start](quick-start.md) or try things out in the [interactive playground](playground.md).

## What you can build

Build sophisticated integrations that feel native to ONLYOFFICE.

**Perfect for:**

- Embedding external content ([YouTube](../learning-resources/samples/youtube.md), media galleries)
- Third-party integrations ([Translator](../learning-resources/samples/translator.md), [Zotero](../learning-resources/samples/zotero.md), CRM systems)
- Advanced processing ([OCR](../learning-resources/samples/ocr.md), image manipulation, data visualization)
- Custom workflows (form builders, approval systems, templates)

**Development profile:**

- **Time:** 2-7 days | **Skill:** Intermediate | **Tech:** HTML/CSS/JavaScript
- **Distribution:** [ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en) or private deployment

[Browse live examples in ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en)

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
| **Dev time**          | 2-7 days                           | 30 mins - 2 hours            | 3-10 days                        |
| **Distribution**      | Marketplace, GitHub, private       | Copy-paste, templates        | Marketplace, private             |
| **Best for**          | Reusable tools, integrations       | Personal automation          | AI-powered features              |
| **Framework support** | ✅ React, Vue, Angular              | ❌ Vanilla JS only            | ✅ Any framework                  |

Also available: [Macros](../../macros/get-started/get-started.md) | [Custom AI tools](../../ai/get-started/get-started.md)

## Troubleshooting

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
- Check method syntax in the [API reference](../interacting-with-editors/overview/overview.md)
- Verify editor type compatibility

**Need more help?**

- [Developer Forum](https://forum.onlyoffice.com/) - Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) - Report bugs
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) - Q&A archive

## Resources

- **[Interactive playground](playground.md)** - Test code without installation
- **[UI component library](https://onlyoffice.github.io/storybook/static/)** - Pre-built components
- **[Plugin templates](https://github.com/ONLYOFFICE/sdkjs-plugins)** - Starter projects
- **[Browser DevTools](../development-workflow/debugging/for-web-editors.md)** - Debugging guide
- **[Plugin examples](/samples/?doctype=docs&text=plugin)** - Working examples
- **[API reference](../interacting-with-editors/overview/overview.md)** - Complete API documentation
- **[Plugin structure](../fundamentals/configuration/configuration.md)** - Configuration guide
- **[FAQ](../more-information/faq.md)** - Frequently asked questions
- **[Forum](https://forum.onlyoffice.com/)** - Community support
- **[GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins)** - Source code and contributions
- **[Changelog](../more-information/changelog.md)** - Latest API updates

## Next steps

- [Plugin quick start](quick-start.md)
- [Plugin tutorial](../fundamentals/getting-started/what-is-a-plugin.md)
- [Best practices](../development-workflow/developing/for-web-editors.md)
- [Publishing guide](../development-workflow/publishing/submit-to-marketplace.md)
