# IContextMenuPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IContextMenuPlugin.ts#L77)

The plugin that is embedded in the context menu of files, folders, rooms, images, video (audio).

## Example

The plugin class implements `IContextMenuPlugin` and registers a "Share Document"
item in the constructor. DocSpace calls `getContextMenuItems` to embed the items
into the context menu.

```typescript
import {
  type IContextMenuItem,
  type IContextMenuPlugin,
  Actions,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IContextMenuPlugin {
  contextMenuItems: Map<string, IContextMenuItem> = new Map();

  constructor() {
    this.addContextMenuItem({
      key: "doc-share",
      label: "Share Document",
      icon: "share-icon.svg",
      onItemClick: async (id) => {
        await initiateDocumentSharing(id);
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "Share dialog opened"
          }]
        };
      }
    });
  }

  addContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item);
  };

  getContextMenuItems = (): Map<string, IContextMenuItem> => {
    return this.contextMenuItems;
  };

  getContextMenuItemsKeys = (): string[] => {
    return Array.from(this.contextMenuItems.keys());
  };

  updateContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item);
  };
}
```

## Methods

### addContextMenuItem()

```ts
addContextMenuItem(item: IContextMenuItem): void;
```

Add a new context menu item.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IContextMenuItem`](../items/IContextMenuItem.md) | The context menu item to add, containing key, label, icon, and onClick handler |

#### Returns

`void`

### getContextMenuItems()

```ts
getContextMenuItems(): Map<string, IContextMenuItem>;
```

Get all the context menu items.

#### Returns

`Map`\<`string`, [`IContextMenuItem`](../items/IContextMenuItem.md)\>

A Map containing all registered context menu items, where keys are item identifiers

### getContextMenuItemsKeys()

```ts
getContextMenuItemsKeys(): string[];
```

Get all the keys of the context menu items.

#### Returns

`string`[]

An array containing all registered context menu item keys

### updateContextMenuItem()

```ts
updateContextMenuItem(item: IContextMenuItem): void;
```

Update an existing context menu item.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IContextMenuItem`](../items/IContextMenuItem.md) | The context menu item to update with new properties |

#### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `contextMenuItems` | `Map`\<`string`, [`IContextMenuItem`](../items/IContextMenuItem.md)\> | Stores a collection of elements where the keys are the key parameters from the ContextMenuItem objects. A list for embedding into the context menu is generated based on this collection. |

```mdx-code-block
</APITable>
```
