---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFrameFilter

The frame filter criteria.

```ts
type TFrameFilter = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `count`? | `string` | The number of files and folders displayed on one page. |
| `folder`? | `string` | The target folder. |
| `page`? | `string` | The page number to start from. |
| `search`? | `string` | The query used to search for files and folders. |
| `sortBy`? | [`TFilterSortBy`](TFilterSortBy.md) | The parameter used to sort the list of files and folders. |
| `sortOrder`? | [`TFilterSortOrder`](TFilterSortOrder.md) | The sort direction for the list of files and folders. |
| `withSubfolders`? | `boolean` | Specifies whether to exclude subfolders when searching for files. |

</APITable>
