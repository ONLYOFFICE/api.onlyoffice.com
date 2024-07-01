*api.js* allows you to initialize the SDK in the following modes:

* [manager](/docspace/jssdk/initmodes/manager) - displays a list of entities depending on the specified *rootPath*;
* [room-selector](/docspace/jssdk/initmodes/roomselector) - opens the room selector;
* [file-selector](/docspace/jssdk/initmodes/fileselector) - opens the file selector;
* [editor](/docspace/jssdk/initmodes/editor) - allows you to open the SDK as a document editor for editing by specifying the *id* parameter for a file;
* [viewer](/docspace/jssdk/initmodes/viewer) - allows you to open the SDK as a document editor for viewing by specifying the *id* parameter for a file;
* [system](/docspace/jssdk/initmodes/system) - calls the system methods.

To simplify working with modes, the SDK has methods that do not require you to specify the appropriate mode:

DocSpace.SDK

| Name                                                         | Description                                            |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| [initManager](/docspace/jssdk/methods#initManager)           | Initializes the SDK frame in the "manager" mode.       |
| [initRoomSelector](/docspace/jssdk/methods#initRoomSelector) | Initializes the SDK frame in the "room-selector" mode. |
| [initFileSelector](/docspace/jssdk/methods#initFileSelector) | Initializes the SDK frame in the "file-selector" mode. |
| [initEditor](/docspace/jssdk/methods#initEditor)             | Initializes the SDK frame in the "editor" mode.        |
| [initViewer](/docspace/jssdk/methods#initViewer)             | Initializes the SDK frame in the "viewer" mode.        |
| [initSystem](/docspace/jssdk/methods#initSystem)             | Initializes the SDK frame in the "system" mode.        |
