# IArticleNavigationPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IArticleNavigationPlugin.ts#L58)

Describes a plugin that adds navigation items to the article sidebar.
Each registered item appears as a first-class navigation entry (icon + label)
alongside built-in sections like Rooms and Documents.
Clicking the item navigates to a dedicated plugin section page
where the item's `component` is rendered.

## Example

The plugin class implements `IArticleNavigationPlugin`. DocSpace calls
`getArticleNavigationItems` to embed the items into the article sidebar.

```typescript
import {
  type IArticleNavigationItem,
  type IArticleNavigationPlugin,
  type IPlugin,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IPlugin, IArticleNavigationPlugin {
  articleNavigationItems: Map<string, IArticleNavigationItem> = new Map();

  addArticleNavigationItem = (item: IArticleNavigationItem): void => {
    this.articleNavigationItems.set(item.key, item);
  };

  getArticleNavigationItems = (): Map<string, IArticleNavigationItem> => {
    return this.articleNavigationItems;
  };

  updateArticleNavigationItem = (item: IArticleNavigationItem): void => {
    this.articleNavigationItems.set(item.key, item);
  };
}
```

## Methods

### addArticleNavigationItem()

```ts
addArticleNavigationItem(item: IArticleNavigationItem): void;
```

Add a new navigation item to the plugin's collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IArticleNavigationItem`](../items/IArticleNavigationItem.md) | The navigation item to add |

#### Returns

`void`

### getArticleNavigationItems()

```ts
getArticleNavigationItems(): Map<string, IArticleNavigationItem>;
```

Get all the navigation items provided by the plugin.

#### Returns

`Map`\<`string`, [`IArticleNavigationItem`](../items/IArticleNavigationItem.md)\>

A Map containing all registered navigation items

### updateArticleNavigationItem()

```ts
updateArticleNavigationItem(item: IArticleNavigationItem): void;
```

Update an existing navigation item in the plugin's collection.
Dispatch the [`Actions.updateArticleNavigationItems`](../../enums/Actions.md#updatearticlenavigationitems) action afterwards to apply it.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IArticleNavigationItem`](../items/IArticleNavigationItem.md) | The navigation item to update |

#### Returns

`void`

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `articleNavigationItems` | `Map`\<`string`, [`IArticleNavigationItem`](../items/IArticleNavigationItem.md)\> | Stores a collection of navigation items where the keys are the `key` values from the IArticleNavigationItem objects. |

```mdx-code-block
</APITable>
```
