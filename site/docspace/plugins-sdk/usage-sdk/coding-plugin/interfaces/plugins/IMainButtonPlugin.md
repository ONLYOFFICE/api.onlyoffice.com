# IMainButtonPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IMainButtonPlugin.ts#L73)

The plugin that can add items to the main button menu.

## Example

The plugin class implements `IMainButtonPlugin` and registers an "Export to PDF"
action in the constructor. DocSpace calls `getMainButtonItems` to embed the items
into the **More** section of the main button menu inside a room.

```typescript
import {
  type IMainButtonItem,
  type IMainButtonPlugin,
  Actions,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IMainButtonPlugin {
  mainButtonItems: Map<string, IMainButtonItem> = new Map();

  constructor() {
    this.addMainButtonItem({
      key: "export-pdf",
      label: "Export to PDF",
      icon: "pdf-icon.svg",
      onItemClick: async (id) => {
        await exportToPdf(id);
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "PDF created"
          }]
        };
      }
    });
  }

  addMainButtonItem = (item: IMainButtonItem): void => {
    this.mainButtonItems.set(item.key, item);
  };

  getMainButtonItems = (): Map<string, IMainButtonItem> => {
    return this.mainButtonItems;
  };

  updateMainButtonItem = (item: IMainButtonItem): void => {
    this.mainButtonItems.set(item.key, item);
  };
}
```

## Methods

### addMainButtonItem()

```ts
addMainButtonItem(item: IMainButtonItem): void;
```

Add a new item to the main button menu.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IMainButtonItem`](../items/IMainButtonItem.md) | The main button item to add, containing key, label, icon, and onClick handler |

#### Returns

`void`

### getMainButtonItems()

```ts
getMainButtonItems(): Map<string, IMainButtonItem>;
```

Get all registered main button menu items.

#### Returns

`Map`\<`string`, [`IMainButtonItem`](../items/IMainButtonItem.md)\>

A Map containing all registered main button items, where keys are item identifiers

### updateMainButtonItem()

```ts
updateMainButtonItem(item: IMainButtonItem): void;
```

Update an existing main button menu item.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IMainButtonItem`](../items/IMainButtonItem.md) | The main button item to update with new properties |

#### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `mainButtonItems` | `Map`\<`string`, [`IMainButtonItem`](../items/IMainButtonItem.md)\> | Stores a collection of elements where the keys are the key parameters from the MainButtonItem objects. A list of main button menu items is generated based on this collection. |

```mdx-code-block
</APITable>
```
