After initializing SDK, you will get an object that can be used to call the methods:

```
var docSpace = DocSpace.SDK.initManager({config});
```

* [addTagsToRoom](#addTagsToRoom)
* [createFile](#createFile)
* [createFolder](#createFolder)
* [createHash](#createHash)
* [createRoom](#createRoom)
* [createTag](#createTag)
* [destroyFrame](#destroyFrame)
* [getConfig](#getConfig)
* [getFiles](#getFiles)
* [getFolderInfo](#getFolderInfo)
* [getFolders](#getFolders)
* [getHashSettings](#getHashSettings)
* [getList](#getList)
* [getRooms](#getRooms)
* [getSelection](#getSelection)
* [getUserInfo](#getUserInfo)
* [initEditor](#initEditor)
* [initFileSelector](#initFileSelector)
* [initFrame](#initFrame)
* [initManager](#initManager)
* [initRoomSelector](#initRoomSelector)
* [initSystem](#initSystem)
* [initViewer](#initViewer)
* [login](#login)
* [logout](#logout)
* [openModal](#openModal)
* [removeTagsFromRoom](#removeTagsFromRoom)
* [setConfig](#setConfig)
* [setIsLoaded](#setIsLoaded)
* [setListView](#setListView)

## Methods and their description:

* **addTagsToRoom** - adds the specified tags to the room with the specified ID.

  ```
  docSpace.addTagsToRoom(roomId, tags);
  ```

  | Parameter | Description                                            | Type             | Presence |
  | --------- | ------------------------------------------------------ | ---------------- | -------- |
  | roomId    | Defines the ID of a room where the tags will be added. | string           | required |
  | tags      | Defines a list of tags to be added.                    | array of strings | required |

* **createFile** - creates a file with the specified parameters.

  ```
  docSpace.createFile(folderId, title, templateId, formId);
  ```

  | Parameter  | Description                                                       | Type   | Presence |
  | ---------- | ----------------------------------------------------------------- | ------ | -------- |
  | folderId   | Defines the ID of a folder where a file will be created.          | string | required |
  | title      | Defines the file title.                                           | string | required |
  | templateId | Defines the ID of a template which will be used to create a file. | string | optional |
  | formId     | Defines the ID of a form which will be used to create a file.     | string | optional |

* **createFolder** - creates a folder with the specified parameters.

  ```
  docSpace.createFolder(parentFolderId, title);
  ```

  | Parameter      | Description                                                       | Type   | Presence |
  | -------------- | ----------------------------------------------------------------- | ------ | -------- |
  | parentFolderId | Defines the ID of a parent folder where a folder will be created. | string | required |
  | title          | Defines the folder title.                                         | string | required |

* **createHash** - generates the hash string based on the specified hash settings.

  ```
  docSpace.createHash(password, hashSettings);
  ```

  | Parameter               | Description                                                                                                   | Type    | Presence |
  | ----------------------- | ------------------------------------------------------------------------------------------------------------- | ------- | -------- |
  | password                | Defines a password to the DocSpace account.                                                                   | string  | required |
  | hashSettings            | Defines the hash settings for generating the hash string.                                                     | object  | required |
  | hashSettings.size       | Defines the hash size.                                                                                        | integer | required |
  | hashSettings.salt       | Defines the hash salt - a randomly generated set of characters that is added to a password before hashing it. | string  | required |
  | hashSettings.iterations | Defines a number of hash iterations.                                                                          | integer | required |

* **createRoom** - creates a room with the specified parameters.

  ```
  docSpace.createRoom(title, type);
  ```

  | Parameter | Description                                          | Type   | Presence |
  | --------- | ---------------------------------------------------- | ------ | -------- |
  | title     | Defines the room title.                              | string | required |
  | type      | Defines the room type ("CustomRoom", "EditingRoom"). | string | required |

* **createTag** - creates a tag with the specified name.

  ```
  docSpace.createTag(name);
  ```

  | Parameter | Description           | Type   | Presence |
  | --------- | --------------------- | ------ | -------- |
  | name      | Defines the tag name. | string | required |

* **destroyFrame** - destroys the SDK frame, replacing it with the element passed to [destroyText](/docspace/jssdk/config#destroyText).

  ```
  docSpace.destroyFrame();
  ```

* **getConfig** - returns the SDK config.

  ```
  docSpace.getConfig();
  ```

* **getFiles** - returns the information about all files in the SDK frame.

  ```
  docSpace.getFiles();
  ```

* **getFolderInfo** - returns the information about the current directory opened in the SDK frame.

  ```
  docSpace.getFolderInfo();
  ```

* **getFolders** - returns the information about all the folders in the SDK frame.

  ```
  docSpace.getFolders();
  ```

* **getHashSettings** - returns the DocSpace hash settings for generating a password hash.

  ```
  docSpace.getHashSettings();
  ```

* **getList** - returns the information about all files and folders in the SDK frame.

  ```
  docSpace.getList();
  ```

* **getRooms** - returns the information about rooms according to the specified filter parameters.

  ```
  docSpace.getRooms(filter);
  ```

  | Parameter | Description                                                                                                                       | Type   | Presence |
  | --------- | --------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | filter    | The room [filter parameters](https://github.com/ONLYOFFICE/DocSpace-client/blob/master/packages/shared/api/rooms/filter.js#L183). | object | required |

* **getSelection** - returns the information about the selected elements in the SDK frame.

  ```
  docSpace.getSelection();
  ```

* **getUserInfo** - returns the information about the current DocSpace user or null if there are no authorized users.

  ```
  docSpace.getUserInfo();
  ```

* **initEditor** - initializes the SDK frame in the "editor" mode.

  ```
  docSpace.initEditor(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **initFileSelector** - initializes the SDK frame in the "file-selector" mode.

  ```
  docSpace.initFileSelector(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **initFrame** - initializes the SDK frame dispaying the DocSpace page.

  ```
  docSpace.initFrame(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **initManager** - initializes the SDK frame in the "manager" mode.

  ```
  docSpace.initManager(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **initRoomSelector** - initializes the SDK frame in the "room-selector" mode.

  ```
  docSpace.initRoomSelector(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **initSystem** - initializes the SDK frame in the "system" mode to call system methods. This lightweight frame displays a blank page with the loader.

  ```
  docSpace.initSystem(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **initViewer** - initializes the SDK frame in the "viewer" mode.

  ```
  docSpace.initViewer(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **login** - logs in to the DocSpace account using the specified email and password hash.

  ```
  docSpace.login(email, passwordHash);
  ```

  | Parameter    | Description                     | Type   | Presence |
  | ------------ | ------------------------------- | ------ | -------- |
  | email        | Defines the user email address. | string | required |
  | passwordHash | Defines a password hash.        | string | required |

* **logout** - logs out from the DocSpace account of the current user.

  ```
  docSpace.logout();
  ```

* **openModal** - opens the DocSpace modal window of the specified type.

  ```
  docSpace.openModal(type);
  ```

  | Parameter | Description                                                                          | Type   | Presence |
  | --------- | ------------------------------------------------------------------------------------ | ------ | -------- |
  | type      | Defines the DocSpace modal window type ("CreateFile", "CreateFolder", "CreateRoom"). | string | required |

* **removeTagsFromRoom** - removes the specified tags from the room with the specified ID.

  ```
  docSpace.removeTagsFromRoom(roomId, tags);
  ```

  | Parameter | Description                                              | Type             | Presence |
  | --------- | -------------------------------------------------------- | ---------------- | -------- |
  | roomId    | Defines the ID of a room where the tags will be removed. | string           | required |
  | tags      | Defines a list of tags to be removed.                    | array of strings | required |

* **setConfig** - sets the specified config for the current SDK entity.

  ```
  docSpace.setConfig(config);
  ```

  | Parameter | Description                                                                                                    | Type   | Presence |
  | --------- | -------------------------------------------------------------------------------------------------------------- | ------ | -------- |
  | config    | Defines the configuration parameters which describe the behavior and display options of the DocSpace elements. | object | required |

* **setIsLoaded** - disables the loader in the SDK window.

  ```
  docSpace.setIsLoaded();
  ```

* **setListView** - sets the display of entity lists according to the specified type.

  ```
  docSpace.setListView(type);
  ```

  | Parameter | Description                                                                             | Type   | Presence |
  | --------- | --------------------------------------------------------------------------------------- | ------ | -------- |
  | type      | Defines the way elements are arranged in the DocSpace manager ("row", "table", "tile"). | string | required |
