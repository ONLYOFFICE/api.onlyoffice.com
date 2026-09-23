---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TSelectedRoom

One selected room in the [SDKMode.RoomSelector](../enumerations/SDKMode.md#RoomSelector) payload. [TFrameEvents.onSelectCallback](TFrameEvents.md#onSelectCallback)
receives an **array** of these; other fields of the selector row pass through unchanged.

```ts
type TSelectedRoom = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `icon`? | `string` | Room icon URL. |
| `id` | `string` \| `number` | Room ID. |
| `label` | `string` | Room title. |
| `requestTokens`? | [`TRequestTokenInfo`](TRequestTokenInfo.md)[] | External links of a public or shared room; `requestTokens[0].requestToken` is the key for [SDKMode.PublicRoom](../enumerations/SDKMode.md#PublicRoom). Absent for rooms without links. |
| `roomType`? | `number` | Numeric room type. |
| `shared`? | `boolean` | Whether the room has an external link. |

</APITable>
