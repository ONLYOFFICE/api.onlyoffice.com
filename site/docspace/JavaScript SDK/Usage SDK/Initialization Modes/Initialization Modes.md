---
sidebar_position: -5
---

*api.js* allows you to initialize the SDK in the following modes:

- [manager](Manager.md) - displays a list of entities depending on the specified *rootPath*;
- [room-selector](Room%20Selector.md) - opens the room selector;
- [file-selector](File%20Selector.md) - opens the file selector;
- [editor](Editor.md) - allows you to open the SDK as a document editor for editing by specifying the *id* parameter for a file;
- [viewer](Viewer.md) - allows you to open the SDK as a document editor for viewing by specifying the *id* parameter for a file;
- [system](System.md) - calls the system methods.

To simplify working with modes, the SDK has methods that do not require you to specify the appropriate mode:

## DocSpace.SDK

| Name                                                     | Description                                            |
| -------------------------------------------------------- | ------------------------------------------------------ |
| [initManager](../Methods.md#initmanager)           | Initializes the SDK frame in the "manager" mode.       |
| [initRoomSelector](../Methods.md#initroomselector) | Initializes the SDK frame in the "room-selector" mode. |
| [initFileSelector](../Methods.md#initfileselector) | Initializes the SDK frame in the "file-selector" mode. |
| [initEditor](../Methods.md#initeditor)             | Initializes the SDK frame in the "editor" mode.        |
| [initViewer](../Methods.md#initviewer)             | Initializes the SDK frame in the "viewer" mode.        |
| [initSystem](../Methods.md#initsystem)             | Initializes the SDK frame in the "system" mode.        |
