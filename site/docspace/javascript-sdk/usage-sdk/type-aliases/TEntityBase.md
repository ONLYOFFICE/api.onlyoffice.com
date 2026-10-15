---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TEntityBase

Common fields shared by file, folder, and room metadata.
Extended by [TFileInfo](TFileInfo.md), [TFolderInfo](TFolderInfo.md), and [TRoomInfo](TRoomInfo.md).

```ts
type TEntityBase = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `access` | `number` | Numeric access level. |
| `canShare` | `boolean` | Whether the entity can be shared. |
| `created` | `string` | ISO 8601 creation date. |
| `createdBy` | [`TCreatedBy`](TCreatedBy.md) | Creator reference. |
| `id` | `number` | Entity ID. |
| `mute` | `boolean` | Whether notifications are muted. |
| `security` | `Record`\<`string`, `boolean`\> | Permission flags. |
| `shared` | `boolean` | Whether the entity is shared. |
| `title` | `string` | Display name. |
| `updated` | `string` | ISO 8601 last update date. |
| `updatedBy` | [`TCreatedBy`](TCreatedBy.md) | Last editor reference. |

</APITable>
