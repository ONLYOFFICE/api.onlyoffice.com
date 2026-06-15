---
sidebar_position: 3
---

# Build a photo editor plugin

Learn how to embed an interactive image editor inside ONLYOFFICE and write the result back to the document.

**What you'll build:** A plugin that opens a full-screen modal dialog, loads the selected image into the Toast UI Image Editor, lets the user crop, rotate, and apply filters, then replaces the original image in the document with the edited version.

## Prerequisites

- A working ONLYOFFICE plugin development environment - see [Plugin development tutorial](/docs/plugins/fundamentals/getting-started/development-environment-setup.md).
- Basic familiarity with `config.json`, `index.html`, and the plugin JS file - see [Plugin structure](/docs/plugins/fundamentals/configuration/configuration.md).

## Step 1 - Scaffold the plugin

Create the plugin folder with the standard files:

```
photoeditor/
├── config.json
├── index.html
└── scripts/
    └── photoeditor.js
```

The photo editor uses a **full-screen modal dialog** (`isModal: true`, `isInsideMode: false`) with `initDataType: "html"` so the editor passes the selected image data as HTML to the plugin on initialisation. The `size: [10000, 10000]` ensures the dialog fills the screen:

```json
{
  "name": "Photo Editor",
  "guid": "asc.{07FD8DFA-DFE0-4089-AL24-0730933CC80A}",
  "version": "1.0.2",
  "baseUrl": "",
  "variations": [
    {
      "description": "Edit images, screenshots, and photos right in your documents: crop, resize, apply effects.",
      "url": "index.html",
      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "html",
      "initData": "",
      "buttons": [
        { "text": "Ok", "primary": true },
        { "text": "Cancel", "primary": false }
      ],
      "size": [10000, 10000]
    },
    {
      "description": "About",
      "url": "index_about.html",
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png", "resources/img/icon2.png", "resources/img/icon2@2x.png"],
      "isViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],
      "isVisual": true,
      "isModal": true,
      "isInsideMode": false,
      "initDataType": "none",
      "initData": "",
      "size": [392, 147]
    }
  ]
}
```

Key settings to notice:

| Setting | Value | Why |
|---|---|---|
| `isModal` | `true` | Opens as a full-screen dialog, not a side panel |
| `isInsideMode` | `false` | The plugin renders in a separate modal window |
| `initDataType` | `"html"` | Editor passes the selected image as HTML to `init` |
| `size` | `[10000, 10000]` | Makes the dialog fill the entire screen |
| `buttons` | OK + Cancel | OK triggers saving; Cancel closes without changes |

## Step 2 - Build the editor page

In `index.html`, embed the [Toast UI Image Editor](https://ui.toast.com/tui-image-editor) (MIT-licensed). The entire editor UI lives in this single page - there are no iframes or secondary panels:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.css" />
    <script src="https://uicdn.toast.com/tui-image-editor/latest/tui-image-editor.js"></script>
  </head>
  <body>
    <div id="tui-image-editor-container"></div>
    <script src="scripts/photoeditor.js"></script>
  </body>
</html>
```

## Step 3 - Detect the selected image

In `scripts/photoeditor.js`, implement `window.Asc.plugin.init`. Use `executeMethod("GetImageDataFromSelection")` to get the selected image. This method returns an object with `src` (a base64 data URI or URL), `width`, and `height`:

```js
var oImage = null;
var imageEditor = null;

window.Asc.plugin.init = function (sHtml) {
  window.Asc.plugin.executeMethod("GetImageDataFromSelection", [], function (oResult) {
    if (oResult) {
      oImage = document.createElement("img");
      oImage.src = oResult.src;
      oImage.width = oResult.width;
      oImage.height = oResult.height;
    }
    CreateImageEditor();

    // Resize the modal to fit the image
    var imageHeight = oImage.height > 500 ? 500 : oImage.height;
    window.Asc.plugin.resizeWindow(undefined, undefined, 870, imageHeight + 300, 0, 0);
  });
};
```

`GetImageDataFromSelection` returns the image data from the first selected drawing. If no drawing is selected, it returns a white rectangle as a fallback.

## Step 4 - Initialise the image editor

Create a function that sets up the Toast UI Image Editor with the loaded image:

```js
function CreateImageEditor() {
  imageEditor = new tui.ImageEditor("#tui-image-editor-container", {
    includeUI: {
      loadImage: {
        path: oImage.src,
        name: "Image",
      },
      initMenu: "filter",
      menuBarPosition: "bottom",
      usageStatistics: false,
    },
    cssMaxWidth: 700,
    cssMaxHeight: 500,
  });
}
```

The editor provides built-in tools for cropping, rotating, applying filters (grayscale, sepia, blur, sharpen, etc.), drawing shapes, and adding text - all rendered on an HTML5 Canvas.

## Step 5 - Replace the image in the document

Wire up the OK button via `window.Asc.plugin.button`. When the user clicks OK (`id == 0`), export the edited canvas as a base64 data URL and call `PutImageDataToSelection` to replace the original image. This method accepts an object with `src`, `width`, and `height`:

```js
window.Asc.plugin.button = function (id) {
  if (id == 0) {
    // Handle active crop before saving
    if (imageEditor.getDrawingMode() === "CROPPER") {
      imageEditor.crop(imageEditor.getCropzoneRect()).then(function () {
        saveImage();
      });
    } else {
      saveImage();
    }
  } else {
    this.executeCommand("close", "");
  }
};

window.saveImage = function () {
  var imageSrc = imageEditor.toDataURL();
  var editorDimension = imageEditor.getCanvasSize();
  var imageData = {
    "src": imageSrc,
    "width": editorDimension.width,
    "height": editorDimension.height,
  };
  window.Asc.plugin.executeMethod("PutImageDataToSelection", [imageData]);
  window.Asc.plugin.executeCommand("close", "");
};
```

`PutImageDataToSelection` accepts an `ImageData` object containing a base64-encoded PNG `src` string and the image dimensions. It replaces the currently selected drawing in the document.

## Step 6 - Test the plugin

1. Package the plugin folder as a zip and install it via **Plugins → Plugin Manager → Upload plugin**.
2. Insert any image into a document.
3. Click the image to select it, then open the plugin from the **Plugins** tab.
4. The image opens in the full-screen editor. Crop, rotate, or apply a filter.
5. Click **OK** - the original image is replaced in place with the edited version.
6. Click **Cancel** to discard changes and close the dialog.

## Going further

- Add theme support with `window.Asc.plugin.onThemeChanged` to switch between light and dark editor themes.
- Add an "About" variation (the second entry in `config.json`) with plugin version and license information.
- Expose filter presets (vintage, black-and-white, sharpen) as quick-action buttons.
- Store user preferences (default crop ratio, last-used filter) in `localStorage` so they persist across sessions.

**Resources:**

1. [Photo editor plugin sample](/docs/plugins/learning-resources/samples/photo-editor.md) - reference implementation you can run immediately.
2. [Plugin structure](/docs/plugins/fundamentals/configuration/configuration.md) - full `config.json` field reference.
3. [executeMethod ("GetImageDataFromSelection")](/docs/plugins/interacting-with-editors/document-api/Methods/GetImageDataFromSelection.md) - retrieves the selected image data.
4. [executeMethod ("PutImageDataToSelection")](/docs/plugins/interacting-with-editors/document-api/Methods/PutImageDataToSelection.md) - replaces the selected image.

**Key concepts:** `GetImageDataFromSelection` · `PutImageDataToSelection` · Toast UI Image Editor · full-screen modal · `executeCommand("close", "")`
