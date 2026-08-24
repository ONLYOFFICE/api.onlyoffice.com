# IProfileMenuPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IProfileMenuPlugin.ts#L74)

Plugin for embedding items in the profile menu.
This interface must be implemented in each plugin that adds items to the profile menu.

## Example

The plugin class implements `IProfileMenuPlugin` and registers a "User Settings"
entry in the constructor. DocSpace calls `getProfileMenuItems` to embed the items
into the user profile dropdown.

```typescript
import {
  type IProfileMenuItem,
  type IProfileMenuPlugin,
  Actions,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IProfileMenuPlugin {
  profileMenuItems: Map<string, IProfileMenuItem> = new Map();

  constructor() {
    this.addProfileMenuItem({
      key: "user-settings",
      label: "User Settings",
      icon: "settings-icon.svg",
      onClick: async () => {
        await loadUserSettings();
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "User settings loaded"
          }]
        };
      }
    });
  }

  addProfileMenuItem = (item: IProfileMenuItem): void => {
    this.profileMenuItems.set(item.key, item);
  };

  getProfileMenuItems = (): Map<string, IProfileMenuItem> => {
    return this.profileMenuItems;
  };

  updateProfileMenuItem = (item: IProfileMenuItem): void => {
    this.profileMenuItems.set(item.key, item);
  };
}
```

## Methods

### addProfileMenuItem()

```ts
addProfileMenuItem(item: IProfileMenuItem): void;
```

Add a new profile menu item

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IProfileMenuItem`](../items/IProfileMenuItem.md) |

#### Returns

`void`

### getProfileMenuItems()

```ts
getProfileMenuItems(): Map<string, IProfileMenuItem>;
```

Get all the profile menu items

#### Returns

`Map`\<`string`, [`IProfileMenuItem`](../items/IProfileMenuItem.md)\>

### updateProfileMenuItem()

```ts
updateProfileMenuItem(item: IProfileMenuItem): void;
```

Updates an existing profile menu item

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IProfileMenuItem`](../items/IProfileMenuItem.md) |

#### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `profileMenuItems` | `Map`\<`string`, [`IProfileMenuItem`](../items/IProfileMenuItem.md)\> | Stores a collection of elements where the keys are the key parameters from the ProfileMenuItem objects. A list for hooking interactions with profile menu is generated based on this collection. |

```mdx-code-block
</APITable>
```
