---
sidebar_position: -4
---

# Config

The configuration parameters describe the behavior and display options of the DocSpace elements.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter             | Type    | Description                                                                                                                                                                   | Example                                                                                                                                                                                      |
|-----------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| buttonColor           | string  | The selector button color.                                                                                                                                                    | `"#5299E0"`                                                                                                                                                                                  |
| checkCSP              | boolean | Specifies whether to check for the presence of CSP headers before initialization.                                                                                             | `true`                                                                                                                                                                                       |
| destroyText           | string  | The text inserted into the *div* tag when the [destroyFrame](./methods.md#destroyframe) method is called.                                                                     | `""`                                                                                                                                                                                         |
| disableActionButton   | boolean | Specifies whether to disable the **Actions** button in the manager interface.                                                                                                 | `false`                                                                                                                                                                                      |
| downloadToEvent       | boolean | Specifies whether to switch the SDK to the mode of working with download links through the [onDownload](./events.md#ondownload) event.                                        | `false`                                                                                                                                                                                      |
| editorCustomization   | object  | The parameters to customize editors from [this section](../../../docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md).                     | `{}`                                                                                                                                                                                         |
| editorGoBack          | boolean | Specifies whether the **File Location** button is displayed in the editor.                                                                                                    | `true`                                                                                                                                                                                       |
| editorType            | string  | The editor mode display type (`"embedded"`, `"desktop"`).                                                                                                                     | `"desktop"`                                                                                                                                                                                  |
| events                | object  | A list of DocSpace events returned on certain actions within the SDK.                                                                                                         | `const events = { onSelectCallback: null, onCloseCallback: null, onAppReady: null, onAppError: null, onEditorCloseCallback: null, onAuthSuccess: null, onSignOut: null, onDownload: null, }` |
| filter                | object  | The filter parameters for searching files in the DocSpace manager.                                                                                                            | `{ count: 100, page: 1, search: "", sortorder: "descending", sortby: "DateAndTime", withSubfolders: false, }`                                                                                |
| filter.count          | integer | A number of files to be displayed.                                                                                                                                            | `100`                                                                                                                                                                                        |
| filter.page           | integer | A page number.                                                                                                                                                                | `1`                                                                                                                                                                                          |
| filter.search         | string  | A query to search for files.                                                                                                                                                  | `""`                                                                                                                                                                                         |
| filter.sortorder      | string  | The sort order of files (`"descending"`, `"ascending"`).                                                                                                                      | `"descending"`                                                                                                                                                                               |
| filter.sortby         | string  | The sort parameter (`"DateAndTime"`, `"AZ"`, `"Type"`, `"Size"`, `"DateAndTimeCreation"`, `"Author"`).                                                                        | `"DateAndTime"`                                                                                                                                                                              |
| filter.withSubfolders | boolean | Specifies whether to exclude subfolders when searching for files.                                                                                                             | `false`                                                                                                                                                                                      |
| filterParam           | string  | The filter parameters for selector mode (`"ALL"`, `"DOCX"`, `"IMG"`, `"GZ"`, `"DOCXF"`, `"XLSX"`, `"BackupOnly"`).                                                            | `"ALL"`                                                                                                                                                                                      |
| frameId               | string  | The frame SDK ID used to refer to the SDK instance.                                                                                                                           | `"ds-frame"`                                                                                                                                                                                 |
| height                | string  | The frame SDK height in percent.                                                                                                                                              | `"100%"`                                                                                                                                                                                     |
| id                    | string  | The element ID for SDK initialization.                                                                                                                                        | `null`                                                                                                                                                                                       |
| infoPanelVisible      | boolean | Specifies whether to display a button to show the info panel in the manager.                                                                                                  | `true`                                                                                                                                                                                       |
| locale                | string  | The language of the DocSpace user interface which is specified with the four letter language code.                                                                            | `null`                                                                                                                                                                                       |
| mode                  | string  | The SDK [initialization mode](./initialization-modes/initialization-modes.md). Values: `"manager"`, `"file-selector"`, `"room-selector"`, `"editor"`, `"viewer"`, `"system"`. | `"manager"`                                                                                                                                                                                  |
| name                  | string  | The name of the object inserted into the page.  It is used for messaging at the SDK level.                                                                                    | `"frameDocSpace"`                                                                                                                                                                            |
| requestToken          | string  | The token used to open public rooms/files.                                                                                                                                    | `null`                                                                                                                                                                                       |
| rootPath              | string  | The path to the frame SDK. Opens a list of rooms by default.                                                                                                                  | `"/rooms/shared/"`                                                                                                                                                                           |
| selectorType          | string  | The selector type defining filters in the selector mode. Values: `"roomsOnly"`, `"userFolderOnly"`, `"exceptPrivacyTrashArchiveFolders"`, `"exceptSortedByTagsFolders"`.      | `"roomsOnly"`                                                                                                                                                                                |
| showFilter            | boolean | Specifies whether the interface filter is displayed in the DocSpace manager.                                                                                                  | `false`                                                                                                                                                                                      |
| showHeader            | boolean | Specifies whether the header is displayed in the mobile view manager.                                                                                                         | `false`                                                                                                                                                                                      |
| showMenu              | boolean | Specifies whether the interface menu is displayed in the DocSpace manager.                                                                                                    | `false`                                                                                                                                                                                      |
| showSelectorCancel    | boolean | Specifies whether **Cancel** button is displayed in the selector mode.                                                                                                        | `false`                                                                                                                                                                                      |
| showSelectorHeader    | boolean | Specifies whether the interface header is displayed in the selector mode.                                                                                                     | `false`                                                                                                                                                                                      |
| showSettings          | boolean | Specifies whether to display the **Manage displayed columns** button for configuring the table columns in the manager.                                                        | `false`                                                                                                                                                                                      |
| showSignOut           | boolean | Specifies whether the **Sign out** button is displayed.                                                                                                                       | `true`                                                                                                                                                                                       |
| showTitle             | boolean | Specifies whether the interface title is displayed in the DocSpace manager.                                                                                                   | `true`                                                                                                                                                                                       |
| src                   | string  | The base URL to the DocSpace portal. It is used to generate links.                                                                                                            | `{PORTAL_SRC}`                                                                                                                                                                               |
| theme                 | string  | The UI theme (`"Base"`, `"Dark"`, `"System"`).                                                                                                                                | `"Base"`                                                                                                                                                                                     |
| type                  | string  | The platform type which is used by the browser and affects the parameters of the inserted object  (`"desktop"`, `"mobile"`).                                                  | `"desktop"`                                                                                                                                                                                  |
| viewAs                | string  | The way elements are arranged in the DocSpace manager (`"row"`, `"table"`, `"tile"`).                                                                                         | `"row"`                                                                                                                                                                                      |
| viewTableColumns      | string  | The column names that are displayed for the table in the manager.                                                                                                             | `"Name,Type,Tags"`                                                                                                                                                                           |
| width                 | string  | The frame SDK width in percent.                                                                                                                                               | `"100%"`                                                                                                                                                                                     |
| withBreadCrumbs       | boolean | Specifies whether to display the breadcrumbs in the selector mode.                                                                                                            | `true`                                                                                                                                                                                       |
| withSearch            | boolean | Specifies whether to display **Search** in the selector mode.                                                                                                                 | `true`                                                                                                                                                                                       |
| withSubtitle          | boolean | Specifies whether to display the filter parameters in the selector mode.                                                                                                      | `true`                                                                                                                                                                                       |

```mdx-code-block
</APITable>
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
