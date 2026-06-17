---
hide_table_of_contents: true
description: 冻结电子表格中的行和列。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 冻结窗格

取消冻结窗格，将视口导航到目标单元格 (A10)，然后在不同单元格 (D10) 处重新冻结窗格。

```ts
(function () {
    let worksheet = Api.GetActiveSheet();

    // 步骤 1：取消冻结窗格，使视图可以自由滚动
    worksheet.GetFreezePanes().Unfreeze();

    // 步骤 2：选择目标单元格
    worksheet.GetRange("A10").Select();

    // 步骤 3：在 D10 处重新冻结
    worksheet
        .GetFreezePanes()
        .FreezeAt(worksheet.GetRange("D10")); // 要冻结窗格的单元格
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetFreezePanes](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetFreezePanes.md), [Unfreeze](../../../office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/Unfreeze.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Select](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md), [FreezeAt](../../../office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/FreezeAt.md)

## 参考 Microsoft VBA 宏代码

```vb
Sub NavigateAndRefreeze()
    ActiveWindow.FreezePanes = False
    Application.Goto Reference:=Range("A10"), Scroll:=True
    Range("D10").Select
    ActiveWindow.FreezePanes = True
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/freeze-panes" dark />
