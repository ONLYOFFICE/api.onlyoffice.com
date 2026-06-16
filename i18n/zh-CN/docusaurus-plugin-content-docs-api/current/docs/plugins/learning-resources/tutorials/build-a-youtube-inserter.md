---
sidebar_position: 1
---

# Build a YouTube inserter

Learn how to accept a YouTube URL from the user and embed the video as a live OLE object inside an ONLYOFFICE document.

**What you'll build:** A plugin that opens a small modal dialog, accepts a YouTube video URL, validates it, embeds a live YouTube player preview inside the dialog (using the YouTube IFrame API), and calls `AddOleObject` to insert a clickable video thumbnail into the document. Double-clicking the object reopens the dialog so the user can swap the URL.

## Prerequisites

- A working ONLYOFFICE plugin development environment - see [Developing](/docs/plugins/development-workflow/developing/for-web-editors.md).
- Basic familiarity with `config.json`, `index.html`, and the plugin JS file - see [Plugin structure](/docs/plugins/configuration/configuration.md).
- A YouTube account is not required; any public video URL will work.

## Step 1 - Scaffold the plugin

Create the plugin folder with the standard files:

```
youtube/
├── config.json
├── index.html
└── scripts/
    └── youtube.js
```

The YouTube plugin uses a **modal dialog** (`type: "window"`) with an OLE data type so the editor can round-trip the stored URL whenever the embedded object is double-clicked.

```json
{
  "name": "YouTube",
  "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
  "version": "1.0.4",
  "variations": [
    {
      "description": "Easily embed YouTube videos into your documents.",
      "url": "index.html",
      "icons": ["resources/img/icon.png", "resources/img/icon@2x.png"],
      "isViewer": true,
      "isDisplayedInViewer": false,
      "EditorsSupport": ["word", "cell", "slide"],
      "isVisual": true,
      "type": "window",
      "initDataType": "ole",
      "isUpdateOleOnResize": false,
      "buttons": [
        { "text": "Ok",     "primary": true,  "isViewer": false },
        { "text": "Cancel", "primary": false, "isViewer": true  }
      ],
      "size": [350, 90]
    }
  ]
}
```

Key settings to notice:

| Setting | Value | Why |
|---|---|---|
| `initDataType` | `"ole"` | Tells the editor to pass the stored OLE data back to the plugin on re-open |
| `type` | `"window"` | Opens as a standalone window dialog |
| `isUpdateOleOnResize` | `false` | Prevents the editor from re-requesting a new thumbnail when the user resizes the embedded object |
| `isViewer` | `true` | Allows the plugin to appear in view-only mode (the Cancel button is visible; OK is hidden) |

## Step 2 - Build the dialog UI

In `index.html`, create a form with a text input for the URL, a preview button, and a container for the live YouTube player. The YouTube IFrame API script is loaded so the plugin can embed an actual video player inside the dialog:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>YouTube</title>
    <script src="https://www.youtube.com/iframe_api"></script>
  </head>
  <body>
    <label id="td_labelUrl" for="textbox_url">Paste youtube video URL</label>
    <input id="textbox_url" type="text" />
    <button id="textbox_button">Preview</button>
    <span id="input_error_id" style="display:none; color:#d9534f;">Invalid URL</span>
    <div id="id_player"></div>

    <script src="scripts/youtube.js"></script>
  </body>
</html>
```

The `size: [350, 90]` in `config.json` keeps the dialog compact initially. When the user clicks **Preview**, the plugin calls `resizeWindow` to expand the dialog and show the embedded player.

## Step 3 - Handle init and OLE round-trip

In `scripts/youtube.js`, implement `window.Asc.plugin.init`. The editor calls `init` both when a user opens the plugin fresh and when they double-click an existing OLE object. The stored OLE data (the YouTube URL) is passed as the `text` parameter - not through `info.data`:

```js
window.Asc.plugin.init = function (text) {
  var _textbox = document.getElementById("textbox_url");

  // Disable input elements in view mode
  if (this.info.isViewMode) {
    _textbox.disabled = true;
    document.getElementById("textbox_button").disabled = true;
  }

  // If re-opening an existing OLE object, text contains the stored URL
  if (text !== "") {
    _textbox.value = text;
    document.getElementById("textbox_button").onclick();
  }
  _textbox.focus();
};
```

:::note
For `initDataType: "ole"`, the stored OLE data string is passed as the `text` argument to `init()`. This is the raw string you set in the `"data"` field when calling `AddOleObject` or `EditOleObject`.
:::

## Step 4 - Extract the video ID and build a thumbnail URL

The actual plugin parses the video ID by splitting the URL on `/` and stripping the `watch?v=` prefix and `&` suffix - not with a single regex:

```js
function getVideoId(url) {
  var _ids = url.split("/");
  var _id = _ids[_ids.length - 1];

  if (_id.indexOf("watch?v=") === 0)
    _id = _id.substr(8);

  var _amp = _id.indexOf("&");
  if (_amp !== -1)
    _id = _id.substr(0, _amp);

  return _id;
}
```

The thumbnail URL uses the `0.jpg` image from YouTube's CDN:

```js
function getThumbnailUrl(videoId) {
  return "https://img.youtube.com/vi/" + videoId + "/0.jpg";
}
```

## Step 5 - Embed a live YouTube player in the dialog

When the user clicks the **Preview** button, validate the URL, resize the dialog window, and embed an actual YouTube player using the `YT.Player` API:

```js
var player = null;
var isWindowPlayer = false;

document.getElementById("textbox_button").onclick = function () {
  var _url = document.getElementById("textbox_url").value;

  if (!validateYoutubeUrl(_url)) {
    document.getElementById("textbox_url").style.borderColor = "#d9534f";
    document.getElementById("input_error_id").style.display = "block";
    return;
  }

  if (!isWindowPlayer) {
    var _table = document.getElementById("id_player");
    _table.innerHTML = '<div id="content" style="position:absolute;width:100%;height:100%;"></div>';
    isWindowPlayer = true;
    window.Asc.plugin.resizeWindow(620, 480, 390, 400, 0, 0);
  }

  if (!player) {
    player = new YT.Player("content", {
      height: "100%",
      width: "100%",
      videoId: getVideoId(_url),
      playerVars: { fs: 1 },
    });
  } else {
    player.stopVideo();
    player.loadVideoById(getVideoId(_url));
  }
};
```

This gives the user a live preview of the video before inserting it - they can play, pause, and verify it's the right video.

## Step 6 - Insert or update the OLE object

Wire up the OK button via `window.Asc.plugin.button`. Use `info.objectId` with a strict `=== undefined` check to decide between `AddOleObject` (new insert) and `EditOleObject` (update existing). The OLE dimensions are derived from `window.Asc.plugin.info`, not hardcoded:

```js
window.Asc.plugin.button = function (id) {
  // Stop any playing video
  try {
    if (player && player.stopVideo) player.stopVideo();
  } catch (err) {}

  if (id == 0 && YT) {
    var url = document.getElementById("textbox_url").value;

    if (!validateYoutubeUrl(url)) {
      document.getElementById("textbox_url").style.borderColor = "#d9534f";
      document.getElementById("input_error_id").style.display = "block";
      return;
    }

    var _id = getVideoId(url);
    var _questPos = _id.indexOf("?");
    if (_questPos > 0) _id = _id.substr(0, _questPos);

    var _url = "http://img.youtube.com/vi/" + _id + "/0.jpg";
    if (_id) {
      var _info = window.Asc.plugin.info;

      // Strict undefined check - objectId is undefined for new inserts
      var _method = (_info.objectId === undefined) ? "AddOleObject" : "EditOleObject";

      var _param = {
        guid     : _info.guid,
        widthPix : (_info.mmToPx * _info.width) >> 0,
        heightPix: (_info.mmToPx * _info.height) >> 0,
        width    : _info.width ? _info.width : 100,
        height   : _info.height ? _info.height : 70,
        imgSrc   : _url,
        data     : url,
        objectId : _info.objectId,
        resize   : _info.resize
      };

      window.Asc.plugin.executeMethod(_method, [_param], function () {
        window.Asc.plugin.executeCommand("close", "");
      });
    } else {
      this.executeCommand("close", "");
    }
  } else {
    this.executeCommand("close", "");
  }
};
```

Key details from the actual source:

- **`imgSrc`** is a property of the OLE params object passed to `AddOleObject`/`EditOleObject` - it is *not* a property of `window.Asc.plugin.info`.
- **`widthPix` / `heightPix`** are computed from `_info.mmToPx * _info.width`, not hardcoded values.
- **`resize`** is passed through from `_info.resize` to preserve the user's resize state.
- The plugin always closes via **`executeCommand("close", "")`**, not `plugin.close()`.

## Step 7 - Test the plugin

1. Zip the `youtube/` folder and install it via **Plugins → Plugin Manager → Upload plugin**.
2. Open the plugin from the **Plugins** tab.
3. Paste a YouTube URL (e.g. `https://www.youtube.com/watch?v=jHuwwVliZ5Q`) and click **Preview**.
4. The dialog expands and a live YouTube player appears - verify it's the correct video.
5. Click **OK** - a thumbnail image is inserted into the document as an embedded OLE object.
6. Double-click the object - the dialog reopens with the original URL pre-filled and the player loaded.
7. Change the URL and click **OK** again - the thumbnail updates in place.

## Going further

- Add an `onTranslate` handler to localise the "Paste youtube video URL" label using `window.Asc.plugin.tr()`.
- Support playlist URLs by detecting `list=` parameters and falling back to a generic thumbnail.
- Handle the `t=` (timestamp) parameter to start the embedded player at a specific time - the actual plugin already parses this with `getParam(url, "t")`.

**Resources:**

1. [YouTube plugin sample](/docs/plugins/learning-resources/samples/youtube.md) - reference implementation you can run immediately.
2. [Plugin structure](/docs/plugins/configuration/configuration.md) - full `config.json` field reference.
3. [executeMethod ("AddOleObject")](/docs/plugins/interacting-with-editors/document-api/Methods/AddOleObject.md) - inserts a new OLE object.
4. [executeMethod ("EditOleObject")](/docs/plugins/interacting-with-editors/document-api/Methods/EditOleObject.md) - updates an existing OLE object in place.

**Key concepts:** OLE objects · `AddOleObject` · `EditOleObject` · `initDataType: "ole"` · YouTube IFrame API · `executeCommand("close", "")`
