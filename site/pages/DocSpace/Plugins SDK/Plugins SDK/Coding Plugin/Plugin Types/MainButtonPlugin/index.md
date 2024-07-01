The plugin that is embedded in the main button.

**Interface**: IMainButtonPlugin.

Variables

| Name            | Description                                                                                                                                                                                                                                                    | Type                          | Example |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------- |
| mainButtonItems | Stores a collection of elements where the keys are the *key* parameters from the [MainButtonItem](/docspace/pluginssdk/codingplugin/pluginitems/mainbuttonitem) objects. A list for embedding into the main button menu is generated based on this collection. | collection of IMainButtonItem |         |

## Methods and their description:

* **addMainButtonItem** - add a new main button item.

  Parameters

  | Name            | Description                 | Type            | Example |
  | --------------- | --------------------------- | --------------- | ------- |
  | mainButtonItems | Defines a main button item. | IMainButtonItem |         |

* **getMainButtonItems** - get all the main button items.

* **updateMainButtonItem** - update the main button item.

  Parameters

  | Name            | Description                     | Type            | Example |
  | --------------- | ------------------------------- | --------------- | ------- |
  | mainButtonItems | Defines a new main button item. | IMainButtonItem |         |

Example

```
import {IMainButtonPlugin, IMainButtonItem} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IMainButtonPlugin{
    mainButtonItems: Map<string, IMainButtonItem> = new Map();

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
