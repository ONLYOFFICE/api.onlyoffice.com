---
sidebar_position: 4
---

# Viewer mode

Viewer mode embeds a read-only document inside your application. It opens a file by ID and renders it in a non-editable state, allowing users to read and review documents without exposing editing controls. If you want users to have editing controls, use the [Editor mode](./editor-mode.md) instead.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
});
```

Only the parameters `frameId`, `src`, and `id` are required. All other parameters are optional and have sensible defaults.

## Integration

The SDK can be embedded either in an HTML file or via the npm package, depending on your application setup.

### HTML example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DocSpace initViewer() Example</title>
    <script src="https://your-docspace.com/static/scripts/sdk/2.0.0/api.js"></script>
  </head>
  <body>
    <div id="ds-frame"></div>
    <script>
      const docSpace = DocSpace.SDK.initViewer({
        frameId: "ds-frame",
        src: "https://your-docspace.com",
        id: "your-file-id",
        width: "100%",
        height: "700px",
      });
    </script>
  </body>
</html>
```

### Integrating using an npm package

To install the package, run:

```bash
npm install @onlyoffice/docspace-sdk-js
```

Then import and initialize the SDK using the desired parameters:

```javascript
import { SDK, EditorType, Theme } from "@onlyoffice/docspace-sdk-js";

const sdk = new SDK();

const docSpace = sdk.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  width: "100%",
  height: "700px",
  theme: Theme.Base,
  editorType: EditorType.Desktop,
});
```

> **Note:** The npm package renders an iframe in the browser DOM. Hence, it requires a frontend environment (built using React, Vue, etc.) and cannot be used in a Node.js backend on its own. Check out the [DocSpace-sdk npm package](https://www.npmjs.com/package/@onlyoffice/docspace-sdk-js) for more information.

## Configuration parameters

### Required

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `frameId` | string | The ID of the `div` element where the frame will be rendered. Also used to reference this SDK instance later via `DocSpace.SDK.frames[frameId]`. |
| `src` | string | The URL of your DocSpace server. |
| `id` | string | The ID of the file to open in the viewer. |

### Layout

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `width` | string | `"100%"` | Frame width. Accepts CSS values such as `"100%"` or `"1200px"`. |
| `height` | string | `"100%"` | Frame height. Accepts CSS values such as `"700px"` or `"100vh"`. |

### Display

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `theme` | `Theme` | `Theme.System` | UI theme. Accepted values: `Theme.Base`, `Theme.Dark`, `Theme.System`. |
| `locale` | string | Portal default | Language of the DocSpace UI, specified as a four-letter language code (e.g. `"en-US"`). |

### Viewer customization

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `editorType` | `EditorType` | `EditorType.Desktop` | Viewer display type. Accepted values: `EditorType.Desktop`, `EditorType.Embedded`, `EditorType.Mobile`. |
| `editorGoBack` | boolean | `true` | Displays the "Open file location" button in the viewer. |

### Authentication and access

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `requestToken` | string | Token for accessing public rooms or files without a full login session. |
| `checkCSP` | boolean | Checks for the presence of valid CSP headers before initialization. Recommended in production. |

### Lifecycle

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `destroyText` | string | Text inserted into the frame's `div` element when `destroyFrame()` is called. |
| `downloadToEvent` | boolean | Switches download operations to fire the `onDownload` event instead of triggering a direct browser download. |

## Events

Events are passed as an object to the `events` key in the config.

```javascript
const docSpace = DocSpace.SDK.initViewer({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-file-id",
  events: {
    onAppReady: function () {},
    onAppError: function (error) {},
  },
});
```

| Event | Description |
| ------- | ------------- |
| `onAppReady` | Fires when the SDK frame has finished initializing and is ready for interaction. |
| `onContentReady` | Fires when the document content inside the frame has fully loaded. |
| `onAuthSuccess` | Fires when a user successfully authenticates. |
| `onSignOut` | Fires when the user signs out of DocSpace. |
| `onDownload` | Fires when a download is triggered and `downloadToEvent` is set to `true`. Returns a download link. |
| `onAppError` | Fires when an error occurs in the SDK frame. |
| `onNoAccess` | Fires when the user attempts to access a resource they do not have permission to view. |
| `onNotFound` | Fires when the requested resource cannot be found. |

## Methods

After initialization, the SDK instance can be accessed by its `frameId`:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
```

The following methods are available on a viewer instance:

| Method | Description |
| -------- | ------------- |
| `getConfig()` | Returns the current configuration object for this frame. |
| `setConfig(config)` | Updates the configuration of this frame. |
| `getUserInfo()` | Returns information about the currently authenticated user, or `null` if no user is logged in. |
| `login(email, passwordHash, password?, session?)` | Logs in to DocSpace using the specified credentials. |
| `logout()` | Logs out the current user. |
| `destroyFrame()` | Removes the SDK frame and inserts `destroyText` into the container element. |
