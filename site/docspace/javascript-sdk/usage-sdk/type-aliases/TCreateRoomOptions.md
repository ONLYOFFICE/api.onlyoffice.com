---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TCreateRoomOptions

Optional settings for [SDKInstance.createRoom](../classes/SDKInstance.md#createroom).

```ts
type TCreateRoomOptions = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `color`? | `string` | Accent color (hex). |
| `cover`? | `string` | Cover image URL. |
| `denyDownload`? | `boolean` | Restrict file downloads (VDR). |
| `indexing`? | `boolean` | Enable VDR file indexing. |
| `quota`? | `number` | Storage quota in bytes. |
| `tags`? | `string`[] | Tag names to assign to the room. |

</APITable>
