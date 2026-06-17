---
hide_table_of_contents: true
description: 隐藏或取消隐藏电子表格中的行和列。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 隐藏或取消隐藏行和列

在电子表格中隐藏或取消隐藏指定的行和/或列。

```ts
(function() {
    let sheet = Api.GetActiveSheet();

    // ---根据数据更改此部分---
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

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetRows](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRows.md), [GetHidden](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetHidden.md), [GetCols](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetCols.md), [SetHidden](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetHidden.md)

## 参考 Microsoft VBA 宏代码

```vb
Sub HideUnhide()
    Rows("5:10").Hidden = Not Rows("5:10").Hidden
    Columns("B:D").Hidden = Not Columns("B:D").Hidden
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/hide-or-unhide-rows-and-columns" dark />
