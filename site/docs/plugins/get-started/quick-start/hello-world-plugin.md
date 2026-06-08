---
sidebar_position: 2
title: Hello world plugin
---
# Hello world plugin

Build the simplest possible plugin — a button that inserts "Hello World" into your document.

**Time:** 5 minutes | **Skill level:** Beginner

## Step 1: Create the plugin structure

Create a folder named `hello-world-plugin` with these files:

### `config.json` — Plugin configuration

This file tells ONLYOFFICE about your plugin:

```json
{
  "name": "Hello World",
  "guid": "asc.{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}",
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

:::tip Generate a GUID
Use your terminal to generate a unique identifier:

```bash
# macOS/Linux
uuidgen

# Windows (PowerShell)
New-Guid
```

Then format it as `asc.{YOUR-GENERATED-GUID}`.
:::

**Key fields explained:**

- `name` — Display name in the plugin menu
- `guid` — Unique identifier (must be different for each plugin)
- `url` — Entry point HTML file
- `EditorsSupport` — Which editors support this plugin (`word`/`cell`/`slide`)

### `index.html` — Plugin interface and logic

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

## Step 2: Add an icon (optional)

Create or download a 48x48 PNG icon named `icon.png` in the same folder. This will appear in the plugin menu.

## Step 3: Install the plugin

Choose your environment:

### For ONLYOFFICE Desktop Editors

1. Open ONLYOFFICE Desktop.
2. Go to **Plugins → Settings → Add Plugin**.
3. Browse to your `hello-world-plugin` folder.
4. Click **OK**.

[Detailed Desktop installation guide](../../development-workflow/installing-and-testing/desktop-editors-installation.md)

### For ONLYOFFICE Docs (on-premises)

1. Copy your plugin folder to the server plugins directory:
   - Linux: `/var/www/onlyoffice/documentserver/sdkjs-plugins/`
   - Windows: `C:\Program Files\ONLYOFFICE\DocumentServer\sdkjs-plugins\`
2. Restart the Document Server.
3. Refresh your browser.

[Detailed Docs installation guide](../../development-workflow/installing-and-testing/docs-on-premises-installation.md)

## Step 4: Test your plugin

1. Open a document in ONLYOFFICE.
2. Click **Plugins** in the toolbar.
3. Select **Hello World**.
4. Click the **Insert Hello World** button.
5. See "Hello World!" appear in your document.

## Step 5: Extend your plugin

Now that it works, try these enhancements:

### Add an input field

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

### Insert formatted content

```javascript
function insertFormattedText() {
    window.Asc.plugin.executeMethod("PasteHtml", [
        "<p style='color: blue; font-weight: bold;'>Formatted Hello World!</p>"
    ]);
}
```

### Add multiple buttons

```html
<button onclick="insertHeading()">Insert Heading</button>
<button onclick="insertList()">Insert List</button>

<script>
    function insertHeading() {
        window.Asc.plugin.executeMethod("PasteHtml", ["<h2>My Heading</h2>"]);
    }

    function insertList() {
        window.Asc.plugin.executeMethod("PasteHtml", [
            "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
        ]);
    }
</script>
```

## Next steps

**Learn more:**

- [Plugin structure and configuration](../../fundamentals/configuration/config-json.md)
- [Complete API reference](../../interacting-with-editors/overview/overview.md)
- [UI customization options](../../customization/toolbar.md)

**Explore examples:**

- [YouTube plugin](../../learning-resources/samples-and-examples/plugin-samples/youtube.md) — Embed videos
- [Translator plugin](../../learning-resources/samples-and-examples/plugin-samples/translator.md) — Multi-language support
- [More examples](/samples/?doctype=docs&text=plugin)

**Need help?**

- [Developer Forum](https://forum.onlyoffice.com/) — Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — Report bugs
- [FAQ](../../more-information/faq.md) — Frequently asked questions
