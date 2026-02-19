---
sidebar_position: -6
---

# ContextMenuItem

Describes an item that will be embedded in the **Actions** item of the file context menu.

<img alt="Context menu item" src="/assets/images/docspace/context-menu-plugin.png" width="400px" />

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name           | Type                                                                                                                                                                                                         | Example                                                           | Description                                                                                                                                                                                                                                                                                                           |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key            | string                                                                                                                                                                                                       | `"convert-file-item"`                                             | Defines the unique item identifier used by the service to recognize the item.                                                                                                                                                                                                                                         |
| label          | string                                                                                                                                                                                                       | `"Convert to PDF"`                                                | Defines the item display name.                                                                                                                                                                                                                                                                                        |
| icon           | string                                                                                                                                                                                                       | `"convert-16.png"`                                                | Defines the item display icon. The icon image must be uploaded to the `assets` folder. Only the image name with the extension must be specified in this field. The required icon size is 16x16 px. Otherwise, it will be compressed to this size.                                                                     |
| onClick        | func                                                                                                                                                                                                         | `(id: number) => {}`                                              | Defines a function that takes the file/folder/room id as an argument. This function can be asynchronous.                                                                                                                                                                                                              |
| fileExt        | array of [FilesExst](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts) / string                                                                                              | `[FilesExst.docx, FilesExst.xlsx]`                                | Defines the extensions of files where the current item will be displayed in the context menu. It only works if the `FilesType.Files` is specified in the `fileType` parameter. If this parameter is not specified, then the current context menu item will be displayed in any file extension.                        |
| fileType       | array of [FilesType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts)                                                                                                       | `[FilesType.file]`                                                | Defines the types of files where the current item will be displayed in the context menu. Presently the following file types are available: **room**, **file**, **folder**, **image**, **video**. If this parameter is not specified, then the current context menu item will be displayed in any file type.           |
| usersType      | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts)                                                                                                   | `[UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]` | Defines the types of users who will see the current item in the context menu. Currently the following user types are available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If this parameter is not specified, then the current context menu item will be displayed for all user types. |
| devices        | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)                                                                                                       | `[Devices.desktop]`                                               | Defines the types of devices where the current item will be displayed in the context menu. At the moment the following device types are available: **mobile**, **tablet**, **desktop**. If this parameter is not specified, then the current context menu item will be displayed in any device types.                 |
| security       | array of [Security](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/develop/src/enums/Security.ts)                                                                                                    | `[Security.Create]`                                               | Defines the security parameters of the parent folder or room that will be checked. If all the parameters are **true**, the current item will be displayed in the context menu. If this parameter is undefined, it will be ignored.                                                                                    |
| itemSecurity   | array of [FilesSecurity](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts) / [Security](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Security.ts) | `[FilesSecurity.Edit]`                                            | Defines the security parameters of the file, room, or folder that will be checked. If all the parameters are **true**, the current context menu item will be displayed. If this parameter is not specified, the security settings are ignored.                                                                        |
| withActiveItem | boolean                                                                                                                                                                                                      | `true`                                                            | Specifies whether to add the action state to the item in the file list when the [onClick](#onClick) event is triggered.                                                                                                                                                                                               |

```mdx-code-block
</APITable>
```

## Example

``` ts
import {FilesType, type IContextMenuItem, UsersType} from "@onlyoffice/docspace-plugin-sdk"

export const convertFileItem: IContextMenuItem = {
  key: "convert-file-item",
  label: "Convert to PDF",
  icon: "convert-16.png",
  onClick: (id: number) => {},
  fileType: [FilesType.file],
  itemSecurity: [FilesSecurity.Edit],
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin],
}
```
