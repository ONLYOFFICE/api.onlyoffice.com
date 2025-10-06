---
sidebar_position: -5
---

# InfoPanelItem

Describes an item that will be embedded in the file info panel as a separate tab.

| Parameter       | Description                                                                                                                                                                                                                                                                                                           | Type                                                                                                            | Example                                                           |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| key             | Defines the unique item identifier used by the service to recognize the item.                                                                                                                                                                                                                                         | string                                                                                                          | `"test-info-panel"`                                               |
| submenu         | Defines the item submenu.                                                                                                                                                                                                                                                                                             | object                                                                                                          | `const item = {  name: "Test",  onClick: () => {},}`              |
| submenu.name    | The tab display name.                                                                                                                                                                                                                                                                                                 | string                                                                                                          | `"Test"`                                                          |
| submenu.onClick | A function that takes the file/folder/room id as an argument. This function can be asynchronous. It will be executed when clicking on the tab.                                                                                                                                                                        | func                                                                                                            | `() => {}`                                                        |
| body            | Defines the tab UI of the info panel.                                                                                                                                                                                                                                                                                 | [IBox](../plugin-components/box.md)                                                                             | `parentBox`                                                       |
| onLoad          | Defines a function that is executed after opening a tab. It returns a new `body`. If this functionality is not needed, the old `body` value is returned.                                                                                                                                                              | func                                                                                                            | `() => {}`                                                        |
| fileExt         | Defines the extensions of files where the current item will be displayed in the context menu. It only works if the `FilesType.Files` is specified in the `fileType` parameter. If this parameter is not specified, then the current context menu item will be displayed in any file extension.                        | array of [FilesExst](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts) / string | `[FilesExst.docx, FilesExst.xlsx]`                                |
| fileType        | Defines the types of files where the current item will be displayed in the context menu. Presently the following file types are available: **room**, **file**, **folder**, **image**, **video**. If this parameter is not specified, then the current context menu item will be displayed in any file type.           | array of [FilesType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Files.ts)          | `[FilesType.room, FilesType.file]`                                |
| usersType       | Defines the types of users who will see the current item in the context menu. Currently the following user types are available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If this parameter is not specified, then the current context menu item will be displayed for all user types. | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts)      | `[UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]` |
| devices         | Defines the types of devices where the current item will be displayed in the context menu. At the moment the following device types are available: **mobile**, **tablet**, **desktop**. If this parameter is not specified, then the current context menu item will be displayed in any device types.                 | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)          | `[Devices.desktop]`                                               |

## Example

``` ts
import {FilesExst, FilesType, type IBox, type IComponent, type IInfoPanelItem, type IInfoPanelSubMenu} from "@onlyoffice/docspace-plugin-sdk"
import {buttonBox} from "./Button"
import {checkboxBox} from "./Checkbox"
import {headerBox} from "./Header"
import {inputGroupBox} from "./Input"
import {textAreaGroupBox} from "./TextArea"
import {toggleButtonBox} from "./ToggleButton"

const parentBoxChildren: IComponent[] = [
  headerBox,
  checkboxBox,
  textAreaGroupBox,
  inputGroupBox,
  toggleButtonBox,
  buttonBox,
]

const parentBox: IBox = {
  widthProp: "100%",
  heightProp: "auto",
  marginProp: "0",
  displayProp: "flex",
  paddingProp: "0",
  flexDirection: "column",
  children: parentBoxChildren,
}

const infoPanelSubMenu: IInfoPanelSubMenu = {
  name: "Test",
  onClick: () => {},
}

export const InfoPanelItem: IInfoPanelItem = {
  key: "test-info-panel",
  subMenu: infoPanelSubMenu,
  body: parentBox,
  filesExsts: [FilesExst.docx, FilesExst.xlsx],
  filesType: [FilesType.room, FilesType.file],
}
```
