---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TPathParts

Breadcrumb path segment in file/room listing responses.

```ts
type TPathParts = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | Folder/room ID. |
| `roomType` | `number` | Room type (only for room segments). |
| `title` | `string` | Folder/room title. |

</APITable>
