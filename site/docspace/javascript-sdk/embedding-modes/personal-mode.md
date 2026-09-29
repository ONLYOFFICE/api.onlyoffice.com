---
sidebar_position: 11
---

# Personal mode

Personal mode embeds the current user's personal space — My Documents, Favorites, Recent, and Trash — without exposing the rest of the portal's rooms.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
});
```

Only `frameId` and `src` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Configuration, events, and methods

`initPersonal()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md). It forces `mode` to Personal, forces `noLoader` to `true` (the loading spinner never shows in Personal mode, regardless of that setting), and defaults `showMenu` and `infoPanelVisible` to `true` (pass `showMenu: false`/`infoPanelVisible: false` to hide them).

[`navigateSection()`](./forms-mode.md#navigating-between-sections-at-runtime) and [`upload()`](./forms-mode.md#uploading-a-file-without-the-picker-dialog) both work in Personal mode as well as [Forms mode](./forms-mode.md). [`setCustomActions()`](./forms-mode.md#configuration-events-and-methods) is Forms-mode-only. Calling any of the three from an incompatible mode rejects the returned promise with `SDKErrorCode.ModeMismatch` — none of them throw synchronously.

Personal mode forwards a number of other config fields into the frame's URL beyond what's shown in the examples below: `id` (open a specific folder instead of the My Documents root), `disableActionButton`, `downloadToEvent`, `filter.sortBy`/`filter.sortOrder`/`filter.search`/`filter.count`/`filter.page`, and `headerOffset`/`headerHeight` (padding/height overrides for the header, also honored in [Forms](./forms-mode.md) and [Chat](./chat-mode.md) mode).

`onFileManagerClick`, `onEditorOpen`, and `onDownload` (with `downloadToEvent: true`) all fire in Personal mode, same as in Manager and Public room mode — Personal's file list reuses the same underlying component. `upload()` works the same way it does in Forms mode — resolving with `{ fileName, fileSize }` and firing `onUploadSuccess`/`onUploadError` with that same payload — see [Uploading a file without the picker dialog](./forms-mode.md#uploading-a-file-without-the-picker-dialog) for the full behavior (timeout, payload shape, error handling). See [Events and callbacks](../events-and-callbacks/events-and-callbacks.md) for the other events' payload shapes.

## Use cases

### Opening a specific section on load

Set `personalDestination` to skip the default "My Documents" landing section:

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-personal",
  src: "https://your-docspace.com",
  personalDestination: "favorites",
});
```

Available sections: `"my-documents"`, `"favorites"`, `"recent"`, `"trash"`, `"settings"`.

### Navigating between sections at runtime

Use `navigateSection()` on the returned instance instead of reinitializing the frame, and track the active section from the host page with `onNavigate`:

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-personal",
  src: "https://your-docspace.com",
  events: {
    onAppReady: function () {
      document.getElementById("trash-button").onclick = () => {
        docSpace.navigateSection("trash");
      };
    },
    onNavigate: function (data) {
      console.log("Section changed:", data.section);
    },
  },
});
```

### Opening a specific folder

Pass `id` to land on a subfolder within the user's personal space instead of the My Documents root:

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-personal",
  src: "https://your-docspace.com",
  id: "your-folder-id",
});
```

### Sorting and filtering the file list

Use the `filter` object to control how the list is sorted and searched on load:

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-personal",
  src: "https://your-docspace.com",
  filter: {
    sortBy: "DateAndTime",
    sortOrder: "descending",
    search: "report",
  },
});
```
