---
sidebar_position: -6
---

The plugin that is embedded in the context menu of files, folders, rooms, images, video (audio).

**Interface**: IContextMenuPlugin.

## Variables

### contextMenuItems

Stores a collection of elements where the keys are the *key* parameters from the [ContextMenuItem](../plugin-items/contextmenuItem.md) objects. A list for embedding into the context menu is generated based on this collection.

Type: collection of IContextMenuItem

## Methods and their description

### addContextMenuItem

Add a new context menu item.

Parameters:

| Name            | Type             | Example | Description                  |
| --------------- | ---------------- | ------- | ---------------------------- |
| contextMenuItem | IContextMenuItem |         | Defines a context menu item. |

### getContextMenuItems

Get all the context menu items.

### getContextMenuItemsKeys

Get all the keys of the context menu items.

### updateContextMenuItem

Update the context menu item.

Parameters:

| Name            | Type             | Example | Description                      |
| --------------- | ---------------- | ------- | -------------------------------- |
| contextMenuItem | IContextMenuItem |         | Defines a new context menu item. |

## Example

``` ts
import {type IContextMenuItem, type IContextMenuPlugin} from "@onlyoffice/docspace-plugin-sdk"

class Plugin implements IContextMenuPlugin {
  contextMenuItems = new Map<string, IContextMenuItem>()

  addContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item)
  }

  getContextMenuItems = (): Map<string, IContextMenuItem> => {
    return this.contextMenuItems
  }

  getContextMenuItemsKeys = (): string[] => {
    const keys = [...this.contextMenuItems].map(([key, item]) => {
      return key
    })
    return keys
  }

  updateContextMenuItem = (item: IContextMenuItem): void => {
    this.contextMenuItems.set(item.key, item)
  }
}
```
