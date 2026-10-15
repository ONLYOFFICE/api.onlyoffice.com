---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# RoomType

Room types accepted by [SDKInstance.createRoom](../classes/SDKInstance.md#createroom) and returned as `roomType` in [TRoomInfo](../type-aliases/TRoomInfo.md)
and [TSelectedRoom.roomType](../type-aliases/TSelectedRoom.md#roomType). The numeric values are the portal's `RoomType` API values.

## Example

```typescript
import { RoomType } from '@onlyoffice/docspace-sdk-js';

const room = await instance.createRoom('Contracts', RoomType.Custom);
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Ai` | `9` | AI room: an AI agent works with the room's files. API value: `9` (`AiRoom`). |
| `Collaboration` | `2` | Collaboration room: co-editing of documents. API value: `2` (`EditingRoom`). |
| `Custom` | `5` | Custom room: every access level (including reviewing and commenting) can be assigned. API value: `5` (`CustomRoom`). |
| `FormFilling` | `1` | Form filling room: a room for filling out and collecting PDF forms. API value: `1` (`FillingFormsRoom`). |
| `Public` | `6` | Public room: files are shared through external links. API value: `6` (`PublicRoom`). |
| `VirtualData` | `8` | Virtual data room: indexing, watermarks and download restrictions. API value: `8` (`VirtualDataRoom`). |

</APITable>
