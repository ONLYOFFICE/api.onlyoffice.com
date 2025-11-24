# Enumeration: SDKMode

Defined in: [enums/index.ts:28](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L28)

The available modes for initializing the SDK.
Defines the context in which the SDK operates.

## Enumeration Members

### Manager

> **Manager**: `"manager"`

Defined in: [enums/index.ts:30](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L30)

Displays a list of entities based on the specified `rootPath`. Supports creating and managing rooms, folders, and files.

***

### Editor

> **Editor**: `"editor"`

Defined in: [enums/index.ts:32](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L32)

Opens the document editor for the file specified by its `id` parameter.

***

### Viewer

> **Viewer**: `"viewer"`

Defined in: [enums/index.ts:34](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L34)

Opens the document viewer for the file specified by its `id` parameter.

***

### RoomSelector

> **RoomSelector**: `"room-selector"`

Defined in: [enums/index.ts:36](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L36)

Opens the room selector for selecting a room from the available list.

***

### FileSelector

> **FileSelector**: `"file-selector"`

Defined in: [enums/index.ts:38](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L38)

Opens the file selector for selecting a file from the available list.

***

### System

> **System**: `"system"`

Defined in: [enums/index.ts:40](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L40)

Displays a blank page with a loader and provides access to system methods.

***

### PublicRoom

> **PublicRoom**: `"public-room"`

Defined in: [enums/index.ts:42](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts#L42)

Displays a public room that provides access to view, edit, comment on, and review documents without registration.
