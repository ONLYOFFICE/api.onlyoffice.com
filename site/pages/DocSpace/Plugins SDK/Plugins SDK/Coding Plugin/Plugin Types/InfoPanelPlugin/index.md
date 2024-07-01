The plugin that is embedded as a separate tab in the file info panel.

**Interface**: IInfoPanelPlugin.

Variables

| Name           | Description                                                                                                                                                                                                                                          | Type                         | Example |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------- |
| infoPanelItems | Stores a collection of elements where the keys are the key parameters from the [InfoPanelItem](/docspace/pluginssdk/codingplugin/pluginitems/infopanelitem) objects. A list for embedding into the info panel is generated based on this collection. | collection of IInfoPanelItem |         |

## Methods and their description:

* **addInfoPanelItem** - add a new info panel item.

  Parameters

  | Name          | Description                 | Type           | Example |
  | ------------- | --------------------------- | -------------- | ------- |
  | infoPanelItem | Defines an info panel item. | IInfoPanelItem |         |

* **getInfoPanelItems** - get all the info panel items.

* **updateInfoPanelItem** - update the info panel item.

  Parameters

  | Name          | Description                    | Type           | Example |
  | ------------- | ------------------------------ | -------------- | ------- |
  | infoPanelItem | Defines a new info panel item. | IInfoPanelItem |         |

Example

```
import {IInfoPanelPlugin, IInfoPanelItem} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IInfoPanelPlugin {
    infoPanelItems: Map<string, IInfoPanelItem> = new Map();

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
