---
sidebar_position: -3
---

# ProfileMenuItem

Describes an item that will be embedded in the profile menu.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| Parameter | Type                                                                                                       | Example                                                           | Description                                                                                                                                                                                                                                                                                                           |
|-----------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | string                                                                                                     | `"profile-menu-plugin"`                                           | Defines the unique item identifier used by the service to recognize the item.                                                                                                                                                                                                                                         |
| label     | string                                                                                                     | `"Profile menu item"`                                             | Defines the item display name.                                                                                                                                                                                                                                                                                        |
| icon      | string                                                                                                     | `"logo.png"`                                                      | Defines the item display icon. The icon image must be uploaded to the `assets` folder. Only the image name with the extension must be specified in this field. The required icon size is 16x16 px. Otherwise, it will be compressed to this size.                                                                     |
| onClick   | func                                                                                                       | `() => {}`                                                        | Defines a function that takes the file/folder/room id as an argument. This function can be asynchronous.                                                                                                                                                                                                              |
| usersType | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts) | `[UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]` | Defines the types of users who will see the current item in the context menu. Currently the following user types are available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If this parameter is not specified, then the current context menu item will be displayed for all user types. |
| devices   | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)     | `[Devices.desktop]`                                               | Defines the types of devices where the current item will be displayed in the context menu. At the moment the following device types are available: **mobile**, **tablet**, **desktop**. If this parameter is not specified, then the current context menu item will be displayed in any device types.                 |

```mdx-code-block
</APITable>
```

## Example

``` ts
import {type IProfileMenuItem} from "@onlyoffice/docspace-plugin-sdk"

export const ProfileMenuItem: IProfileMenuItem = {
  key: "profile-menu-plugin",
  label: "Profile menu item",
  icon: "logo.jpg",
  onClick: () => {},
}
```
