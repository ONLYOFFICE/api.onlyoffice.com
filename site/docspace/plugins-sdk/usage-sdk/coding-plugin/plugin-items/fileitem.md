---
sidebar_position: -2
---

# FileItem

Describes an item that allows the plugin to control clicking on the specified file type. It does not work with the files that already have some actions.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| Name          | Type                                                                                                                | Example                                                           | Description                                                                                                                                                                                                                                                                                              |
|---------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| extension     | string                                                                                                              | `".drawio"`                                                       | Defines the file extension. If several plugins have the same extension, the last plugin from this list is taken.                                                                                                                                                                                         |
| onClick       | func                                                                                                                | `async (item: File) => {}`                                        | Defines a function that takes the `File` object with the file data as an argument. This function can be asynchronous. It will be executed when the user clicks on a file with the required extension.                                                                                                    |
| usersType     | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts)          | `[UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]` | Defines the types of users who will see the current item in the context menu. Currently the following user types are available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If this parameter is not specified, then the current item will be displayed for all user types. |
| devices       | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)              | `[Devices.desktop]`                                               | Defines the types of devices where the current item will be displayed in the context menu. At the moment the following device types are available: **mobile**, **tablet**, **desktop**. If this parameter is not specified, then the current item will be displayed in any device types.                 |
| fileTypeName  | string                                                                                                              | `"Diagram"`                                                       | Defines a file type which is displayed in the list (for example, Document/Folder).                                                                                                                                                                                                                       |
| fileRowIcon   | string                                                                                                              | `"drawio-32.svg"`                                                 | Defines a file icon which is displayed in the table format. The preferred icon size is 32x32 px.                                                                                                                                                                                                         |
| fileTileIcon  | string                                                                                                              | `"drawio-96.svg"`                                                 | Defines a file icon which is displayed in the tile format. The preferred icon size is 96x96 px.                                                                                                                                                                                                          |
| filesSecurity | array of [FilesSecurity](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts#L149) | `[FilesSecurity.Edit]`                                            | Defines the security parameters of the file that will be checked. If all the parameters are **true**, the `onClick` event will be triggered. If this parameter is not specified, the security settings are ignored.                                                                                      |
| security      | array of [Security](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Security.ts)           | `[Security.Create]`                                               | Checks the specified security parameters of the parent folder or room. If all the parameters are **true**, the `onClick` event will be triggered. If this parameter is not specified, the security settings are ignored.                                                                                 |

```mdx-code-block
</APITable>
```

## Example

``` ts
import {type File, type IFileItem} from "@onlyoffice/docspace-plugin-sdk"

export const drawIoItem: IFileItem = {
  extension: ".drawio",
  fileTypeName: "Diagram",
  fileRowIcon: "drawio-32.svg",
  fileTileIcon: "drawio-96.svg",
  filesSecurity: [FilesSecurity.Edit],
  security: [Security.Create],
  onClick: async (item: File) => {},
}
```
