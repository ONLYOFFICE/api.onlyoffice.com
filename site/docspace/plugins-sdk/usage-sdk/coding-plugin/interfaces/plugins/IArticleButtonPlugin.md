# IArticleButtonPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IArticleButtonPlugin.ts#L55)

Describes a plugin that adds custom button items to the article sidebar.
Article button items appear as custom plugin components above the DevTools section.
Maximum 5 items can be displayed across all plugins.

## Example

The plugin class implements `IArticleButtonPlugin`. DocSpace calls
`getArticleButtonItems` to embed the buttons into the article sidebar.

```typescript
import {
  type IArticleButtonItem,
  type IArticleButtonPlugin,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IArticleButtonPlugin {
  articleButtonItems: Map<string, IArticleButtonItem> = new Map();

  addArticleButtonItem = (item: IArticleButtonItem): void => {
    this.articleButtonItems.set(item.key, item);
  };

  getArticleButtonItems = (): Map<string, IArticleButtonItem> => {
    return this.articleButtonItems;
  };

  updateArticleButtonItem = (item: IArticleButtonItem): void => {
    this.articleButtonItems.set(item.key, item);
  };
}
```

## Methods

### addArticleButtonItem()

```ts
addArticleButtonItem(item: IArticleButtonItem): void;
```

Add a new article button item to the plugin's collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IArticleButtonItem`](../items/IArticleButtonItem.md) | The article button item to add |

#### Returns

`void`

### getArticleButtonItems()

```ts
getArticleButtonItems(): Map<string, IArticleButtonItem>;
```

Get all the article button items provided by the plugin.
Each item will be displayed as a custom component in the article sidebar.

#### Returns

`Map`\<`string`, [`IArticleButtonItem`](../items/IArticleButtonItem.md)\>

A Map containing all registered article button items, where keys are item identifiers

### updateArticleButtonItem()

```ts
updateArticleButtonItem(item: IArticleButtonItem): void;
```

Update an existing article button item in the plugin's collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IArticleButtonItem`](../items/IArticleButtonItem.md) | The article button item to update with new properties |

#### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `articleButtonItems` | `Map`\<`string`, [`IArticleButtonItem`](../items/IArticleButtonItem.md)\> | Stores a collection of elements where the keys are the key parameters from the ArticleButtonItem objects. A list for article button items is generated based on this collection. |

```mdx-code-block
</APITable>
```
