---
sidebar_position: 2
title: Hello world plugin
---
# Hello world plugin

> **Get hands-on in minutes** — Follow these complete walkthroughs to build your first ONLYOFFICE plugin.

Build the simplest possible plugin — a button that inserts "Hello World" into your document.

**Time:** 5 minutes | **Skill level:** Beginner

### Step 1: Create the plugin structure

Create a folder named `hello-world-plugin` with these files:

#### `config.json` — Plugin configuration

This file tells ONLYOFFICE about your plugin:

```json
{
  "name": "Hello World",
  "guid": "asc.{0000-0000-0000-0001}",
  "version": "1.0.0",
  "variations": [
    {
      "url": "index.html",
      "icons": ["icon.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"]
    }
  ]
}
```

**Key fields explained:**
- `name` — Display name in the plugin menu
- `guid` — Unique identifier (change this for your plugin!)
- `url` — Entry point HTML file
- `EditorsSupport` — Which editors support this plugin (word/cell/slide)

#### `index.html` — Plugin interface and logic

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World Plugin</title>
    <script src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            text-align: center;
        }
        button {
            background: #FF6F3D;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background: #E55A2B;
        }
    </style>
</head>
<body>
    <h2>Hello World Plugin</h2>
    <button onclick="insertText()">Insert Hello World</button>
    
    <script>
        function insertText() {
            window.Asc.plugin.executeMethod("PasteText", ["Hello World!"]);
        }
    </script>
</body>
</html>
```

### Step 2: Add an icon (optional)

Create or download a 48x48 PNG icon named `icon.png` in the same folder. This will appear in the plugin menu.

### Step 3: Install the plugin

Choose your environment:

#### For ONLYOFFICE Desktop Editors

1. Open ONLYOFFICE Desktop
2. Go to **Plugins → Settings → Add Plugin**
3. Browse to your `hello-world-plugin` folder
4. Click **OK**

**[Detailed Desktop installation guide](../../tutorials/installing/onlyoffice-desktop-editors/)**

#### For ONLYOFFICE Docs (on-premises)

1. Copy your plugin folder to the server plugins directory:
   - Linux: `/var/www/onlyoffice/documentserver/sdkjs-plugins/`
   - Windows: `C:\Program Files\ONLYOFFICE\DocumentServer\sdkjs-plugins\`
2. Restart the Document Server
3. Refresh your browser

**[Detailed Docs installation guide](../../tutorials/installing/onlyoffice-docs-on-premises/)**

### Step 4: Test your plugin

1. Open a document in ONLYOFFICE
2. Click **Plugins** in the toolbar
3. Select **Hello World**
4. Click the **Insert Hello World** button
5. See "Hello World!" appear in your document!

### Step 5: Extend your plugin

Now that it works, try these enhancements:

#### Add an input field

```html
<input type="text" id="customText" placeholder="Enter your text">
<button onclick="insertCustomText()">Insert Custom Text</button>

<script>
    function insertCustomText() {
        const text = document.getElementById('customText').value;
        window.Asc.plugin.executeMethod("PasteText", [text]);
    }
</script>
```

#### Insert formatted content

```javascript
function insertFormattedText() {
    window.Asc.plugin.executeMethod("PasteHtml", [
        "<p style='color: blue; font-weight: bold;'>Formatted Hello World!</p>"
    ]);
}
```

#### Add multiple buttons

```html
<button onclick="insertHeading()">Insert Heading</button>
<button onclick="insertList()">Insert List</button>

<script>
    function insertHeading() {
        window.Asc.plugin.executeMethod("PasteText", ["# My Heading\n"]);
    }
    
    function insertList() {
        window.Asc.plugin.executeMethod("PasteText", [
            "- Item 1\n- Item 2\n- Item 3\n"
        ]);
    }
</script>
```

### Next steps for plugin development

**Learn more:**
- [Plugin structure and configuration](../../structure/configuration/configuration.md)
- [Complete API reference](../../interacting-with-editors/overview/overview.md)
- [UI customization options](../../customization/toolbar.md)

**Explore examples:**
- [YouTube plugin](../../samples/plugin-samples/youtube.md) — Embed videos
- [Translator plugin](../../samples/plugin-samples/translator.md) — Multi-language support
- [50+ more examples](../../samples/plugin-samples/plugin-samples.md)

After completing these quick starts, you're ready to:

<table>
<tr>
<td width="33%" align="center">

### Learn more

Deepen your knowledge:

[**API reference**](../../interacting-with-editors/overview/overview.md)

[**Plugin structure**](../../structure/configuration/configuration.md)

[**Best practices**](../../tutorials/developing/for-web-editors/)

</td>
<td width="33%" align="center">

### Experiment

Try the interactive tools:

[**Playground**](../playground/)

[**Browse examples**](../../samples/plugin-samples/plugin-samples.md)

[**UI components**](https://onlyoffice.github.io/storybook/static/)

</td>
<td width="33%" align="center">

### Build

Start your project:

[**Plugin tutorial**](../../structure/getting-started.md)

[**Macro guide**](../../macros/getting-started.md)

[**AI integration**](../../ai/ai-plugin.md)

</td>
</tr>
</table>

## Need help?

- [Developer Forum](https://forum.onlyoffice.com/) — Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — Report bugs
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) — Q&A archive
- [Documentation](../../more-information/faq/) — FAQs and guides
