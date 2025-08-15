---
sidebar_position: -4
---

# Config

The configuration parameters describe the behavior and display options of the DocSpace elements.

| Parameter            | Type              | Presence | Description |
|----------------------|-------------------|----------|-------------|
| **buttonColor**      | string            | optional | The selector button color. Example: `"#5299E0"`. |
| **checkCSP**         | boolean           | optional | Specifies whether to check for the presence of CSP headers before initialization. Example: `true`. |
| **destroyText**      | string            | optional | The text inserted into the *div* tag when the [destroyFrame](./methods.md#destroyframe) method is called. Example: `""`. |
| **disableActionButton** | boolean        | optional | Specifies whether to disable the **Actions** button in the manager interface. Example: `false`. |
| **downloadToEvent**  | boolean           | optional | Specifies whether to switch the SDK to the mode of working with download links through the [onDownload](./events.md#ondownload) event. Example: `false`. |
| **editorCustomization** | object        | optional | Parameters to customize editors from [this section](../../../docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md). Example: `{}`. |
| **editorGoBack**     | boolean           | optional | Specifies whether the **File Location** button is displayed in the editor. Example: `true`. |
| **editorType**       | string            | optional | The editor mode display type (`"embedded"`, `"desktop"`). Example: `"desktop"`. |
| **events**           | object            | optional | A list of DocSpace events returned on certain actions within the SDK. Example:[events example](#events) |
| **filter**           | object            | optional | Filter parameters for searching files in the DocSpace manager. Example: `{ count: 100, page: 1, ... }`. See [filter parameters](#filter-parameters). |
| **filterParam**      | string            | optional | Filter parameters for selector mode (`"ALL"`, `"DOCX"`, `"IMG"`, `"GZ"`, `"DOCXF"`, `"XLSX"`, `"BackupOnly"`). Example: `"ALL"`. |
| **frameId**          | string            | optional | The frame SDK ID used to refer to the SDK instance. Example: `"ds-frame"`. |
| **height**           | string            | optional | Frame SDK height in percent. Example: `"100%"`. |
| **id**               | string            | optional | Element ID for SDK initialization. Example: `null`. |
| **infoPanelVisible** | boolean           | optional | Whether to display a button for the info panel. Example: `true`. |
| **locale**           | string            | optional | The language of the DocSpace user interface which is specified with the four letter language code. Example: `null`. |
| **mode**             | string            | optional | SDK [initialization mode](./initialization-modes/initialization-modes.md). Values: `"manager"`, `"file-selector"`, `"room-selector"`, `"editor"`, `"viewer"`, `"system"`. |
| **name**             | string            | optional | Name of the object inserted into the page. Example: `"frameDocSpace"`. |
| **requestToken**     | string            | optional | Token used to open public rooms/files. Example: `null`. |
| **rootPath**         | string            | optional | Path to frame SDK. Example: `"/rooms/shared/"`. |
| **selectorType**     | string            | optional | Selector type defining filters in selector mode. Values: `"roomsOnly"`, `"roomsOnly"`, `"userFolderOnly"`, `"exceptPrivacyTrashArchiveFolders"`, `"exceptSortedByTagsFolders"`. |
| **showFilter**       | boolean           | optional | Whether the interface filter is displayed. Example: `false`. |
| **showHeader**       | boolean           | optional | Whether the header is displayed in mobile view. Example: `false`. |
| **showMenu**         | boolean           | optional | Whether the interface menu is displayed. Example: `false`. |
| **showSelectorCancel** | boolean         | optional | Whether **Cancel** button is displayed in selector mode. Example: `false`. |
| **showSelectorHeader** | boolean         | optional | Whether header is displayed in selector mode. Example: `false`. |
| **showSettings**     | boolean           | optional | Whether to display the **Manage displayed columns** button. Example: `false`. |
| **showSignOut**      | boolean           | optional | Whether the **Sign out** button is displayed. Example: `true`. |
| **showTitle**        | boolean           | optional | Whether the interface title is displayed. Example: `true`. |
| **src**              | string            | optional | Base URL to the DocSpace portal. Example: `{PORTAL\_SRC}`. |
| **theme**            | string            | optional | UI theme (`"Base"`, `"Dark"`, `"System"`). Example: `"Base"`. |
| **type**             | string            | optional | Platform type (`"desktop"`, `"mobile"`). Example: `"desktop"`. |
| **viewAs**           | string            | optional | Layout in the manager (`"row"`, `"table"`, `"tile"`). Example: `"row"`. |
| **viewTableColumns** | string            | optional | Column names for table in manager. Example: `"Name,Type,Tags"`. |
| **width**            | string            | optional | Frame SDK width in percent. Example: `"100%"`. |
| **withBreadCrumbs**  | boolean           | optional | Whether to display breadcrumbs in selector mode. Example: `true`. |
| **withSearch**       | boolean           | optional | Whether to display **Search** in selector mode. Example: `true`. |
| **withSubtitle**     | boolean           | optional | Whether to display filter parameters in selector mode. Example: `true`. |

## filter parameters

| Parameter            | Type              | Presence | Description |
|----------------------|-------------------|----------|-------------|
| **filter.count**     | integer           | optional | Number of files to be displayed. Example: `100`. |
| **filter.page**      | integer           | optional | Page number. Example: `1`. |
| **filter.search**    | string            | optional | Query to search for files. Example: `""`. |
| **filter.sortorder** | string            | optional | Sort order (`"descending"`, `"ascending"`). Example: `"descending"`. |
| **filter.sortby**    | string            | optional | Sort parameter (`"DateAndTime"`, `"AZ"`, etc.). Example: `"DateAndTime"`. |
| **filter.withSubfolders** | boolean     | optional | Specifies whether to exclude subfolders when searching. Example: `false`. |

### `events` example

``` ts
const events = {
  onSelectCallback: null,
  onCloseCallback: null,
  onAppReady: null,
  onAppError: null,
  onEditorCloseCallback: null,
  onAuthSuccess: null,
  onSignOut: null,
  onDownload: null,
}
```

## Example

``` ts
const config = {
  buttonColor: "#5299E0",
  destroyText: "",
  checkCSP: true,
  disableActionButton: false,
  downloadToEvent: false,
  editorCustomization: {},
  editorGoBack: true,
  editorType: "desktop",
  events: {
    onSelectCallback: null,
    onCloseCallback: null,
    onAppReady: null,
    onAppError: null,
    onEditorCloseCallback: null,
    onAuthSuccess: null,
    onSignOut: null,
    onDownload: null,
  },
  filter: {
    count: 100,
    page: 1,
    search: "",
    sortorder: "descending",
    sortby: "DateAndTime",
    withSubfolders: false,
  },
  filterParam: "ALL",
  frameId: "ds-frame",
  height: "100%",
  id: null,
  infoPanelVisible: true,
  locale: null,
  mode: "manager",
  name: "frameDocSpace",
  requestToken: null,
  rootPath: "/rooms/shared/",
  selectorType: "exceptPrivacyTrashArchiveFolders",
  showFilter: false,
  showHeader: false,
  showMenu: false,
  showSelectorCancel: false,
  showSelectorHeader: false,
  showSettings: false,
  showSignOut: true,
  showTitle: true,
  src: {PORTAL_SRC},
  theme: "Base",
  type: "desktop",
  viewAs: "row",
  viewTableColumns: "Name,Type,Tags",
  width: "100%",
  withBreadCrumbs: true,
  withSearch: true,
  withSubtitle: true,
}
```
