---
sidebar_position: -4
---

# MainButtonItem

Describes an item that will be embedded in the **More** item of the main button menu. It is available only inside a room (folder) and is not available for the room list.

<img alt="Main button item" src="/assets/images/docspace/main-button-plugin.png" width="400px" />

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| Name      | Type                                                                                                       | Example                                                           | Description                                                                                                                                                                                                                                                                                              |
|-----------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | string                                                                                                     | `"draw-io-main-button-item"`                                      | Defines the unique item identifier used by the service to recognize the item.                                                                                                                                                                                                                            |
| label     | string                                                                                                     | `"Draw.io"`                                                       | Defines the item display name.                                                                                                                                                                                                                                                                           |
| icon      | string                                                                                                     | `"drawio.png"`                                                    | Defines the item display icon. The icon image must be uploaded to the `assets` folder. Only the image name with the extension must be specified. The required icon size is 16x16 px. Otherwise, it will be compressed to this size.                                                                      |
| onClick   | func                                                                                                       | `() => {}`                                                        | Defines a function that takes the file/folder/room id as an argument. This function can be asynchronous.                                                                                                                                                                                                 |
| usersType | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts) | `[UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]` | Defines the types of users who will see the current item in the context menu. Currently the following user types are available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If this parameter is not specified, then the current item will be displayed for all user types. |
| devices   | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)     | `[Devices.desktop]`                                               | Defines the types of devices where the current item will be displayed in the context menu. At the moment the following device types are available: **mobile**, **tablet**, **desktop**. If this parameter is not specified, then the current item will be displayed in any device types.                 |
| items     | array of IMainButtonItem                                                                                   | `[createItem]`                                                    | Defines the main button items that are added to the current item as a drop-down list. In this case, the [onClick](#onClick) event does not work.                                                                                                                                                         |

```mdx-code-block
</APITable>
```

## Example

``` ts
import {type IMainButtonItem} from "@onlyoffice/docspace-plugin-sdk"

const createItem: IMainButtonItem = {
  key: "draw-io-main-button-item_create",
  label: "Create new",
  icon: "create-new.svg",
  onClick: (id: number) => {},
}

const mainButtonItem: IMainButtonItem = {
  key: "draw-io-main-button-item",
  label: "Draw.io",
  icon: "drawio.png",
  items: [createItem],
}
```
