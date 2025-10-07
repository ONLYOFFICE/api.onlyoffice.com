---
sidebar_position: -4
---

# Config

The configuration parameters describe the behavior and display options of the DocSpace elements.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| Parameter             | Type    | Example                                                                                                                                                                                      | Description                                                                                                                                                                   |
| --------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| buttonColor           | string  | `"#5299E0"`                                                                                                                                                                                  | The selector button color.                                                                                                                                                    |
| checkCSP              | boolean | `true`                                                                                                                                                                                       | Specifies whether to check for the presence of CSP headers before initialization.                                                                                             |
| destroyText           | string  | `""`                                                                                                                                                                                         | The text inserted into the *div* tag when the [destroyFrame](./methods.md#destroyframe) method is called.                                                                     |
| disableActionButton   | boolean | `false`                                                                                                                                                                                      | Specifies whether to disable the **Actions** button in the manager interface.                                                                                                 |
| downloadToEvent       | boolean | `false`                                                                                                                                                                                      | Specifies whether to switch the SDK to the mode of working with download links through the [onDownload](./events.md#ondownload) event.                                        |
| editorCustomization   | object  | `{}`                                                                                                                                                                                         | The parameters to customize editors from [this section](../../../docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md).                     |
| editorGoBack          | boolean | `true`                                                                                                                                                                                       | Specifies whether the **File Location** button is displayed in the editor.                                                                                                    |
| editorType            | string  | `"desktop"`                                                                                                                                                                                  | The editor mode display type (`"embedded"`, `"desktop"`).                                                                                                                     |
| events                | object  | `const events = { onSelectCallback: null, onCloseCallback: null, onAppReady: null, onAppError: null, onEditorCloseCallback: null, onAuthSuccess: null, onSignOut: null, onDownload: null, }` | A list of DocSpace events returned on certain actions within the SDK.                                                                                                         |
| filter                | object  | `{ count: 100, page: 1, search: "", sortorder: "descending", sortby: "DateAndTime", withSubfolders: false, }`                                                                                | The filter parameters for searching files in the DocSpace manager.                                                                                                            |
| filter.count          | integer | `100`                                                                                                                                                                                        | A number of files to be displayed.                                                                                                                                            |
| filter.page           | integer | `1`                                                                                                                                                                                          | A page number.                                                                                                                                                                |
| filter.search         | string  | `""`                                                                                                                                                                                         | A query to search for files.                                                                                                                                                  |
| filter.sortorder      | string  | `"descending"`                                                                                                                                                                               | The sort order of files (`"descending"`, `"ascending"`).                                                                                                                      |
| filter.sortby         | string  | `"DateAndTime"`                                                                                                                                                                              | The sort parameter (`"DateAndTime"`, `"AZ"`, `"Type"`, `"Size"`, `"DateAndTimeCreation"`, `"Author"`).                                                                        |
| filter.withSubfolders | boolean | `false`                                                                                                                                                                                      | Specifies whether to exclude subfolders when searching for files.                                                                                                             |
| filterParam           | string  | `"ALL"`                                                                                                                                                                                      | The filter parameters for selector mode (`"ALL"`, `"DOCX"`, `"IMG"`, `"GZ"`, `"DOCXF"`, `"XLSX"`, `"BackupOnly"`).                                                            |
| frameId               | string  | `"ds-frame"`                                                                                                                                                                                 | The frame SDK ID used to refer to the SDK instance.                                                                                                                           |
| height                | string  | `"100%"`                                                                                                                                                                                     | The frame SDK height in percent.                                                                                                                                              |
| id                    | string  | `null`                                                                                                                                                                                       | The element ID for SDK initialization.                                                                                                                                        |
| infoPanelVisible      | boolean | `true`                                                                                                                                                                                       | Specifies whether to display a button to show the info panel in the manager.                                                                                                  |
| locale                | string  | `null`                                                                                                                                                                                       | The language of the DocSpace user interface which is specified with the four letter language code.                                                                            |
| mode                  | string  | `"manager"`                                                                                                                                                                                  | The SDK [initialization mode](./initialization-modes/initialization-modes.md). Values: `"manager"`, `"file-selector"`, `"room-selector"`, `"editor"`, `"viewer"`, `"system"`. |
| name                  | string  | `"frameDocSpace"`                                                                                                                                                                            | The name of the object inserted into the page.  It is used for messaging at the SDK level.                                                                                    |
| requestToken          | string  | `null`                                                                                                                                                                                       | The token used to open public rooms/files.                                                                                                                                    |
| rootPath              | string  | `"/rooms/shared/"`                                                                                                                                                                           | The path to the frame SDK. Opens a list of rooms by default.                                                                                                                  |
| selectorType          | string  | `"roomsOnly"`                                                                                                                                                                                | The selector type defining filters in the selector mode. Values: `"roomsOnly"`, `"userFolderOnly"`, `"exceptPrivacyTrashArchiveFolders"`, `"exceptSortedByTagsFolders"`.      |
| showFilter            | boolean | `false`                                                                                                                                                                                      | Specifies whether the interface filter is displayed in the DocSpace manager.                                                                                                  |
| showHeader            | boolean | `false`                                                                                                                                                                                      | Specifies whether the header is displayed in the mobile view manager.                                                                                                         |
| showMenu              | boolean | `false`                                                                                                                                                                                      | Specifies whether the interface menu is displayed in the DocSpace manager.                                                                                                    |
| showSelectorCancel    | boolean | `false`                                                                                                                                                                                      | Specifies whether **Cancel** button is displayed in the selector mode.                                                                                                        |
| showSelectorHeader    | boolean | `false`                                                                                                                                                                                      | Specifies whether the interface header is displayed in the selector mode.                                                                                                     |
| showSettings          | boolean | `false`                                                                                                                                                                                      | Specifies whether to display the **Manage displayed columns** button for configuring the table columns in the manager.                                                        |
| showSignOut           | boolean | `true`                                                                                                                                                                                       | Specifies whether the **Sign out** button is displayed.                                                                                                                       |
| showTitle             | boolean | `true`                                                                                                                                                                                       | Specifies whether the interface title is displayed in the DocSpace manager.                                                                                                   |
| src                   | string  | `{PORTAL_SRC}`                                                                                                                                                                               | The base URL to the DocSpace portal. It is used to generate links.                                                                                                            |
| theme                 | string  | `"Base"`                                                                                                                                                                                     | The UI theme (`"Base"`, `"Dark"`, `"System"`).                                                                                                                                |
| type                  | string  | `"desktop"`                                                                                                                                                                                  | The platform type which is used by the browser and affects the parameters of the inserted object  (`"desktop"`, `"mobile"`).                                                  |
| viewAs                | string  | `"row"`                                                                                                                                                                                      | The way elements are arranged in the DocSpace manager (`"row"`, `"table"`, `"tile"`).                                                                                         |
| viewTableColumns      | string  | `"Name,Type,Tags"`                                                                                                                                                                           | The column names that are displayed for the table in the manager.                                                                                                             |
| width                 | string  | `"100%"`                                                                                                                                                                                     | The frame SDK width in percent.                                                                                                                                               |
| withBreadCrumbs       | boolean | `true`                                                                                                                                                                                       | Specifies whether to display the breadcrumbs in the selector mode.                                                                                                            |
| withSearch            | boolean | `true`                                                                                                                                                                                       | Specifies whether to display **Search** in the selector mode.                                                                                                                 |
| withSubtitle          | boolean | `true`                                                                                                                                                                                       | Specifies whether to display the filter parameters in the selector mode.                                                                                                      |

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
