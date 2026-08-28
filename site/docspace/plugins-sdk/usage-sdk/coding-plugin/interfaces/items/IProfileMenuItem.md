# IProfileMenuItem

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IProfileMenuItem.ts#L94)

Describes an item that will be embedded in the profile menu.

Items are registered by a plugin implementing
[`IProfileMenuPlugin`](../plugins/IProfileMenuPlugin.md).

![profilemenuitem](/assets/images/docspace/profilemenuitem.png#gh-light-mode-only)![profilemenuitem](/assets/images/docspace/profilemenuitem.dark.png#gh-dark-mode-only)

## Examples

API key management with status monitoring

```typescript
const apiKeyManager: IProfileMenuItem = {
  key: "api-keys",
  label: "API Keys",
  icon: "key-icon.svg",
  onClick: async () => {
    try {
      const keys = await fetchApiKeys();
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.success,
          title: "Keys retrieved successfully | Usage within limits | No expiring keys"
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.error,
          title: "Unable to retrieve keys | Check permissions"
        }]
      };
    }
  }
};
```

Service integration health checker

```typescript
const integrationSettings: IProfileMenuItem = {
  key: "integrations",
  label: "Integrations",
  icon: "integration-icon.svg",
  onClick: async () => {
    try {
      const status = await checkIntegrations();
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.success,
          title: "All integrations active | Services connected | Sync complete"
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.error,
          title: "Unable to verify integrations | Check connection"
        }]
      };
    }
  }
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
| `label` | `string` | The item display name |
| `icon` | `string` | The item display icon. The icon image must be uploaded to the assets folder. Only the image name with the extension must be specified in this field. The required icon size is 16x16 px. Otherwise, it will be compressed to this size. |
| `onClick` | () => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | A function that takes the file/folder/room id as an argument. This function can be asynchronous. |
| `usersType?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who will see the current item in the profile menu. Currently the following user types are available: owner, docSpaceAdmin, roomAdmin, collaborator, user. If this parameter is not specified, then the current profile menu item will be displayed for all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The types of devices where the current item will be displayed in the profile menu. At the moment the following device types are available: mobile, tablet, desktop. If this parameter is not specified, then the current profile menu item will be displayed in any device types. |

```mdx-code-block
</APITable>
```
