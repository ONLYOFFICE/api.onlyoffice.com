---
sidebar_position: 2
---

# Build a custom translator

Learn how to read selected text from a document, send it to an external translation API, and insert the result back — all from inside an ONLYOFFICE plugin panel.

**What you'll build:** A plugin that lives in a side panel, watches for text selection changes, sends the selected text to a translation service, displays the translated result, and lets the user paste or replace text in the document with one click.

## Prerequisites

- A working ONLYOFFICE plugin development environment — see [Plugin development tutorial](/docs/plugins/development-workflow/developing/for-web-editors.md).
- Basic familiarity with `config.json`, `index.html`, and the plugin JS file — see [Plugin structure](/docs/plugins/fundamentals/configuration/config-json.md).
- The official translator plugin uses the Google Translate widget. If you want to use a different provider (DeepL, Azure, LibreTranslate), you will need an API key.

## Step 1 — Scaffold the plugin

Create the plugin folder:

```
translator/
├── config.json
├── index.html
├── index_widget.html
└── scripts/
    └── translate.js
```

The translator is a **side-panel plugin** (`isInsideMode: true`, `isModal: false`) that re-fires whenever the user changes their text selection (`initOnSelectionChanged: true`). Set `initDataType` to `"text"` so the editor automatically passes the raw selected text to the `init` function.

```json
{
  "name": "Translator",
  "guid": "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F6800}",
  "version": "1.0.8",
  "variations": [
    {
      "description": "Translate the selected text into other languages with Google Translate.",
      "url": "index.html",
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": true,
      "EditorsSupport": ["word", "cell", "slide", "pdf"],
      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,
      "initDataType": "text",
      "initOnSelectionChanged": true
    }
  ]
}
```

Key settings to notice:

| Setting | Value | Why |
|---|---|---|
| `initDataType` | `"text"` | Editor passes the current selection as the `text` argument to `init()` |
| `initOnSelectionChanged` | `true` | `init` is called again every time the user changes their selection |
| `isInsideMode` | `true` | Plugin renders in the side panel rather than a floating window |
| `isModal` | `false` | Non-blocking — the user can keep editing while the panel is open |
| `EditorsSupport` | `["word", "cell", "slide", "pdf"]` | Supports all editor types including PDF |

## Step 2 — Build the panel UI

`index.html` hosts a container for the translation widget iframe and two action buttons — **Copy** and **Insert**:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Translator</title>
  </head>
  <body>
    <div id="iframe_parent" style="width:100%; height:100%;"></div>
    <script src="scripts/translate.js"></script>
  </body>
</html>
```

The actual translator loads a Google Translate widget inside `index_widget.html` via an iframe — not a direct REST API call. The widget handles language detection, translation, and display automatically without requiring an API key.

## Step 3 — Detect selection changes

In `scripts/translate.js`, implement `window.Asc.plugin.init`. Because `initOnSelectionChanged` is `true` in `config.json`, this function is called every time the selection changes. The currently selected text is passed as the `text` **parameter** to `init()`:

```js
var isInit = false;
var ifr;
var prevTxt;
var txt;

window.Asc.plugin.init = function (text) {
  // For the "word" editor, use GetSelectedText for more control
  if (window.Asc.plugin.info.editorType === "word") {
    window.Asc.plugin.executeMethod("GetSelectedText", [{ Numbering: false }], function (data) {
      prevTxt = txt;
      txt = (!data) ? "" : ProcessText(data);
      ExecPlugin();
    });
  } else {
    // For cell, slide, pdf — use the text parameter directly
    prevTxt = txt;
    txt = ProcessText(text);
    ExecPlugin();
  }
};

function ProcessText(sText) {
  return sText.replace(/\r\n/gi, "\n").replace(/\t/gi, "\n");
}
```

> **Important:** The selected text arrives as the `text` parameter of `init()`, not through `window.Asc.plugin.info.data`. For the `word` editor type, the plugin additionally calls `GetSelectedText` to get cleaner text without numbering artifacts.

## Step 4 — Load the translation widget

On first initialisation, create an iframe pointing to `index_widget.html` which embeds the Google Translate widget. Subsequent selection changes update the text inside the existing iframe via `postMessage`:

```js
function ExecPlugin() {
  if (!isInit) {
    // First time — create the iframe
    document.getElementById("iframe_parent").innerHTML = "";
    ifr = document.createElement("iframe");
    ifr.name = "google_name";
    ifr.id = "google_id";
    ifr.src = "./index_widget.html";
    ifr.style.width = "100%";
    ifr.style.height = "100%";
    ifr.setAttribute("frameBorder", "0");
    document.getElementById("iframe_parent").appendChild(ifr);
    isInit = true;

    ifr.onload = function () {
      // Set the initial text in the widget
      var element = ifr.contentDocument.getElementById("google_translate_element");
      if (element) {
        element.innerHTML = txt;
      }
      // Create Copy and Insert buttons
      createButtons();
    };
  } else if (prevTxt !== txt) {
    // Text changed — update the iframe
    ifr.contentWindow.postMessage(txt, "*");
  }
}
```

> **Swapping providers:** To use a different translation API (DeepL, Azure, LibreTranslate), replace `index_widget.html` with your own page that calls the API via `fetch()` and communicates results back via `postMessage`. The rest of the plugin code stays the same.

## Step 5 — Insert the translation back into the document

The plugin provides two buttons: **Copy** (copies to clipboard) and **Insert** (replaces selection in the document). The Insert button uses `GetVersion` and `GetSelectionType` to decide how to paste:

```js
btnReplace.onclick = function () {
  var translatedTxt = ifr.contentDocument.getElementById("google_translate_element").outerText;
  var allParasTxt = translatedTxt.split(/\n/);
  // ... parse paragraphs ...
  Asc.scope.arr = allParsedParas;

  window.Asc.plugin.executeMethod("GetVersion", [], function (version) {
    if (version === undefined) {
      // Old version — use PasteText
      window.Asc.plugin.executeMethod("PasteText", [translatedTxt]);
    } else {
      // New version — check selection type for smarter replacement
      window.Asc.plugin.executeMethod("GetSelectionType", [], function (sType) {
        switch (sType) {
          case "none":
          case "drawing":
            window.Asc.plugin.executeMethod("PasteText", [translatedTxt]);
            break;
          case "text":
            window.Asc.plugin.callCommand(function () {
              Api.ReplaceTextSmart(Asc.scope.arr);
            });
            break;
        }
      });
    }
  });
};
```

The plugin uses `PasteText` for empty or drawing selections, and `callCommand` with `Api.ReplaceTextSmart` for text selections — this preserves paragraph structure during replacement.

## Step 6 — Handle the close button

The panel's close button uses `executeCommand("close", "")`:

```js
window.Asc.plugin.button = function (id) {
  this.executeCommand("close", "");
};
```

## Step 7 — Test the plugin

1. Zip the `translator/` folder and install it via **Plugins → Plugin Manager → Upload plugin**.
2. Open any document and type a few sentences.
3. Select some text and open the **Translator** plugin from the **Plugins** tab.
4. The translation appears automatically in the side panel.
5. Change the target language from the dropdown — the panel retranslates immediately.
6. Click **Copy** to copy the translation to clipboard, or **Insert** to replace the selected text in the document.

## Going further

- Add an `onExternalMouseUp` handler (already used in the actual plugin) to relay mouse events to the iframe for proper scrollbar interaction.
- Cache recent translations to avoid redundant widget reloads when the user deselects and reselects the same text.
- Add theme support with `window.Asc.plugin.onThemeChanged` to match the editor's light/dark theme.
- Support the `pdf` editor type — the config already includes it in `EditorsSupport`.

**Resources:**

1. [Translator plugin sample](/docs/plugins/learning-resources/samples-and-examples/plugin-samples/translator.md) — reference implementation with full Google Translate widget integration.
2. [Plugin structure](/docs/plugins/fundamentals/configuration/config-json.md) — full `config.json` field reference.
3. [executeMethod ("GetSelectedText")](/docs/plugins/interacting-with-editors/document-api/Methods/GetSelectedText.md) — retrieve selection with configurable separators.
4. [executeMethod ("PasteText")](/docs/plugins/interacting-with-editors/document-api/Methods/PasteText.md) — insert text at the current cursor position.

**Key concepts:** `initDataType: "text"` · `initOnSelectionChanged` · `GetSelectedText` · `PasteText` · `ReplaceTextSmart` · `executeCommand("close", "")` · iframe widget
