---
sidebar_position: -2
---

# FileItem

Describes an item that allows the plugin to control clicking on the specified file type. It does not work with the files that already have some actions.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| Name         | Description                                                                                                                                                                                                                                            | Type                                                                                                      | Example                                                                 |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| extension    | Defines the file extension. If several plugins have the same extension, the last plugin from this list is taken.                                                                                                                                       | string                                                                                                    | `.drawio`                                                               |
| onClick      | Defines a function that takes the *File* object with the file data as an argument. This function can be asynchronous. It will be executed when the user clicks on a file with the required extension.                                                  | func                                                                                                      | `async (item: File) => {}`                                              |
| usersType    | Defines the types of users who will see the current item in the context menu. Available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If not specified, visible for all user types.                                        | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts) | [UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]         |
| devices      | Defines the types of devices where the current item will be displayed. Available: **mobile**, **tablet**, **desktop**. If not specified, visible for all device types.                                                                                  | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)     | [Devices.desktop]                                                        |
| fileTypeName | Defines a file type which is displayed in the list (for example, Document/Folder).                                                                                                                                                                     | string                                                                                                    | `Diagram`                                                               |
| fileRowIcon  | Defines a file icon which is displayed in the table format. Preferred size: 32x32 px.                                                                                                                                                                  | string                                                                                                    | `drawio-32.svg`                                                          |
| fileTileIcon | Defines a file icon which is displayed in the tile format. Preferred size: 96x96 px.                                                                                                                                                                   | string                                                                                                    | `drawio-96.svg`                                                          |
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
  onClick: async (item: File) => {},
}
```
