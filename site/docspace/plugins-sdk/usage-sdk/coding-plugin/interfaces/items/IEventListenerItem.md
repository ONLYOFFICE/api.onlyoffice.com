# IEventListenerItem

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/items/IEventListenerItem.ts#L110)

Describes an event listener that reacts to portal events.

Items are registered by a plugin implementing
[`IEventListenerPlugin`](../plugins/IEventListenerPlugin.md).

## Examples

Automatic room categorization with role-based access

```typescript
const roomCategorizer: IEventListenerItem = {
  key: "auto-categorize-room",
  eventType: Events.ROOM_CREATE,
  eventHandler: async () => {
    try {
      await categorizationService.processNewRoom();
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.success,
          title: "Room categorized successfully | Category: New Category | Status: Success"
        }]
      };
    } catch (error) {
      return {
        actions: [Actions.showToast],
        toastProps: [{
          type: ToastType.warning,
          title: "Error occurred during categorization | Status: Failed"
        }]
      };
    }
  },
  usersTypes: [UsersType.docSpaceAdmin, UsersType.roomAdmin],
  devices: [Devices.desktop]
}
```

File rename audit logging with permission control

```typescript
const fileRenameTracker: IEventListenerItem = {
  key: "file-rename-tracker",
  eventType: Events.RENAME,
  eventHandler: async () => {
    try {
      await auditService.logFileRename();
      return {
        actions: [Actions.updateItems],
        itemList: await getUpdatedFileList()
      };
    } catch (error) {
      console.error("Failed to log file rename:", error);
    }
  },
  usersTypes: [
    UsersType.owner,
    UsersType.docSpaceAdmin,
    UsersType.roomAdmin,
    UsersType.collaborator
  ]
}
```

Device-aware column layout change notification

```typescript
const columnChangeNotifier: IEventListenerItem = {
  key: "column-change-notifier",
  eventType: Events.CHANGE_COLUMN,
  eventHandler: () => {
    return {
      actions: [Actions.showToast],
      toastProps: [{
        type: ToastType.info,
        title: "Column layout updated successfully | New layout applied"
      }]
    };
  },
  devices: [Devices.desktop, Devices.tablet]
}
```

## Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The unique item identifier used by the service to recognize the item |
| `eventType` | [`Events`](../../enums/Events.md) | The event type which will be executed. Presently the following events are available: CREATE, RENAME, ROOM_CREATE, ROOM_EDIT, CHANGE_COLUMN, CHANGE_USER_TYPE, CREATE_PLUGIN_FILE. |
| `eventHandler` | () => `void` \| `Promise`\<`void`\> \| [`IMessage`](../utils.md#imessage) \| `Promise`\<[`IMessage`](../utils.md#imessage)\> | A function that will be executed when the event is triggered. This function can be asynchronous. After the event is executed, only updating the items or displaying toast is possible, other actions are blocked. |
| `usersTypes?` | [`UsersType`](../../enums/UsersType.md)[] | The types of users who have the access to the current item. Currently the following user types are available: owner, docSpaceAdmin, roomAdmin, collaborator, user. If this parameter is not specified, then the current item will be available for all user types. |
| `devices?` | [`Devices`](../../enums/Devices.md)[] | The types of devices where the current item will be available. At the moment the following device types are available: mobile, tablet, desktop. If this parameter is not specified, then the current item will be available in any device types. |

```mdx-code-block
</APITable>
```
