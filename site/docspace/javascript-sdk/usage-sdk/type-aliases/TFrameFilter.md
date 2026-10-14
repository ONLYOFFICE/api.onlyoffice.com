---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TFrameFilter

Filter and pagination parameters for the file list in [SDKMode.Manager](../enumerations/SDKMode.md#Manager) mode.
Passed via [TFrameConfig.filter](TFrameConfig.md#filter) and accepted by [SDKInstance.getRooms](../classes/SDKInstance.md#getrooms).

```ts
type TFrameFilter = object;
```

## Examples

```typescript
sdk.initFrame({
  mode: "manager",
  filter: { count: "50", sortBy: "AZ", sortOrder: "ascending" },
  ...
});
```

Only the rooms of one room group, e.g. the rooms attached to a CRM deal.
```typescript
sdk.initManager({
  frameId: "ds-frame",
  src: "https://portal.example.com",
  rootPath: "/rooms/shared/",
  filter: { groupId: "42" },
});
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `count`? | `string` | Items per page. Default: `"100"`. |
| `folder`? | `string` | Target folder ID. Set automatically when [TFrameConfig.id](TFrameConfig.md#id) is provided in manager mode. |
| `groupId`? | `string` | Room group ID (`GET /api/2.0/files/group`). On the rooms list of [SDKMode.Manager](../enumerations/SDKMode.md#Manager) (`rootPath` `/rooms/shared/`) only the rooms of that group are shown, and the group is pinned: search and filters inside the frame stay within it and the group chips are hidden. Also narrows [SDKInstance.getRooms](../classes/SDKInstance.md#getrooms). Requires ONLYOFFICE Apps 4.0. Unset by default. |
| `page`? | `string` | Page number (1-based). Default: `"1"`. |
| `search`? | `string` | Search query. Empty string = no search. |
| `sortBy`? | [`TFilterSortBy`](TFilterSortBy.md) | Sort criterion. See [FilterSortBy](../enumerations/FilterSortBy.md). Default: [FilterSortBy.ModifiedDate](../enumerations/FilterSortBy.md#ModifiedDate). |
| `sortOrder`? | [`TFilterSortOrder`](TFilterSortOrder.md) | Sort direction. See [FilterSortOrder](../enumerations/FilterSortOrder.md). Default: [FilterSortOrder.Descending](../enumerations/FilterSortOrder.md#Descending). |
| `withSubfolders`? | `boolean` | Include sub-folder contents in search results. Default: `false`. |

</APITable>
