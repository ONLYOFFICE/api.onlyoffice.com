---
sidebar_position: -3
---

# ProfileMenuItem

Describes an item that will be embedded in the profile menu.

| Parameter  | Description | Type | Example |
|------------|-------------|------|---------|
| key | Defines the unique item identifier used by the service to recognize the item. | string | `"profile-menu-plugin"` |
| label | Defines the item display name. | string | `"Profile menu item"` |
| icon | Defines the item display icon. The icon image must be uploaded to the *assets* folder. Only the image name with the extension must be specified in this field. The required icon size is 16x16 px. Otherwise, it will be compressed to this size. | string | `"logo.png"` |
| onClick | Defines a function that takes the file/folder/room id as an argument. This function can be asynchronous. | func | `() => {}` |
| usersType | Defines the types of users who will see the current item in the context menu. Available user types: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If not specified, the item will be displayed for all user types. | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts) | `[UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]` |
| devices | Defines the types of devices where the current item will be displayed in the context menu. Available device types: **mobile**, **tablet**, **desktop**. If not specified, the item will be displayed on all device types. | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts) | `[Devices.desktop]` |

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
