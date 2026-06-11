---
sidebar_position: 0
---

# ArticleButtonItem

Describes an item that will be embedded in the article sidebar as a custom plugin component above the DevTools section. A maximum of 5 items can be displayed across all plugins. The recommended item size is 32x32 px.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Name      | Type                                                                                                       | Example                                                           | Description                                                                                                                                                                                                                                                                                              |
|-----------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | string                                                                                                     | `"notifications-item"`                                            | Defines the unique item identifier used by the service to recognize the item.                                                                                                                                                                                                                            |
| body      | [IBox](../plugin-components/box.md)                                                                        | `contentBox`                                                      | Defines the UI content of the article button item. The recommended size is 32x32 px.                                                                                                                                                                                                                     |
| onLoad    | func                                                                                                       | `() => {}`                                                        | Optional. Defines a function that is executed after the item is loaded. It returns a new `body`. If this functionality is not needed, the old `body` value is returned.                                                                                                                                  |
| usersTypes | [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts)[] | `[UsersType.owner, UsersType.docSpaceAdmin]`                      | Defines the types of users who will see the current item. Currently the following user types are available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If this parameter is not specified, then the item will be displayed for all user types.                              |
| devices   | [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)[]     | `[Devices.desktop]`                                               | Defines the types of devices where the current item will be displayed. At the moment the following device types are available: **mobile**, **tablet**, **desktop**. If this parameter is not specified, then the item will be displayed on all device types.                                              |

```mdx-code-block
</APITable>
```

## Example

``` ts
import {Components, Devices, type IArticleButtonItem, type IBox, UsersType} from "@onlyoffice/docspace-plugin-sdk"

const buttonBox: IBox = {
  widthProp: "32px",
  heightProp: "32px",
  children: [
    {
      component: Components.iconButton,
      props: {
        iconName: "plugin-icon-32.png",
        size: 32,
        isClickable: true,
        onClick: () => {},
      },
    },
  ],
}

export const articleButtonItem: IArticleButtonItem = {
  key: "my-article-button",
  body: buttonBox,
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin],
  devices: [Devices.desktop, Devices.tablet],
}
```
