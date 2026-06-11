---
sidebar_position: 0
---

# ArticleButtonPlugin

The plugin that adds custom button items to the article sidebar. Article button items appear as custom plugin components above the DevTools section. A maximum of 5 items can be displayed across all plugins.

**Interface**: IArticleButtonPlugin.

## Variables

### articleButtonItems

Stores a collection of elements where the keys are the *key* parameters from the [ArticleButtonItem](../plugin-items/articlebuttonitem.md) objects. A list for embedding into the article sidebar is generated based on this collection.

Type: collection of IArticleButtonItem

## Methods and their description

### addArticleButtonItem

Add a new article button item.

Parameters:

| Name              | Type               | Example | Description                    |
| ----------------- | ------------------ | ------- | ------------------------------ |
| articleButtonItem | IArticleButtonItem |         | Defines an article button item. |

### getArticleButtonItems

Get all the article button items.

### updateArticleButtonItem

Update an existing article button item.

Parameters:

| Name              | Type               | Example | Description                        |
| ----------------- | ------------------ | ------- | ---------------------------------- |
| articleButtonItem | IArticleButtonItem |         | Defines a new article button item. |

## Example

``` ts
import {type IArticleButtonItem, type IArticleButtonPlugin} from "@onlyoffice/docspace-plugin-sdk"

class Plugin implements IArticleButtonPlugin {
  articleButtonItems = new Map<string, IArticleButtonItem>()

  addArticleButtonItem = (item: IArticleButtonItem): void => {
    this.articleButtonItems.set(item.key, item)
  }

  getArticleButtonItems = (): Map<string, IArticleButtonItem> => {
    return this.articleButtonItems
  }

  updateArticleButtonItem = (item: IArticleButtonItem): void => {
    this.articleButtonItems.set(item.key, item)
  }
}
```
