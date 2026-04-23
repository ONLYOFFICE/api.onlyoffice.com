---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Your first plugin

Build the classic Hello World plugin — a button that inserts text into your document. This walkthrough covers every file, explains each concept, and shows you how to load the plugin into both Desktop Editors and web-based Docs.

**Time:** 15–20 minutes | **Skill level:** Beginner

## What you will build

A plugin with a single button. When clicked, it inserts "Hello World!" into the open document via the ONLYOFFICE plugin API.

## Step 1: Create the plugin folder

Create a folder named `hello-world-plugin`. Inside it, create the following structure:

```
hello-world-plugin/
├── scripts/
│   └── code.js
├── config.json
└── index.html
```

## Step 2: Write `config.json`

`config.json` registers your plugin with ONLYOFFICE. It defines the name, a unique identifier (GUID), and how the plugin window behaves.

```json
{
  "name": "Hello World",
  "guid": "asc.{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}",
  "version": "1.0.0",
  "baseUrl": "",
  "variations": [
    {
      "description": "Inserts Hello World into the document",
      "url": "index.html",
      "icons": "resources/%theme-type%(light|dark)/icon%scale%(default).%extension%(png)",
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],
      "type": "window",
      "initDataType": "none",
      "initData": "",
      "buttons": [
        { "text": "Insert", "primary": true },
        { "text": "Close" }
      ]
    }
  ]
}
```

**Generate your GUID** — every plugin must have a unique identifier:

<Tabs>
  <TabItem value="mac" label="macOS / Linux">
    ```bash
    uuidgen
    ```
  </TabItem>
  <TabItem value="win" label="Windows (PowerShell)">
    ```powershell
    New-Guid
    ```
  </TabItem>
</Tabs>

Replace `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` with the generated value, keeping the `asc.{...}` wrapper.

**Key fields:**

| Field | Purpose |
|---|---|
| `guid` | Unique plugin identifier — must be different for every plugin |
| `url` | HTML file to load as the plugin's UI |
| `EditorsSupport` | Which editors load this plugin (`word`, `cell`, `slide`) |
| `type` | Plugin display mode — `window` opens a modal dialog |
| `buttons` | Buttons shown at the bottom of the plugin window |

See [config.json explained](../configuration/config-json.md) for all available fields.

## Step 3: Write `index.html`

This is your plugin's UI. It loads the ONLYOFFICE plugin SDK and renders a button.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hello World Plugin</title>
  <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
  <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins-ui.js"></script>
  <link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
  <script type="text/javascript" src="scripts/code.js"></script>
</head>
<body>
  <div style="padding: 20px; text-align: center;">
    <p>Click Insert to add "Hello World!" to your document.</p>
  </div>
</body>
</html>
```

The `plugins.css` stylesheet makes your plugin match the ONLYOFFICE editor theme automatically.

## Step 4: Write `scripts/code.js`

This file contains the plugin logic — what happens when the editor initializes the plugin and when the user clicks a button.

```javascript
(function (window, undefined) {

  window.Asc.plugin.init = function () {
    // Called when the plugin window opens.
    // Use this to set up your UI or fetch initial data.
  };

  window.Asc.plugin.button = function (id) {
    // Called when the user clicks a button defined in config.json.
    // id 0 = first button ("Insert"), id -1 = window closed
    if (id === 0) {
      // Insert text using the ONLYOFFICE API
      Asc.scope.text = "Hello World!";

      this.callCommand(function () {
        var oDocument = Api.GetDocument();
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText(Asc.scope.text);
        oDocument.InsertContent([oParagraph]);
      }, true);
    }
  };

})(window, undefined);
```

**How it works:**

- `window.Asc.plugin.init` — fires when the plugin panel loads; use it for setup
- `window.Asc.plugin.button(id)` — fires when a `config.json` button is clicked; `id` maps to the button index
- `Asc.scope` — a shared object for passing data from your plugin scope into `callCommand`'s sandboxed function
- `this.callCommand(fn, true)` — executes `fn` in the editor's document context; the `true` argument closes the plugin after execution

## Step 5: Add icons (optional)

Create `resources/light/` and `resources/dark/` inside your plugin folder and add `icon.png` to each for light and dark editor themes:

```
hello-world-plugin/
└── resources/
    ├── light/
    │   └── icon.png
    └── dark/
        └── icon.png
```

## Step 6: Install and test

<Tabs>
  <TabItem value="desktop" label="Desktop Editors">
    1. Pack all plugin files into a `.zip` archive, then rename the extension to `.plugin` (all files must be at the archive root, not inside a subfolder).
    2. Open ONLYOFFICE Desktop Editors.
    3. Go to **Plugins → Plugin Manager → My plugins**.
    4. Click **Install plugin manually** and select your `.plugin` file.
    5. The plugin appears in the **Plugins** tab — click it to open.
  </TabItem>
  <TabItem value="web" label="Web Editors (developer mode)">
    1. Serve your plugin folder over HTTP with CORS enabled:
       ```bash
       npx http-server . -p 8080 --cors
       ```
    2. Open any ONLYOFFICE web editor and press **F12** to open DevTools.
    3. In the **Console** tab, select **frameEditor** from the context dropdown, then run:
       ```javascript
       Asc.editor.installDeveloperPlugin("http://localhost:8080/config.json")
       ```
    4. The plugin appears in the **Plugins** tab.
  </TabItem>
</Tabs>

## Extending your plugin

Once the basic version works, try these enhancements:

### Custom text input

Replace the hardcoded string with user input:

```html
<input type="text" id="textInput" placeholder="Enter text to insert">
```

```javascript
window.Asc.plugin.button = function (id) {
  if (id === 0) {
    Asc.scope.text = document.getElementById("textInput").value || "Hello World!";
    this.callCommand(function () {
      var oDocument = Api.GetDocument();
      var oParagraph = Api.CreateParagraph();
      oParagraph.AddText(Asc.scope.text);
      oDocument.InsertContent([oParagraph]);
    }, true);
  }
};
```

### Insert formatted content

Use `executeMethod` with `PasteHtml` for rich content:

```javascript
window.Asc.plugin.executeMethod("PasteHtml", [
  "<p style='color: #FF6F3D; font-weight: bold;'>Hello World!</p>"
]);
```

### React to selection changes

```javascript
window.Asc.plugin.attachEditorEvent("onSelectionChanged", function (selection) {
  if (selection && selection.text) {
    document.getElementById("preview").textContent = selection.text;
  }
});
```

## Next steps

- [Plugin lifecycle](plugin-lifecycle.md) — understand `init`, `button`, `onExternalMouseDown`, and the full event model
- [config.json explained](../configuration/config-json.md) — all configuration options
- [Interacting with editors](../../interacting-with-editors/overview/overview.md) — full API reference
- [Plugin examples](../../../samples/plugins/hello-world.md) — real-world plugins to learn from
- [Debugging guide](../../development-workflow/debugging/browser-devtools-guide.md) — attach DevTools to your plugin iframe
