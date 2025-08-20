---
sidebar_position: -4
---

# Config

The configuration parameters describe the behavior and display options of the DocSpace elements.

| Parameter           | Type    | Description                                                                                                                                                               | Example                           |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| buttonColor         | string  | The selector button color.                                                                                                                                                | `"#5299E0"`                       |
| checkCSP            | boolean | Specifies whether to check for the presence of CSP headers before initialization.                                                                                         | `true`                            |
| destroyText         | string  | The text inserted into the *div* tag when the [destroyFrame](./methods.md#destroyframe) method is called.                                                                 | `""`                              |
| disableActionButton | boolean | Specifies whether to disable the **Actions** button in the manager interface.                                                                                             | `false`                           |
| downloadToEvent     | boolean | Specifies whether to switch the SDK to the mode of working with download links through the [onDownload](./events.md#ondownload) event.                                    | `false`                           |
| editorCustomization | object  | Parameters to customize editors from [this section](../../../docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md).                     | `{}`                              |
| editorGoBack        | boolean | Specifies whether the **File Location** button is displayed in the editor.                                                                                                | `true`                            |
| editorType          | string  | The editor mode display type (`"embedded"`, `"desktop"`).                                                                                                                 | `"desktop"`                       |
| events              | object  | A list of DocSpace events returned on certain actions within the SDK.                                                                                                     | [events example](#events-example) |
| filter              | object  | Filter parameters for searching files in the DocSpace manager. See [filter parameters](#filter-parameters).                                                               | `{ count: 100, page: 1, ... }`    |
| filterParam         | string  | Filter parameters for selector mode (`"ALL"`, `"DOCX"`, `"IMG"`, `"GZ"`, `"DOCXF"`, `"XLSX"`, `"BackupOnly"`).                                                            | `"ALL"`                           |
| frameId             | string  | The frame SDK ID used to refer to the SDK instance.                                                                                                                       | `"ds-frame"`                      |
| height              | string  | Frame SDK height in percent.                                                                                                                                              | `"100%"`                          |
| id                  | string  | Element ID for SDK initialization.                                                                                                                                        | `null`                            |
| infoPanelVisible    | boolean | Whether to display a button for the info panel.                                                                                                                           | `true`                            |
| locale              | string  | The language of the DocSpace user interface which is specified with the four letter language code.                                                                        | `null`                            |
| mode                | string  | SDK [initialization mode](./initialization-modes/initialization-modes.md). Values: `"manager"`, `"file-selector"`, `"room-selector"`, `"editor"`, `"viewer"`, `"system"`. | `"manager"`                       |
| name                | string  | Name of the object inserted into the page.                                                                                                                                | `"frameDocSpace"`                 |
| requestToken        | string  | Token used to open public rooms/files.                                                                                                                                    | `null`                            |
| rootPath            | string  | Path to frame SDK.                                                                                                                                                        | `"/rooms/shared/"`                |
| selectorType        | string  | Selector type defining filters in selector mode. Values: `"roomsOnly"`, `"userFolderOnly"`, `"exceptPrivacyTrashArchiveFolders"`, `"exceptSortedByTagsFolders"`.          | `"roomsOnly"`                     |
| showFilter          | boolean | Whether the interface filter is displayed.                                                                                                                                | `false`                           |
| showHeader          | boolean | Whether the header is displayed in mobile view.                                                                                                                           | `false`                           |
| showMenu            | boolean | Whether the interface menu is displayed.                                                                                                                                  | `false`                           |
| showSelectorCancel  | boolean | Whether **Cancel** button is displayed in selector mode.                                                                                                                  | `false`                           |
| showSelectorHeader  | boolean | Whether header is displayed in selector mode.                                                                                                                             | `false`                           |
| showSettings        | boolean | Whether to display the **Manage displayed columns** button.                                                                                                               | `false`                           |
| showSignOut         | boolean | Whether the **Sign out** button is displayed.                                                                                                                             | `true`                            |
| showTitle           | boolean | Whether the interface title is displayed.                                                                                                                                 | `true`                            |
| src                 | string  | Base URL to the DocSpace portal.                                                                                                                                          | `{PORTAL_SRC}`                    |
| theme               | string  | UI theme (`"Base"`, `"Dark"`, `"System"`).                                                                                                                                | `"Base"`                          |
| type                | string  | Platform type (`"desktop"`, `"mobile"`).                                                                                                                                  | `"desktop"`                       |
| viewAs              | string  | Layout in the manager (`"row"`, `"table"`, `"tile"`).                                                                                                                     | `"row"`                           |
| viewTableColumns    | string  | Column names for table in manager.                                                                                                                                        | `"Name,Type,Tags"`                |
| width               | string  | Frame SDK width in percent.                                                                                                                                               | `"100%"`                          |
| withBreadCrumbs     | boolean | Whether to display breadcrumbs in selector mode.                                                                                                                          | `true`                            |
| withSearch          | boolean | Whether to display **Search** in selector mode.                                                                                                                           | `true`                            |
| withSubtitle        | boolean | Whether to display filter parameters in selector mode.                                                                                                                    | `true`                            |

## filter parameters

| Parameter             | Type    | Description                                             | Example         |
| --------------------- | ------- | ------------------------------------------------------- | --------------- |
| filter.count          | integer | Number of files to be displayed.                        | `100`           |
| filter.page           | integer | Page number.                                            | `1`             |
| filter.search         | string  | Query to search for files.                              | `""`            |
| filter.sortorder      | string  | Sort order (`"descending"`, `"ascending"`).             | `"descending"`  |
| filter.sortby         | string  | Sort parameter (`"DateAndTime"`, `"AZ"`, etc.).         | `"DateAndTime"` |
| filter.withSubfolders | boolean | Specifies whether to exclude subfolders when searching. | `false`         |

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
