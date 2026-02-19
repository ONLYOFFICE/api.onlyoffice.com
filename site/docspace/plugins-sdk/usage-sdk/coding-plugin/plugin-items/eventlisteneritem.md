---
sidebar_position: -1
---

# EventListenerItem

Describes an item that allows the plugin to respond to the built-in DocSpace events (creating a room/file, etc.). Each event can have several listeners. When the event is activated, the dialog cannot be hooked.

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| Parameter    | Type                                                                                                       | Example                                                           | Description                                                                                                                                                                                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key          | string                                                                                                     | `"event-listener-item"`                                           | Defines the unique item identifier used by the service to recognize the item.                                                                                                                                                                                                                            |
| eventType    | [Events](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Events.ts)                | `Events.CREATE`                                                   | Defines the event type which will be executed. Presently the following events are available: **CREATE, RENAME, ROOM\_CREATE, ROOM\_EDIT, CHANGE\_COLUMN, CHANGE\_USER\_TYPE, CREATE\_PLUGIN\_FILE**.                                                                                                     |
| eventHandler | func                                                                                                       | `() => {}`                                                        | Defines a function that will be executed when the event is triggered. This function can be asynchronous. After the event is executed, only updating the items or displaying toast is possible, other actions are blocked.                                                                                |
| usersType    | array of [UsersType](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts) | `[UsersType.owner, UsersType.docSpaceAdmin, UsersType.roomAdmin]` | Defines the types of users who will see the current item in the context menu. Currently the following user types are available: **owner**, **docSpaceAdmin**, **roomAdmin**, **collaborator**, **user**. If this parameter is not specified, then the current item will be displayed for all user types. |
| devices      | array of [Devices](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/Devices.ts)     | `[Devices.desktop]`                                               | Defines the types of devices where the current item will be displayed in the context menu. At the moment the following device types are available: **mobile**, **tablet**, **desktop**. If this parameter is not specified, then the current item will be displayed in any device types.                 |

```mdx-code-block
</APITable>
```

## Example

``` ts
import {Events, type IEventListenerItem} from "@onlyoffice/docspace-plugin-sdk"

const eventItem: IEventListenerItem = {
  key: "event-listener-item",
  eventType: Events.CREATE,
  eventHandler: () => {},
}
```
