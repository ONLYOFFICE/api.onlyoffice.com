---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/enums/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# ManagerViewMode

The item layout in [SDKMode.Manager](SDKMode.md#Manager) mode.
Passed via [TFrameConfig.viewAs](../type-aliases/TFrameConfig.md#viewAs).

## Example

```typescript
sdk.initFrame({ mode: SDKMode.Manager, viewAs: ManagerViewMode.Table, ... });
```

## Enumeration Members

<APITable>

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Row` | `"row"` | Vertical list — one item per row with details. |
| `Table` | `"table"` | Table with sortable columns. Column visibility is controlled by `viewTableColumns`. |
| `Tile` | `"tile"` | Grid of visual tiles with thumbnails. |

</APITable>
