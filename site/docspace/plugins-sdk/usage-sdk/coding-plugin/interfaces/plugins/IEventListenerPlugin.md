# IEventListenerPlugin

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/plugins/IEventListenerPlugin.ts#L68)

The plugin that is given the access to the portal events.

## Example

The plugin class implements `IEventListenerPlugin` and registers a listener for
the room creation event in the constructor. DocSpace calls `getEventListenerItems`
to subscribe the handlers to the portal events.

```typescript
import {
  type IEventListenerItem,
  type IEventListenerPlugin,
  Events,
  Actions,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

class Plugin implements IEventListenerPlugin {
  eventListenerItems: Map<string, IEventListenerItem> = new Map();

  constructor() {
    this.addEventListenerItem({
      key: "room-create-listener",
      eventType: Events.ROOM_CREATE,
      eventHandler: () => {
        return {
          actions: [Actions.showToast],
          toastProps: [{
            type: ToastType.success,
            title: "A new room has been created"
          }]
        };
      }
    });
  }

  addEventListenerItem = (item: IEventListenerItem): void => {
    this.eventListenerItems.set(item.key, item);
  };

  getEventListenerItems = (): Map<string, IEventListenerItem> => {
    return this.eventListenerItems;
  };
}
```

## Methods

### addEventListenerItem()

```ts
addEventListenerItem(item: IEventListenerItem): void;
```

Add a new event listener item to the collection.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `item` | [`IEventListenerItem`](../items/IEventListenerItem.md) | The event listener item to add, containing key, eventType, and eventHandler |

#### Returns

`void`

### getEventListenerItems()

```ts
getEventListenerItems(): Map<string, IEventListenerItem>;
```

Get all registered event listener items.

#### Returns

`Map`\<`string`, [`IEventListenerItem`](../items/IEventListenerItem.md)\>

A Map containing all registered event listener items, where keys are item identifiers

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `eventListenerItems` | `Map`\<`string`, [`IEventListenerItem`](../items/IEventListenerItem.md)\> | Stores a collection of elements where the keys are the key parameters from the EventListenerItem objects. A list of event listeners is generated based on this collection. |

```mdx-code-block
</APITable>
```
