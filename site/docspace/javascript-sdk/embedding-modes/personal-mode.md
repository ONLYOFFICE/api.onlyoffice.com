---
sidebar_position: 11
---

# Personal mode

Personal mode embeds the current user's personal space — My Documents, Favorites, Recent, Shared with me, and Trash — without exposing the rest of the portal's rooms.

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

[`navigateSection()`](./forms-mode.md#navigating-between-sections-at-runtime) and [`upload()`](./forms-mode.md#uploading-a-file-without-the-picker-dialog) both work in Personal mode as well as [Forms mode](./forms-mode.md). [`setCustomActions()`](./manager-mode.md#adding-custom-actions) also works in Personal mode, alongside [Manager](./manager-mode.md#adding-custom-actions) and [Forms](./forms-mode.md#adding-custom-context-menu-actions) mode. Calling any of the three from an incompatible mode rejects the returned promise with `SDKErrorCode.ModeMismatch` — none of them throw synchronously.

Personal mode forwards a number of other config fields into the frame's URL beyond what's shown in the examples below: `id` (open a specific folder instead of the My Documents root), `disableActionButton`, `downloadToEvent`, `filter.sortBy`/`filter.sortOrder`/`filter.search`/`filter.count`/`filter.page`, and `headerOffset`/`headerHeight` (padding/height overrides for the header, also honored in [Forms](./forms-mode.md) and [Chat](./chat-mode.md) mode).

`onFileManagerClick`, `onEditorOpen`, and `onDownload` (with `downloadToEvent: true`) all fire in Personal mode, same as in Manager and Public room mode — Personal's file list reuses the same underlying component. `upload()` works the same way it does in Forms mode — resolving with `{ fileName, fileSize }` and firing `onUploadSuccess`/`onUploadError` with that same payload — see [Uploading a file without the picker dialog](./forms-mode.md#uploading-a-file-without-the-picker-dialog) for the full behavior (timeout, payload shape, error handling). See [Events and callbacks](../events-and-callbacks/events-and-callbacks.md) for the other events' payload shapes.

Personal mode also supports the same file/folder data and content methods as [Manager mode](./manager-mode.md) — [`getUserInfo()`](../usage-sdk/classes/SDKInstance.md#getuserinfo), [`getFiles()`](../usage-sdk/classes/SDKInstance.md#getfiles), [`getFolders()`](../usage-sdk/classes/SDKInstance.md#getfolders), [`getList()`](../usage-sdk/classes/SDKInstance.md#getlist), [`getFolderInfo()`](../usage-sdk/classes/SDKInstance.md#getfolderinfo), [`getSelection()`](../usage-sdk/classes/SDKInstance.md#getselection), [`openModal()`](../usage-sdk/classes/SDKInstance.md#openmodal), [`createFile()`](../usage-sdk/classes/SDKInstance.md#createfile), [`createFolder()`](../usage-sdk/classes/SDKInstance.md#createfolder), and [`setListView()`](../usage-sdk/classes/SDKInstance.md#setlistview). There are no rooms in Personal mode, so room-level methods (`getRooms()`, `createRoom()`, tags) aren't available. [Get selection](../samples/basic-samples/get-selection.md) and [Set list view](../samples/basic-samples/set-list-view.md) are written against `initManager()`, but neither example does anything room-specific — swap in `initPersonal()` and the rest carries over unchanged. [Create file](../samples/basic-samples/create-file.md) and [Create folder](../samples/basic-samples/create-folder.md) target a room via `rootPath`/`filter.folder`, which don't apply in Personal mode — pass the target folder's `id` directly instead (see [Opening a specific folder](#opening-a-specific-folder) above); the method calls themselves, `createFile(folderId, title)` and `createFolder(parentFolderId, title)`, are unchanged.

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

Available sections: `"my-documents"`, `"favorites"`, `"recent"`, `"shared-with-me"`, `"trash"`, `"settings"`.

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

### Adding custom actions

Works the same way as in [Manager mode](./manager-mode.md#adding-custom-actions) — file/folder context menu entries and create ("+") menu items, with the same restriction fields. Personal mode has no rooms, so `contextMenu.room` and `roomTypes` don't apply here.

```javascript
const docSpace = DocSpace.SDK.initPersonal({
  frameId: "ds-personal",
  src: "https://your-docspace.com",
  customActions: {
    contextMenu: {
      file: [{ key: "send-to-crm", label: "Send to CRM", extensions: ["docx", "pdf"] }],
    },
    createMenu: [{ key: "upload-from-crm", label: "Upload from CRM" }],
  },
  events: {
    onCustomAction: function (data) {
      console.log("Action:", data.action, "Item:", data.item);
    },
  },
});
```

See [Manager mode's reference](./manager-mode.md#adding-custom-actions) for the full payload shape and every restriction field.

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
