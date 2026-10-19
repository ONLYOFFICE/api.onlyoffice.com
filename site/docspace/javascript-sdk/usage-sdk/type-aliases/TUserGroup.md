---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TUserGroup

A group the user belongs to, as listed in [TUserInfo.groups](TUserInfo.md#groups).

```ts
type TUserGroup = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | Group ID. |
| `manager` | `string` | ID of the group manager. |
| `name` | `string` | Group name. |

</APITable>
