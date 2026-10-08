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

Only the parameters `frameId` and `src` are required. All other parameters are optional and have sensible defaults — with one exception worth calling out: the left navigation menu (`showMenu`) defaults to **hidden**. A plain `initManager()` call like the one above shows the room/file list without a sidebar; pass `showMenu: true` if you want it, along with the "Sign out" and "Actions" controls that live inside it — see [Hiding UI elements and frame layout](../customization/ui-elements.md#manager-mode) for which other chrome elements default on vs. off.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md). For a complete HTML example, see [Initialize manager](../samples/basic-samples/init-manager.md).

## Configuration, events, and methods

`initManager()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md) with the complete set of methods.

Manager mode also exposes the session methods usually associated with [System mode](./system-mode.md) — [`login()`](../usage-sdk/classes/SDKInstance.md#login), [`logout()`](../usage-sdk/classes/SDKInstance.md#logout), [`createHash()`](../usage-sdk/classes/SDKInstance.md#createhash), and [`getHashSettings()`](../usage-sdk/classes/SDKInstance.md#gethashsettings) — useful for switching accounts without tearing down and reinitializing the frame. See [System mode's own example](./system-mode.md#switching-users) for the usual `getHashSettings()` → `createHash()` → `login()` sequence; `login()`/`logout()` still reject with `SDKErrorCode.ModeMismatch` in [OAuth mode](../get-started/authentication-security.md#oauth-authentication), same as everywhere else.

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

Wait for `onAppReady`, then call `createRoom()` on the returned instance without any user interaction. See also: [Create room](../samples/basic-samples/create-room.md).

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  events: {
    onAppReady: async function () {
      const frame = DocSpace.SDK.frames["ds-frame"];
      const room = await frame.createRoom("Q1 Reports", 2); // 2 = Collaboration room
      console.log("Room created:", room.id);
    },
  },
});
```

:::note
`roomType: 1` (Form filling room) behaves differently from the other room types — it doesn't show up under the portal's regular Rooms section (or inside a Manager frame scoped to Rooms), only under the portal's separate Forms section. If you're creating a room the embedded Manager frame should list, use one of the other room types (`2` for Collaboration, for example).
:::

`createRoom()` also accepts an optional third argument for room settings — storage quota, tags, accent color, cover image, and (for a virtual data room) file indexing and download restrictions:

```javascript
const room = await frame.createRoom("Confidential Project", 8, {
  quota: 1073741824, // 1 GB, in bytes
  tags: ["confidential"],
  indexing: true,
  denyDownload: true,
});
```

See [`createRoom()`](../usage-sdk/classes/SDKInstance.md#createroom) for the full `options` reference.

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

### Handling an inaccessible or missing room

Display a fallback UI when the target room or folder can't be accessed or no longer exists:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  id: "your-room-id",
  events: {
    onNoAccess: function () {
      document.getElementById("ds-frame").innerHTML =
        "You do not have permission to access this room.";
    },
    onNotFound: function () {
      document.getElementById("ds-frame").innerHTML =
        "This room no longer exists.";
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

### Filtering, sorting, and pinning the room list

Pass `filter` in the config to control pagination, sorting, and search of the initial room/file list:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  filter: {
    count: "50",
    sortBy: "AZ",
    sortOrder: "ascending",
  },
});
```

`groupId` goes further: combined with `rootPath: "/rooms/shared/"`, it restricts the Rooms list to a single room group (for example, the rooms attached to one CRM deal) and pins it — search and filters inside the frame stay within the group, and the group-switching chips are hidden. It also narrows [`getRooms()`](../usage-sdk/classes/SDKInstance.md#getrooms) the same way:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  rootPath: "/rooms/shared/",
  filter: { groupId: "your-room-group-id" }, // GET /api/2.0/files/group for the id
});
```

`groupId` requires DocSpace client 4.0 or later.

### Adding custom actions

Extend Manager mode's file, folder, and room context menus, and its create ("+") menu, with your own entries. Set `customActions` in the config to show them from the first render, or call `setCustomActions()` on a running instance to replace them later — either way, clicks fire `onCustomAction`:

```javascript
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  showFilter: true, // the create menu lives in the filter toolbar's "New" button on desktop
  customActions: {
    contextMenu: {
      file: [
        { key: "send-to-crm", label: "Send to CRM", extensions: ["docx", "pdf"] },
      ],
      folder: [
        { key: "share-folder", label: "Share folder" },
      ],
      room: [
        { key: "unlink-deal", label: "Unlink from deal", roomTypes: [2], requireSecurity: ["EditRoom"] },
      ],
    },
    createMenu: [
      { key: "upload-from-crm", label: "Upload from CRM", section: ["my-documents"] },
    ],
  },
  events: {
    onCustomAction: function (data) {
      console.log("Action:", data.action, "Type:", data.type, "Item:", data.item, "Folder:", data.folderId);
    },
  },
});
```

`contextMenu.room` actions are Manager-only — Personal and Forms mode have no rooms concept. The create menu (`createMenu`) is the filter toolbar's "New" button on desktop (needs `showFilter: true`) and the floating create button on mobile devices; it's also available in [Personal mode](./personal-mode.md#adding-custom-actions), but not on Manager's default Rooms list — there, the "+" button always means "create a room," not a customizable menu.

Each action can be restricted, and every condition set must hold for it to show:

- `section` — one or more sections it shows in: `"rooms"`, `"archive"`, `"my-documents"`, `"recent"`, `"favorites"`, `"shared"`, or `"trash"` in Manager mode; omit it to show the action in every section.
- `extensions` — file extensions it shows for (file actions only), with or without the leading dot, case-insensitive.
- `roomTypes` — numeric room types it shows for (room actions only) — see [Creating a room programmatically](#creating-a-room-programmatically) above for the value mapping.
- `requireSecurity` — access flags the clicked item's `security` object must all have, e.g. `["Download"]` or `["EditRoom"]`.

`onCustomAction`'s payload: `{ action, type, item?, items?, folderId? }` — `action` is the `key` you registered; `type` is `"file"`, `"folder"`, `"room"`, or `"create"`. For a single clicked entity, both `item` and `items` (a one-element array) are set; for a same-type multi-selection, only `items` is set; for `create`, neither is set. `folderId` is the id of the folder or room the user was in.

`setCustomActions()` replaces the whole configuration rather than merging into it, so pass every group you want to keep:

```javascript
const frame = DocSpace.SDK.frames["ds-frame"];
await frame.setCustomActions({
  contextMenu: { file: [{ key: "export", label: "Export" }] },
});
```

`setCustomActions()` also works in [Personal](./personal-mode.md#adding-custom-actions) and [Forms](./forms-mode.md#adding-custom-context-menu-actions) mode. Calling it from any other mode rejects the returned promise with `SDKErrorCode.ModeMismatch` — see [Method-call errors](../events-and-callbacks/events-and-callbacks.md#method-call-errors).
