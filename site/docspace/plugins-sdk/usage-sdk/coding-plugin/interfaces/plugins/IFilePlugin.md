# IFilePlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IFilePlugin.ts#L75)

The plugin that can interact with the file list.

## Example

The plugin class implements `IFilePlugin` and registers a handler for the ".drawio"
extension in the constructor. DocSpace calls `getFileItems` to hook the plugin into
the file list: files with the registered extension get the custom icon, and clicking
them triggers the item's `onClick`.

```typescript
import {
  type IFileItem,
  type IFilePlugin,
  Actions,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IFilePlugin {
  fileItems: Map<string, IFileItem> = new Map();

  constructor() {
    this.addFileItem({
      extension: ".drawio",
      fileTypeName: "Diagram",
      fileRowIcon: "diagram-32.svg",
      fileTileIcon: "diagram-96.svg",
      onClick: async (file) => {
        await openDiagramEditor(file.id);
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: `Opening ${file.title}`
          }]
        };
      }
    });
  }

  addFileItem = (item: IFileItem): void => {
    this.fileItems.set(item.extension, item);
  };

  getFileItems = (): Map<string, IFileItem> => {
    return this.fileItems;
  };

  updateFileItem = (item: IFileItem): void => {
    this.fileItems.set(item.extension, item);
  };
}
```

## Methods

### addFileItem()

```ts
addFileItem(item: IFileItem): void;
```

Add a new item for interactions with files.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IFileItem`](../items/IFileItem.md) | The file item to add, containing the file extension, onClick handler, and optional display and access options |

#### Returns

`void`

### getFileItems()

```ts
getFileItems(): Map<string, IFileItem>;
```

Get all the items for interactions with files.

#### Returns

`Map`\<`string`, [`IFileItem`](../items/IFileItem.md)\>

A Map containing all registered file items, where keys are item identifiers

### updateFileItem()

```ts
updateFileItem(item: IFileItem): void;
```

Update an existing file interaction item.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IFileItem`](../items/IFileItem.md) | The file item to update with new properties |

#### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `fileItems` | `Map`\<`string`, [`IFileItem`](../items/IFileItem.md)\> | Stores a collection of elements where the keys are the key parameters from the FileItem objects. A list for hooking interactions with files is generated based on this collection. |

```mdx-code-block
</APITable>
```
