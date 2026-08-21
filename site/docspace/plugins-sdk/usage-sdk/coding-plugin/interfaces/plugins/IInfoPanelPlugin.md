# IInfoPanelPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IInfoPanelPlugin.ts#L88)

The plugin that is embedded as a separate tab in the file info panel.

## Example

The plugin class implements `IInfoPanelPlugin` and registers a "Document Info" tab
in the constructor. DocSpace calls `getInfoPanelItems` to embed the tabs into the
file info panel; the tab UI is described by the item's `body` box.

```typescript
import {
  type IInfoPanelItem,
  type IInfoPanelPlugin,
  Components,
  Actions,
  ToastType,
  FilesType,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IInfoPanelPlugin {
  infoPanelItems: Map<string, IInfoPanelItem> = new Map();

  constructor() {
    this.addInfoPanelItem({
      key: "doc-info",
      subMenu: {
        name: "Document Info",
        onClick: async (id) => {
          try {
            await getDocumentInfo(id);
          } catch (error) {
            return {
              actions: [Actions.showToast],
              toastProps: [{
                type: ToastType.error,
                title: "Unable to load the document info"
              }]
            };
          }
        }
      },
      body: {
        children: [
          {
            component: Components.text,
            props: { text: "Document details will be displayed here" }
          }
        ]
      },
      filesType: [FilesType.file]
    });
  }

  addInfoPanelItem = (item: IInfoPanelItem): void => {
    this.infoPanelItems.set(item.key, item);
  };

  getInfoPanelItems = (): Map<string, IInfoPanelItem> => {
    return this.infoPanelItems;
  };

  updateInfoPanelItem = (item: IInfoPanelItem): void => {
    this.infoPanelItems.set(item.key, item);
  };
}
```

## Methods

### addInfoPanelItem()

```ts
addInfoPanelItem(item: IInfoPanelItem): void;
```

Add a new info panel item

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IInfoPanelItem`](../items/IInfoPanelItem.md) |

#### Returns

`void`

### getInfoPanelItems()

```ts
getInfoPanelItems(): Map<string, IInfoPanelItem>;
```

Get all the info panel items

#### Returns

`Map`\<`string`, [`IInfoPanelItem`](../items/IInfoPanelItem.md)\>

### updateInfoPanelItem()

```ts
updateInfoPanelItem(item: IInfoPanelItem): void;
```

Update the info panel item

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`IInfoPanelItem`](../items/IInfoPanelItem.md) |

#### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `infoPanelItems` | `Map`\<`string`, [`IInfoPanelItem`](../items/IInfoPanelItem.md)\> | Stores a collection of elements where the keys are the key parameters from the InfoPanelItem objects. A list for embedding into the info panel is generated based on this collection. |

```mdx-code-block
</APITable>
```
