---
sidebar_position: 1
---

# Manager mode

Manager mode embeds the full DocSpace interface inside your application, including rooms, folders, files, navigation, and settings. It is the most complete embedding mode and gives users an entire DocSpace window without having to leave the application.

Manager mode is the default SDK mode.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md). For a complete HTML example, see [Initialize manager](../samples/basic-samples/init-manager.md).

## Configuration, events, and methods

`initManager()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md) with the complete set of methods.

## Use cases

### Opening a specific room on load

Pass the room or folder ID via `id` to navigate directly to it when the frame loads, instead of showing the root rooms list:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-room-id",
  showMenu: false,
  withBreadCrumbs: true,
});
```

### Reacting to file clicks

Use `onFileManagerClick` to intercept file clicks and handle them in your application instead of opening them inside the frame:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onFileManagerClick: function (file) {
      console.log("File clicked:", file.title, file.id);
      // open in a custom viewer, navigate to a detail page, etc.
    },
  },
});
```

### Creating a room programmatically

Wait for `onAppReady`, then use SDK methods to create rooms or folders without any user interaction. See also: [Create room](../samples/basic-samples/create-room.md).

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onAppReady: async function () {
      const frame = DocSpace.SDK.frames["ds-frame"];
      const room = await frame.createRoom("Q1 Reports", "collaboration");
      console.log("Room created:", room.id);
    },
  },
});
```

### Getting the current selection

Read what the user has selected in the file manager and act on it. See also: [Get selection](../samples/basic-samples/get-selection.md).

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];

const selection = await frame.getSelection();
selection.forEach((item) => {
  console.log(item.title, item.id);
});
```

### Reacting when a document is opened in the editor

Use `onEditorOpen` to detect when the user opens a file in the editor — for example, to log activity or update your application state:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onEditorOpen: function (file) {
      console.log("Opened in editor:", file.title, file.id);
    },
  },
});
```

### Intercepting file downloads

Set `downloadToEvent: true` to suppress the browser's default download behavior and handle it yourself via `onDownload`:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  downloadToEvent: true,
  events: {
    onDownload: function (data) {
      console.log("Download requested:", data);
      // handle the download in your application
    },
  },
});
```
