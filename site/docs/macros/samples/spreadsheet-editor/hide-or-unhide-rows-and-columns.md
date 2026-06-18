---
hide_table_of_contents: true
description: Hide or unhide rows and columns in a spreadsheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Hide or unhide rows and columns

Hides or unhides the specified rows and/or columns in the spreadsheet.

```ts
(function() {
    let sheet = Api.GetActiveSheet();

    // ---change this section according to the data---
    let range = sheet.GetRange("A:P"); 
    let rowsToHide = [5, 8, 9, 12, 14, 16, 21, 22, 31, 32, 33];
    let columnsToHide = [2, 4, 5, 7, 8, 10, 11, 13, 14, 16];
    let hidden = sheet.GetRows(rowsToHide[0]).GetHidden();

    function hideUnhideDetails(hidden) {
        rowsToHide.forEach(row => {
            sheet.GetRows(row).SetHidden(!hidden);
        });
        columnsToHide.forEach(column => {
            range.GetCols(column).SetHidden(!hidden);
        });
    }
    hideUnhideDetails(hidden);
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetRows](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRows.md), [GetHidden](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetHidden.md), [GetCols](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCols.md), [SetHidden](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetHidden.md)

## Reference Microsoft VBA macro code

```vb
Sub HideUnhide()
    Rows("5:10").Hidden = Not Rows("5:10").Hidden
    Columns("B:D").Hidden = Not Columns("B:D").Hidden
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/hide-or-unhide-rows-and-columns" dark />
