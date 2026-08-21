# IArticleButtonItem

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IArticleButtonItem.ts#L87)

Describes a button item that will be embedded in the article sidebar.
Article button items are displayed as custom plugin components above the DevTools section.
Maximum 5 items can be displayed at once.

Items are registered by a plugin implementing
[`IArticleButtonPlugin`](../plugins/IArticleButtonPlugin.md).

![articlebuttonitem](/assets/images/docspace/articlebuttonitem.png#gh-light-mode-only)![articlebuttonitem](/assets/images/docspace/articlebuttonitem.dark.png#gh-dark-mode-only)

## Examples

Article button item with custom component

```typescript
const notificationItem: IArticleButtonItem = {
  key: "notifications-item",
  body: {
    component: Components.box,
    props: {
      children: [
        {
          component: Components.button,
          props: {
            label: "Notifications",
            onClick: async () => {
              // Handle click
            }
          }
        }
      ]
    }
  },
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin]
};
```

Plugin settings access button item with onLoad

```typescript
const settingsItem: IArticleButtonItem = {
  key: "plugin-settings-item",
  body: {
    component: Components.skeleton,
    props: { width: "100%", height: "32px" }
  },
  onLoad: async () => {
    return {
      body: {
        component: Components.button,
        props: {
          label: "Settings",
          onClick: async () => { }
        }
      }
    };
  },
  usersTypes: [UsersType.owner, UsersType.docSpaceAdmin],
  devices: [Devices.desktop, Devices.tablet]
};
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The unique item identifier used by the service to recognize the item |
| `body` | [`IBox`](../components/IBox.md) | The body of the article button item. This is the main content that will be displayed. Recommended size: 32x32 pixels to fit properly in the article sidebar. |
| `onLoad?` | () => `Promise`\<\{ `body`: [`IBox`](../components/IBox.md); \}\> | A function that is executed after the article button item is loaded. It returns a new body. If this functionality is not needed, the old body value is returned. |
| `usersTypes?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who will see the current button item in the article. Currently the following user types are available: owner, docSpaceAdmin, roomAdmin, collaborator, user. If this parameter is not specified, then the item will be displayed for all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The types of devices where the current button item will be displayed. At the moment the following device types are available: mobile, tablet, desktop. If this parameter is not specified, then the item will be displayed on all device types. |

```mdx-code-block
</APITable>
```
