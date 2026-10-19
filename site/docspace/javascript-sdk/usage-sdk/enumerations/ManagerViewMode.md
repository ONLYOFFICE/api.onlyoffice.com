---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# ManagerViewMode

The item layout in [SDKMode.Manager](SDKMode.md#Manager) mode.
Passed via [TFrameConfig.viewAs](../type-aliases/TFrameConfig.md#viewAs).

## Example

```typescript
sdk.init({ mode: SDKMode.Manager, viewAs: ManagerViewMode.Table, ... });
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Row` | `"row"` | Vertical list — one item per row with details. |
| `Table` | `"table"` | Table with sortable columns. Column visibility is controlled by [TFrameConfig.viewTableColumns](../type-aliases/TFrameConfig.md#viewTableColumns). |
| `Tile` | `"tile"` | Grid of visual tiles with thumbnails. |

</APITable>
