---
sidebar_position: 2
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

## Configuration parameters

### Required

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `frameId` | string | The ID of the `div` element where the frame will be rendered. Also used to reference this SDK instance later via `DocSpace.SDK.frames[frameId]`. |
| `src` | string | The URL of your DocSpace server. |

### Mode

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `mode` | string | `"manager"` | The SDK initialization mode. Accepted values: `"manager"`, `"editor"`, `"viewer"`, `"room-selector"`, `"file-selector"`, `"system"`. |

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
| `viewAs` | `ManagerViewMode` | `ManagerViewMode.Row` | How files and folders are arranged. Accepted values: `ManagerViewMode.Row`, `ManagerViewMode.Table`, `ManagerViewMode.Tile`. |
| `viewTableColumns` | string | `"Index,Name,Size,Type,Tags"` | Comma-separated list of column names shown in table view. Example: `"Name,Size,Type,Modified Date,Author,Tags"`. |
| `buttonColor` | string | `"#5299E0"` | Hex color code for action buttons. Example: `"#2196f3"`. |

### Navigation and UI elements

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `id` | string | — | ID of the room, folder, or file to open on load. Required when `mode` is set to `"editor"` or `"viewer"`. |
| `showHeader` | boolean | `false` | Displays the DocSpace header bar. |
| `showMenu` | boolean | `false` | Displays the left navigation menu. |
| `showFilter` | boolean | `false` | Displays the filter panel. |
| `showSettings` | boolean | `false` | Displays the settings option in the interface. |
| `showSignOut` | boolean | `true` | Displays the sign out button. |
| `showTitle` | boolean | `true` | Displays the page title. |
| `infoPanelVisible` | boolean | `true` | Opens the info panel on load. |
| `withBreadCrumbs` | boolean | `true` | Displays breadcrumb navigation. |
| `withSearch` | boolean | `true` | Displays the search bar. |

### Filtering

| Parameter | Type | Description |
| ----------- | ------ | ------------- |
| `filter.count` | string | Number of items per page. |
| `filter.sortBy` | `FilterSortBy` | Sort field. Accepted values: `FilterSortBy.Name`, `FilterSortBy.Size`, `FilterSortBy.ModifiedDate`, `FilterSortBy.Author`, `FilterSortBy.Type`. |
| `filter.sortOrder` | `FilterSortOrder` | Sort direction. Accepted values: `FilterSortOrder.Ascending`, `FilterSortOrder.Descending`. |
| `filter.withSubfolders` | boolean | Includes items from subfolders in the listing. |
| `filter.search` | string | Pre-fills the search bar with a search term on load. |

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
| `onCloseCallback` | Fires when the selector is closed or the selection is canceled. |
| `onDownload` | Fires when a download is triggered and `downloadToEvent` is set to `true`. Returns a download link. |
| `onEditorCloseCallback` | Fires when the document editor is closed. |
| `onAppError` | Fires when an error occurs in the SDK frame. |
| `onNoAccess` | Fires when the user attempts to access a resource they do not have permission to view. |
| `onNotFound` | Fires when the requested resource cannot be found. |
| `onEditorOpen` | Fires when the document editor is opened from the context menu, modal windows, panels, or hotkeys. |
| `onFileManagerClick` | Fires when a file is clicked in the file list. |

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
| `createRoom(title, roomType, quota?, tags?, color?, cover?, indexing?, denyDownload?)` | Creates a new room. |
| `createFile(folderId, title, templateId, formId)` | Creates a new file in the specified folder. |
| `createFolder(parentFolderId, title)` | Creates a new folder. |
| `createTag(name)` | Creates a new tag. |
| `addTagsToRoom(roomId, tags)` | Adds tags to the specified room. |
| `removeTagsFromRoom(roomId, tags)` | Removes tags from the specified room. |
| `openModal(type, options)` | Opens a DocSpace modal window of the specified type. |
| `setListView(type)` | Changes the file list display mode. |
| `login(email, passwordHash, password?, session?)` | Logs in to DocSpace using the specified credentials. |
| `logout()` | Logs out the current user. |
| `destroyFrame()` | Removes the SDK frame and inserts `destroyText` into the container element. |

> **Note:** The methods and events may vary for `initFrame()`, depending on the `mode` passed at runtime.
