---
hide_table_of_contents: true
description: Wrap each character in selected cells with dashes.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Wrap characters with dashes

Wraps each character in the selected cells with `"---"` (for example, `"text"` becomes `"---t---e---x---t---"`). Empty cells and cells that are already wrapped are skipped.

```ts
(function () {

    let selection = Api.GetSelection();

    selection.ForEach(function (cell) {
        let cellValue = cell.GetValue();

        // Skip empty cells
        if (cellValue === null || cellValue === undefined || cellValue === "") {
            return;
        }

        // Convert the cell value to a string
        cellValue = String(cellValue);

        // Skip cells that are already wrapped
        if (/^---(?:.---)+$/.test(cellValue)) {
            return;
        }

        // Wrap each character in the cell value with "---"
        let sTemp = "---";
        for (let c = 0; c < cellValue.length; c++) {
            sTemp += cellValue.charAt(c) + "---";
        }

        cell.SetValue(sTemp);
    });
})();
```

Methods used: [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [ForEach](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub Example()
    Dim Cell As Range
    Dim sTemp As String
    Dim C As Integer
    For Each Cell In Selection
        sTemp = "---"
        For C = 1 To Len(Cell)
            sTemp = sTemp & Mid(Cell, C, 1) & "---"
        Next
        Cell.Value = sTemp
    Next
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/wrap-characters-with-dashes" dark />
