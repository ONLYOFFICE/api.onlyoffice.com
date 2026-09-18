---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TMessageData

The message data structure.

```ts
type TMessageData = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `commandData`? | `object` | The command data payload. |
| `commandName` | `string` | The name of the command to execute in the DocSpace frame. |
| `error`? | `object` | The error information. |
| `error.code`? | `number` | The error code. |
| `error.message` | `string` | The error message. |
| `eventReturnData`? | [`TEventReturnData`](TEventReturnData.md) | The event return data. |
| `frameId` | `string` | The frame unique identifier. |
| `methodReturnData`? | `object` | The method return data. |
| `type` | [`TMessageTypes`](TMessageTypes.md) | The message type. |

</APITable>
