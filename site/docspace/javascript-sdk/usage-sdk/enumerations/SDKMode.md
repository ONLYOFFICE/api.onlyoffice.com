---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# SDKMode

The available modes for initializing the SDK.
Defines the context in which the SDK operates.

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Editor` | `"editor"` | Opens the document editor for the file specified by its `id` parameter. |
| `FileSelector` | `"file-selector"` | Opens the file selector for selecting a file from the available list. |
| `Manager` | `"manager"` | Displays a list of entities based on the specified `rootPath`. Supports creating and managing rooms, folders, and files. |
| `PublicRoom` | `"public-room"` | Displays a public room that provides access to view, edit, comment on, and review documents without registration. |
| `RoomSelector` | `"room-selector"` | Opens the room selector for selecting a room from the available list. |
| `System` | `"system"` | Displays a blank page with a loader and provides access to system methods. |
| `Viewer` | `"viewer"` | Opens the document viewer for the file specified by its `id` parameter. |

</APITable>
