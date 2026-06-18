---
hide_table_of_contents: true
description: Unmerge cells in a specified range.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Unmerge cell range

Unmerges the selected cell range.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("C5:D10").UnMerge();
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [UnMerge](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("C5:D10").UnMerge
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/unmerge-cell-range" dark />
