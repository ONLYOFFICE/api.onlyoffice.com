---
sidebar_position: 4
---

# Frame mode

The Frame mode is a general-purpose initialization method. Using `initFrame()` leaves the mode configurable, allowing you to load any other mode at runtime using the `mode` parameter. By default, `initFrame()` runs in the [Manager mode](./manager-mode.md).

The use of `initFrame()` is ideal when the mode isn't fixed at build time: multi-tenant apps where different users get different interfaces, config-driven setups where the backend determines what gets embedded, or anywhere you need to switch modes without reinitializing the frame.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initFrame({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults. If `mode` is not specified, the frame defaults to manager mode.

## Integration

The SDK can be embedded either in an HTML file or via the npm package, depending on your application setup.

### HTML example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DocSpace initFrame() Example</title>
    <script src="https://your-docspace.com/static/scripts/sdk/2.0.0/api.js"></script>
  </head>
  <body>
    <div id="ds-frame"></div>
    <script>
      const docSpace = DocSpace.SDK.initFrame({
        frameId: "ds-frame",
        src: "https://your-docspace.com",
        width: "100%",
        height: "700px",
        mode: "room-selector",
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
import { SDK, SDKMode } from "@onlyoffice/docspace-sdk-js";

const sdk = new SDK();

const docSpace = sdk.initFrame({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  width: "100%",
  height: "700px",
  mode: SDKMode.RoomSelector,
});
```

> **Note:** The npm package renders an iframe in the browser DOM. Hence, it requires a frontend environment (built using React, Vue, etc.) and cannot be used in a Node.js backend on its own. Check out the [DocSpace-sdk npm package](https://www.npmjs.com/package/@onlyoffice/docspace-sdk-js) for more information.

<!--
## Configuration parameters

### Required

### Layout

### Display

### Navigation and UI elements

### Filtering

### Authentication and access

### Lifecycle
-->

## Events

Events are passed as an object to the `events` key in the config.

```javascript
const docSpace = DocSpace.SDK.initFrame({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onAppReady: function () {},
    onAppError: function (error) {},
  },
});
```

| Event | Description |
| ------- | ------------- |
| `onAppReady` | Fires when the SDK frame has finished initializing and is ready for interaction. |
| `onContentReady` | Fires when the content inside the frame has fully loaded. |
| `onAuthSuccess` | Fires when a user successfully authenticates. |
| `onSignOut` | Fires when the user signs out of DocSpace. |
| `onSelectCallback` | Fires when the user selects an item. Returns data about the selected item. |
| `onDownload` | Fires when a download is triggered and `downloadToEvent` is set to `true`. Returns a download link. |
| `onAppError` | Fires when an error occurs in the SDK frame. |
| `onNoAccess` | Fires when the user attempts to access a resource they do not have permission to view. |
| `onNotFound` | Fires when the requested resource cannot be found. |

## Methods

After initialization, the SDK instance can be accessed by its `frameId`:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
```

The following methods are available on a frame instance:

| Method | Description |
| -------- | ------------- |
| `getConfig()` | Returns the current configuration object for this frame. |
| `setConfig(config)` | Updates the configuration of this frame. |
| `getList()` | Returns information about all files and folders currently visible in the frame. |
| `getFiles()` | Returns information about all files in the frame. |
| `getFolders()` | Returns information about all folders in the frame. |
| `getFolderInfo()` | Returns information about the currently open folder or room. |
| `getRooms(filter)` | Returns a list of rooms matching the specified filter. |
| `getSelection()` | Returns information about items currently selected in the frame. |
| `getUserInfo()` | Returns information about the currently authenticated user, or `null` if no user is logged in. |
| `createRoom(config)` | Creates a new room. |
| `createFile(folderId, title, templateId, formId)` | Creates a new file in the specified folder. |
| `createFolder(folderId, title)` | Creates a new folder. |
| `createTag(name)` | Creates a new tag. |
| `addTagsToRoom(roomId, tags)` | Adds tags to the specified room. |
| `removeTagsFromRoom(roomId, tags)` | Removes tags from the specified room. |
| `openModal(type)` | Opens a DocSpace modal window of the specified type. |
| `setListView(type)` | Changes the file list display mode. |
| `login(email, passwordHash)` | Logs in to DocSpace using the specified credentials. |
| `logout()` | Logs out the current user. |
| `destroyFrame()` | Removes the SDK frame and inserts `destroyText` into the container element. |

```markdown
> **Note:** The methods and events may vary for `initFrame()`, depending on the `mode` passed at runtime.
```
