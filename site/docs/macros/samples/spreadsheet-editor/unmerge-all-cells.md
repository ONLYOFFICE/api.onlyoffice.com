---
hide_table_of_contents: true
description: Unmerge all merged cells in a spreadsheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Unmerge all cells

Unmerges all the merged cells in the active worksheet.

:::note
This macro was converted from VBA code using the [AI plugin](../../guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin).
:::

```ts
(function(){
    // Get the active sheet
    var oWorksheet = Api.GetActiveSheet();
    
    // Get all cells in the worksheet by getting the used range
    var oUsedRange = oWorksheet.GetUsedRange();
    
    // Check if there is any used range
    if (oUsedRange) {
        // Unmerge all cells in the used range
        oUsedRange.UnMerge();
    }
    
    // Alternative approach: Get the entire sheet range and unmerge
    // This ensures all possible merged cells are unmerged
    var oRange = oWorksheet.GetRange("A1:XFD1048576");
    oRange.UnMerge();
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [UnMerge](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md)

## Reference Microsoft VBA macro code

``` vb
Sub UnmergeAllCells()
    ActiveSheet.Cells.UnMerge
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/unmerge-all-cells" dark />
