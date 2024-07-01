The plugin that is embedded in the context menu of files, folders, rooms, images, video (audio).

**Interface**: IContextMenuPlugin.

Variables

| Name             | Description                                                                                                                                                                                                                                                  | Type                           | Example |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------- |
| contextMenuItems | Stores a collection of elements where the keys are the *key* parameters from the [ContextMenuItem](/docspace/pluginssdk/codingplugin/pluginitems/contextmenuitem) objects. A list for embedding into the context menu is generated based on this collection. | collection of IContextMenuItem |         |

## Methods and their description:

* **addContextMenuItem** - add a new context menu item.

  Parameters

  | Name            | Description                  | Type             | Example |
  | --------------- | ---------------------------- | ---------------- | ------- |
  | contextMenuItem | Defines a context menu item. | IContextMenuItem |         |

* **getContextMenuItems** - get all the context menu items.

* **getContextMenuItemsKeys** - get all the keys of the context menu items.

* **updateContextMenuItem** - update the context menu item.

  Parameters

  | Name            | Description                      | Type             | Example |
  | --------------- | -------------------------------- | ---------------- | ------- |
  | contextMenuItem | Defines a new context menu item. | IContextMenuItem |         |

Example

```
import {IContextMenuPlugin, IContextMenuItem} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IContextMenuPlugin {
    contextMenuItems: Map<string, IContextMenuItem> = new Map();

    addContextMenuItem = (item: IContextMenuItem): void => {
        this.contextMenuItems.set(item.key, item);
    };

    getContextMenuItems = (): Map<string, IContextMenuItem> => {
        return this.contextMenuItems;
    };

    getContextMenuItemsKeys = (): string[] => {
        const keys = Array.from(this.contextMenuItems).map(([key, item]) => key);

        return keys;
    };

    updateContextMenuItem = (item: IContextMenuItem): void => {
        this.contextMenuItems.set(item.key, item);
    };
}
```
