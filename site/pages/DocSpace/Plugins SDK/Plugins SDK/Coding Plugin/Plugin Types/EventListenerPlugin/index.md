The plugin that is given the access to the portal events.

**Interface**: IEventListenerPlugin.

Variables

| Name               | Description                                                                                                                                                                                                                                     | Type                             | Example |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| eventListenerItems | Stores a collection of elements where the keys are the *key* parameters from the [EventListenerItem](/docspace/pluginssdk/codingplugin/pluginitems/eventlisteneritem) objects. A list of event listeners is generated based on this collection. | collection of IEventListenerItem |         |

## Methods and their description:

* **addEventListenerItem** - add a new event listener item.

  Parameters

  | Name               | Description                     | Type               | Example |
  | ------------------ | ------------------------------- | ------------------ | ------- |
  | eventListenerItems | Defines an event listener item. | IEventListenerItem |         |

* **getEventListenerItems** - get all the event listener items.

Example

```
import {IEventListenerPlugin, IEventListenerItem} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IEventListenerPlugin {
    eventListenerItems: Map<string, IEventListenerItem> = new Map();

    addEventListenerItem = (item: IEventListenerItem): void => {
        this.eventListenerItems.set(item.key, item);
    };

    getEventListenerItems = (): Map<string, IEventListenerItem> => {
        return this.eventListenerItems;
    };
}
```
