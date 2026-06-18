---
hide_table_of_contents: true
description: Find the next blank row in a spreadsheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Next blank row

Finds the next available blank row in a worksheet. This macro allows you to get the blank at the very end of your data (not between it).

```ts
(function () 
{
    // Getting the active sheet
    let activeSheet = Api.ActiveSheet;
    // Minimum row index
    let indexRowMin = 0;
    // Maximum row index
    let indexRowMax = 1048576;
    // Column 'A'
    let indexCol = 0;
    // Row index for empty cell search
    let indexRow = indexRowMax;
    for (; indexRow >= indexRowMin; --indexRow) {
        // Getting the cell
        let range = activeSheet.GetRangeByNumber(indexRow, indexCol);
        // Checking the value
        if (range.GetValue() && indexRow !== indexRowMax) {
            range = activeSheet.GetRangeByNumber(indexRow + 1, indexCol);
            range.Select();
            break;
        }
    }
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [Select](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md)

## Reference Microsoft VBA macro code

[This VBA macro](https://www.teachexcel.com/excel-tutorial/find-the-next-blank-row-with-vba-macros-in-excel_1261.html) was used as a base.

``` vb
Sub example()
    Range("A" & Rows.Count).End(xlUp).Offset(1).Select
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/next-blank-row" dark />
