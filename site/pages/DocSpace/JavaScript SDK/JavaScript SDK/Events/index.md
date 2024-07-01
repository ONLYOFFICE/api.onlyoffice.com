When initializing the SDK frame, a number of events can be passed to the configuration, which will be executed at the appropriate moment:

* [onAppError](#onAppError)
* [onAppReady](#onAppReady)
* [onAuthSuccess](#onAuthSuccess)
* [onCloseCallback](#onCloseCallback)
* [onDownload](#onDownload)
* [onEditorCloseCallback](#onEditorCloseCallback)
* [onSelectCallback](#onSelectCallback)

## Events and their description:

* **onAppError** - the function called when SDK is initialized with an error. This error is returned during the initialization.

  Example

  ```
  var onAppError = function () {
      console.log("ONLYOFFICE DocSpace reports an error");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onAppError": onAppError,
          ...
      },
      ...
  });
  ```

* **onAppReady** - the function called when SDK is initialized successfully.

  Example

  ```
  var onAppReady = function () {
      console.log("ONLYOFFICE DocSpace is ready");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onAppReady": onAppReady,
          ...
      },
      ...
  });
  ```

* **onAuthSuccess** - the function called upon successful authorization.

  Example

  ```
  var onAuthSuccess = function () {
      console.log("The authorization is successful.");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onAuthSuccess ": onAuthSuccess,
          ...
      },
      ...
  });
  ```

* **onCloseCallback** - the function called only in the [room-selector](/docspace/jssdk/initmodes/roomselector) and [file-selector](/docspace/jssdk/initmodes/fileselector) modes when the room or file selector is closed or the selection is canceled.

  Example

  ```
  var onCloseCallback = function () {
      console.log("The room selector is closed.");
  };

  var docSpace = DocSpace.SDK.initRoomSelector({
      "events": {
          "onCloseCallback": onCloseCallback,
          ...
      },
      ...
  });
  ```

* **onDownload** - the function called when firing events to download items from the manager. It returns a link to the download object. This event is called only when the [downloadToEvent](/docspace/jssdk/config#downloadToEvent) parameter is specified in the config.

  Example

  ```
  var onDownload = function () {
      console.log("The 'New document' file has been downloaded.");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onDownload": onDownload,
          ...
      },
      ...
  });
  ```

* **onEditorCloseCallback** - the function called when the document editor is closed.

  Example

  ```
  var onEditorCloseCallback = function () {
      console.log("The document editor is closed.");
  };

  var docSpace = DocSpace.SDK.initEditor({
      "events": {
          "onEditorCloseCallback": onEditorCloseCallback,
          ...
      },
      ...
  });
  ```

* **onSelectCallback** - the function called only in the [room-selector](/docspace/jssdk/initmodes/roomselector) and [file-selector](/docspace/jssdk/initmodes/fileselector) modes when a room or file is selected.

  Example

  ```
  var onSelectCallback = function () {
      console.log("The 'New room' room was selected.");
  };

  var docSpace = DocSpace.SDK.initRoomSelector({
      "events": {
          "onSelectCallback": onSelectCallback,
          ...
      },
      ...
  });
  ```

  The information about the selected item is returned:

  ```
  {
      "icon": "https://example.com/url-to-example-image.svg",
      "id": 34,
      "isSelected": false,
      "label": "roomName"
  }
  ```

  where **example.com** is the name of the server with the ONLYOFFICE DocSpace installed.

  | Parameter  | Description                                          | Type    | Presence |
  | ---------- | ---------------------------------------------------- | ------- | -------- |
  | icon       | Defines the URL to the room/file icon.               | string  | required |
  | id         | Defines the room/file ID.                            | integer | required |
  | isSelected | Specifies whether the current room/file is selected. | boolean | required |
  | label      | Defines the room/file label.                         | string  | required |

* **onSignOut** - the function called when logging out of the user account.

  Example

  ```
  var onSignOut = function () {
      console.log("The user is logging out of the DocSpace account.");
  };

  var docSpace = DocSpace.SDK.initManager({
      "events": {
          "onSignOut ": onSignOut,
          ...
      },
      ...
  });
  ```
