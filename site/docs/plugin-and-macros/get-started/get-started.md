
# Getting started

> **Transform your ONLYOFFICE experience** — Build plugins, automate with macros, or integrate AI. Choose your path below.


## Choose your journey

<table>
<tr>
<td width="50%">

### **I want to start coding now**
Jump straight into building with our interactive quick-starts:

- **[Quick start guides](quick-start/hello-world-macro.md)** — Complete walkthroughs
- **[Interactive playground](playground.md)** — Experiment without setup

</td>
<td width="50%">

### **I want to explore first**
Learn what's possible and find the right approach:

- **[What can you build?](#what-you-can-build)** — Real-world examples
- **[Which approach would you choose?](#which-approach-would-you-choose)** — Decision tree
- **[Detailed comparison](#detailed-comparison)** — Feature comparison table

</td>
</tr>
</table>

## <a name="what-you-can-build"></a>What you can build

Discover the three ways to extend ONLYOFFICE — each designed for different use cases:

### **Plugins** — interactive tools with rich UI

Build sophisticated integrations that feel native to ONLYOFFICE.

**Perfect for:**
- Embedding external content ([YouTube](../samples/plugin-samples/youtube.md), media galleries)
- Third-party integrations ([Translator](../samples/plugin-samples/translator.md), [Zotero](../samples/plugin-samples/zotero.md), CRM systems)
- Advanced processing ([OCR](../samples/plugin-samples/ocr.md), image manipulation, data visualization)
- Custom workflows (form builders, approval systems, templates)

**Development profile:**
- **Time:** 2-7 days | **Skill:** Intermediate | **Tech:** HTML/CSS/JavaScript
- **Distribution:** [ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en) or private deployment

**[Browse 50+ live examples in ONLYOFFICE Marketplace](https://www.onlyoffice.com/app-directory/en)**

### **Macros** — instant automation scripts

Lightweight JavaScript that runs directly in documents — no installation needed.

**Perfect for:**
- One-click formatting ([Reset text propreties](../samples/macro-samples/text-document-editor/reset-text-properties.md) — quickly reset your text to default formatting)
- Batch operations ([Remove empty tables](../samples/macro-samples/text-document-editor/remove-empty-tables.md) — remove all empty tables across the entire document)
- Custom calculations ([Find weighted average](../samples/macro-samples/spreadsheet-editor/weighted-average-function.md) — calculate a weighted average on the selected range)
- Document cleanup ([Remove empty paragraphs](../samples/macro-samples/presentation-editor/remove-empty-paragraphs.md) — remove all unnecessary blank paragraphs across the entire presentation)

**Development profile:**
- **Time:** 30 mins - 2 hours | **Skill:** Beginner | **Tech:** JavaScript basics
- **Distribution:** Copy-paste code or embed in document templates

**[Browse all macro examples](../samples/macro-samples/macro-samples.md)**

### **Custom AI tools** — intelligent assistants

Custom tools enhanced with AI capabilities for next-generation document workflows.

**Perfect for:**
- Writing assistance ([Check spelling](../samples/custom-ai-functions-samples/text-document-editor/checkSpelling.md) — AI-powered spell checking)
- Smart styling ([Change text style](../samples/custom-ai-functions-samples/text-document-editor/changeTextStyle.md) — AI-powered text styling)
- Automatic shape generation ([Add shape](../samples/custom-ai-functions-samples/presentation-editor/addShapeToSlide.md) — AI-powered presentation design)
- Data insights ([Explain formula](../samples/custom-ai-functions-samples/spreadsheet-editor/explainFormula.md) — AI-powered formula explanations)

**Development profile:**
- **Time:** 3-10 days | **Skill:** Advanced | **Tech:** Plugin API + AI provider integration
- **Requirements:** API keys for OpenAI, Claude, or custom AI services

**[Browse all AI function examples](../samples/custom-ai-functions-samples/custom-ai-functions-samples.md)**

## <a name="which-approach-would-you-choose"></a>Which approach would you choose?

Answer these questions to find your ideal path:

![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme.svg#gh-light-mode-only)
![ONLYOFFICE API Scheme](/assets/images/plugins/api-scheme-dark.svg#gh-dark-mode-only)

## <a name="detailed-comparison"></a>Detailed comparison

Choose the right tool for your project:

| Feature | **Plugins** | **Macros** | **AI plugins** |
|---------|-------------|------------|----------------|
| **What is it?** | HTML/CSS/JS app embedded in editor | JavaScript code in documents | Plugin + AI provider integration |
| **Installation** | Required (marketplace or manual) | None (embedded in docs) | Required (like plugins) |
| **User interface** | ✅ Full custom UI | ❌ No UI | ✅ Full custom UI |
| **External APIs** | ✅ Yes (REST, GraphQL, etc.) | ❌ No | ✅ Yes (AI services required) |
| **Offline use** | ⚠️ Depends on features | ✅ Fully offline | ❌ Requires internet |
| **Skill level** | Intermediate | Beginner | Advanced |
| **Dev time** | 2-7 days | 30 mins - 2 hours | 3-10 days |
| **Distribution** | Marketplace, GitHub, private | Copy-paste, templates | Marketplace, private |
| **Best for** | Reusable tools, integrations | Personal automation | AI-powered features |
| **Framework support** | ✅ React, Vue, Angular | ❌ Vanilla JS only | ✅ Any framework |

## <a name="common-questions"></a>Common questions

<details>
<summary><strong>Can plugins access files outside ONLYOFFICE?</strong></summary>

No. Plugins run in a sandboxed browser environment and can only:
- Access the current document content
- Make HTTP requests to external APIs (if configured)
- Store data in browser localStorage

They **cannot** access your local filesystem or other applications.
</details>

<details>
<summary><strong>Do I need a server to run plugins?</strong></summary>

**For development:** No, you can develop plugins entirely client-side using local files.

**For production:** Depends on your plugin:
- **Client-only plugins** (no external APIs) → No server needed
- **API integrations** → You'll need a backend or use serverless functions
- **AI features** → Requires API endpoints (your server or third-party services)
</details>

<details>
<summary><strong>Can I monetize my plugins?</strong></summary>

Yes! You have several options:
- Sell licenses through your own website
- Offer freemium models (basic free, premium paid)
- Provide paid support and customization
- The ONLYOFFICE Marketplace currently hosts free plugins, but you can distribute paid plugins independently
</details>

<details>
<summary><strong>Can I use React, Vue, or Angular?</strong></summary>

Absolutely! You can use any frontend framework. Just ensure:
- Final output is standard HTML/CSS/JS
- Bundle size is reasonable (< 5MB recommended)
- The plugin loads in an iframe environment

Many developers use Vite or Webpack to bundle framework-based plugins.
</details>

<details>
<summary><strong>How do I debug plugins?</strong></summary>

Use browser DevTools:
1. Right-click on your plugin UI
2. Select "Inspect Element"
3. Use Console, Network, and Sources tabs as you would for any web app

[Detailed debugging guide](../tutorials/developing/for-web-editors.md)
</details>

<details>
<summary><strong>What are the limitations I should know about?</strong></summary>

Key constraints to consider:
- Plugin packages must be < 50MB (use CDN for large libraries)
- Some browser APIs are blocked in iframe (use plugin API alternatives)
- Heavy operations can slow the editor (use Web Workers)
- CORS restrictions apply for external APIs
- External APIs won't work offline (implement fallbacks)
- Not all features work in all editors (check `EditorsSupport` in config)
</details>

**[View all FAQs](../more-information/faq.md)**

## <a name="troubleshooting"></a>Troubleshooting

### Plugin issues

| Problem | Solution |
|---------|----------|
| **Plugin doesn't appear** | • Check `config.json` has unique GUID<br/>• Verify file paths are correct<br/>• Restart ONLYOFFICE |
| **JavaScript errors** | • Open browser DevTools (F12)<br/>• Check Console for error messages<br/>• Verify plugin.js is loaded |
| **API methods fail** | • Ensure ONLYOFFICE version supports the method<br/>• Check method syntax in [API reference](../interacting-with-editors/overview/overview.md)<br/>• Verify editor type compatibility |

### Macro issues

| Problem | Solution |
|---------|----------|
| **Macro doesn't run** | • Check macros are enabled in Tools → Settings<br/>• Look for syntax errors in macro editor<br/>• Verify API method names are correct |
| **Unexpected results** | • Add `console.log()` for debugging<br/>• Test each step individually<br/>• Check document state before running |

**Need more help?**
- [Developer Forum](https://forum.onlyoffice.com/) — Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — Report bugs
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) — Q&A archive


## <a name="resources"></a>Resources

### Development tools

- **[Interactive playground](playground.md)** — Test code without installation
- **[UI component library](https://onlyoffice.github.io/storybook/static/)** — Pre-built components
- **[Plugin templates](https://github.com/ONLYOFFICE/sdkjs-plugins)** — Starter projects
- **[Browser DevTools](../tutorials/debugging/for-web-editors.md)** — Your best debugging friend

### Sample code

- **[Plugin examples](../samples/plugin-samples/plugin-samples.md)** — 50+ working examples
- **[Macro examples](../samples/macro-samples/macro-samples.md)** — Common automation scripts
- **[AI function examples](../samples/custom-ai-functions-samples/custom-ai-functions-samples.md)** — AI integration patterns

### Documentation

- **[API reference](../interacting-with-editors/overview/overview.md)** — Complete API documentation
- **[Plugin structure](../structure/configuration/configuration.md)** — Configuration guide
- **[Macro guide](../macros/writing-macros.md)** — Macro development
- **[AI integration](../ai/ai-plugin.md)** — AI plugin setup

### Community

- **[Forum](https://forum.onlyoffice.com/)** — Ask questions, share projects
- **[GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins)** — Source code, issues, contributions
- **[Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice)** — Technical Q&A
- **[Changelog](../more-information/changelog.md/)** — Latest API updates


## <a name="next-steps"></a>Next steps

<table>
<tr>
<td width="33%" align="center">

### Start building

**Ready to code?**

[**Quick start guides**](quick-start/hello-world-macro.md)

[**Plugin tutorial**](../structure/getting-started.md)

[**Macro tutorial**](../macros/getting-started.md)

[**AI integration**](../ai/ai-plugin.md)

</td>
<td width="33%" align="center">

### Experiment

**Want to try first?**

[**Open playground**](playground.md)

[**Browse examples**](https://github.com/ONLYOFFICE/sdkjs-plugins)

[**Watch tutorials**](https://www.youtube.com/onlyoffice)

</td>
<td width="33%" align="center">

### Learn more

**Need deeper knowledge?**

[**API reference**](../interacting-with-editors/overview/overview.md)

[**Best practices**](../tutorials/developing/for-web-editors.md)

[**Publishing guide**](../tutorials/publishing.md)

</td>
</tr>
</table>


<p align="center">
<em><strong>Pro tip:</strong> Start with our <a href="quick-start-guides.md">quick start guides</a>, then explore the playground to see what's possible!</em>
</p>

<p align="center">
<em>Questions or feedback? Use the thumbs up/down buttons below or <a href="https://forum.onlyoffice.com/">join our forum</a>.</em>
</p>