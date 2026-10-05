---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# InstanceMethods

Available instance methods in the SDK for file management, user information, and settings.

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `AddTagsToRoom` | `"addTagsToRoom"` | Adds the specified tags to the room with the specified ID. |
| `CreateFile` | `"createFile"` | Creates a new file with the specified parameters. |
| `CreateFolder` | `"createFolder"` | Creates a new folder with the specified parameters. |
| `CreateHash` | `"createHash"` | Generates the hash string based on the specified hash settings. |
| `CreateRoom` | `"createRoom"` | Creates a new room with the specified parameters. |
| `CreateTag` | `"createTag"` | Creates a new tag with the specified name. |
| `ExecuteInEditor` | `"executeInEditor"` | Executes the specified callback within the editor context. |
| `GetFiles` | `"getFiles"` | Returns the information about all files in the SDK frame. |
| `GetFolderInfo` | `"getFolderInfo"` | Returns the information about the current directory opened in the SDK frame. |
| `GetFolders` | `"getFolders"` | Returns the information about all the folders in the SDK frame. |
| `GetHashSettings` | `"getHashSettings"` | Returns the DocSpace hash settings for generating a password hash. |
| `GetList` | `"getList"` | Returns the information about all files and folders in the SDK frame. |
| `GetRooms` | `"getRooms"` | Returns the information about rooms according to the specified filter parameters. |
| `GetSelection` | `"getSelection"` | Returns the information about the selected elements in the SDK frame. |
| `GetUserInfo` | `"getUserInfo"` | Returns the information about the current DocSpace user or null if there are no authorized users. |
| `Login` | `"login"` | Logs in to the DocSpace account using the specified email and password hash. |
| `Logout` | `"logout"` | Logs out from the DocSpace account of the current user. |
| `OpenModal` | `"openModal"` | Opens the DocSpace modal window of the specified type. |
| `RemoveTagsFromRoom` | `"removeTagsFromRoom"` | Removes the specified tags from the room with the specified ID. |
| `SetConfig` | `"setConfig"` | Sets the specified config for the current SDK entity. |
| `SetListView` | `"setListView"` | Sets the display of entity lists according to the specified type. |

</APITable>
