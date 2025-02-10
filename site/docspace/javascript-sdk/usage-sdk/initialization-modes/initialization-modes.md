---
sidebar_position: -5
---

*api.js* allows you to initialize the SDK in the following modes:

- [manager](Manager.md) - displays a list of entities depending on the specified *rootPath*;
- [room-selector](room-selector.md) - opens the room selector;
- [file-selector](file-selector.md) - opens the file selector;
- [editor](editor.md) - allows you to open the SDK as a document editor for editing by specifying the *id* parameter for a file;
- [viewer](Viewer.md) - allows you to open the SDK as a document editor for viewing by specifying the *id* parameter for a file;
- [system](system.md) - calls the system methods.

To simplify working with modes, the SDK has methods that do not require you to specify the appropriate mode:

## DocSpace.SDK

| Name                                                     | Description                                            |
| -------------------------------------------------------- | ------------------------------------------------------ |
| [initManager](../methods.md#initmanager)           | Initializes the SDK frame in the "manager" mode.       |
| [initRoomSelector](../methods.md#initroomselector) | Initializes the SDK frame in the "room-selector" mode. |
| [initFileSelector](../methods.md#initfileselector) | Initializes the SDK frame in the "file-selector" mode. |
| [initEditor](../methods.md#initeditor)             | Initializes the SDK frame in the "editor" mode.        |
| [initViewer](../methods.md#initviewer)             | Initializes the SDK frame in the "viewer" mode.        |
| [initSystem](../methods.md#initsystem)             | Initializes the SDK frame in the "system" mode.        |
