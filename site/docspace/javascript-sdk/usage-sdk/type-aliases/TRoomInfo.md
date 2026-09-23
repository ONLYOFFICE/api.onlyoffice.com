---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TRoomInfo

Room information returned by SDK methods.

```ts
type TRoomInfo = TEntityBase & object;
```

## Type Declaration

<APITable>

| Name | Type | Description |
| ------ | ------ | ------ |
| `denyDownload`? | `boolean` | Whether downloads are denied. |
| `filesCount` | `number` | Number of files inside. |
| `foldersCount` | `number` | Number of sub-folders inside. |
| `indexing`? | `boolean` | Whether VDR indexing is enabled. |
| `inRoom` | `boolean` | Whether the current user is in the room. |
| `isArchive`? | `boolean` | Whether the room is archived. |
| `isAvailable`? | `boolean` | Whether the room is accessible. |
| `isTemplate`? | `boolean` | Whether the room is a template. |
| `lifetime`? | `object` | Auto-deletion settings. |
| `logo` | [`TLogo`](TLogo.md) | Room logo. |
| `new` | `number` | Count of new/unread items. |
| `parentId`? | `number` | Parent folder ID. |
| `passwordProtected`? | `boolean` | Whether the room requires a password. |
| `pinned` | `boolean` | Whether the room is pinned. |
| `private` | `boolean` | Whether the room is private. |
| `quotaLimit`? | `number` | Storage quota in bytes. |
| `roomType` | `number` | Numeric room type. |
| `rootFolderId`? | `number` | Root folder ID. |
| `rootFolderType`? | `number` | Root folder type number. |
| `tags` | `string`[] | Tag names assigned to the room. |
| `usedSpace`? | `number` | Used storage space in bytes. |
| `watermark`? | `object` | Watermark settings. |

</APITable>
