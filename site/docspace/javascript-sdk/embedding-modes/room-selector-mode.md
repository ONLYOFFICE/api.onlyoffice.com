---
sidebar_position: 4
---

# Room selector mode

Room selector mode integrates a room picker interface inside your application. It presents users with a list of DocSpace rooms and returns the selected room's data via a callback function. If you are looking to embed a fully functional DocSpace interface, check out the [Manager mode](./manager-mode.md) and [Frame mode](./frame-mode.md).

## Initialization

```javascript
const docSpace = DocSpace.SDK.initRoomSelector({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md). For a complete HTML example, see [Initialize room selector](../samples/basic-samples/init-room-selector.md).

## Configuration, events, and methods

`initRoomSelector()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

## Use cases

### Linking a task or record to a DocSpace room

Let users pick a room from a dialog and associate it with an item in your application. See also: [Room selector](../samples/advanced-samples/task-room-selector.md).

```javascript
const selector = DocSpace.SDK.initRoomSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  showSelectorHeader: true,
  showSelectorCancel: true,
  events: {
    onSelectCallback: function (room) {
      console.log("Selected room:", room.label, room.id);
      linkRoomToTask(currentTaskId, room.id);
      selector.destroyFrame();
    },
    onCloseCallback: function () {
      selector.destroyFrame();
    },
  },
});
```

### Filtering by room type

Show only collaboration rooms by passing `roomType` to narrow the selection:

```javascript
const docSpace = DocSpace.SDK.initRoomSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  roomType: "collaboration",
  withSearch: true,
});
```

### Embedding the selector inside a modal

Render the selector inside a dialog element and destroy the frame when the dialog closes:

```javascript
const dialog = document.getElementById("room-dialog");
dialog.showModal();

const selector = DocSpace.SDK.initRoomSelector({
  frameId: "ds-selector",
  src: "https://your-docspace.com",
  showSelectorCancel: true,
  events: {
    onSelectCallback: function (room) {
      handleRoomSelected(room);
      dialog.close();
      selector.destroyFrame();
    },
    onCloseCallback: function () {
      dialog.close();
      selector.destroyFrame();
    },
  },
});
```
