---
hide_table_of_contents: true
description: 用破折号包裹所选单元格中的每个字符。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 用破折号包裹字符

将所选单元格中的每个字符用 `"---"` 包裹（例如，`"text"` 变为 `"---t---e---x---t---"`）。空单元格和已包裹的单元格会被跳过。

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

使用方法： [GetSelection](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [ForEach](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 参考 Microsoft VBA 宏代码

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

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/wrap-characters-with-dashes" dark />
