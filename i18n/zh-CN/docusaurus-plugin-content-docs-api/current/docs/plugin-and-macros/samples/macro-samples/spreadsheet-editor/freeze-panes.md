---
hide_table_of_contents: true
---

# 导航到单元格并重置冻结窗格

取消冻结窗格，将视口导航到目标单元格 (A10)，然后在不同单元格 (D10) 处重新冻结窗格。

```ts
(function () {
    let worksheet = Api.GetActiveSheet();

    // 步骤 1：取消冻结窗格，使视图可以自由滚动
    worksheet.GetFreezePanes().Unfreeze();

    // 步骤 2：选择目标单元格，同时重置视口
    worksheet.GetRange("A10").Select();

    // 步骤 3：视图稳定后，在 D10 处重新冻结
    // 需要使用超时函数，因为 Select() 会异步更新视口
    setTimeout(function () {
        worksheet
            .GetFreezePanes()
            .FreezeAt(worksheet.GetRange("D10")); // 要冻结窗格的单元格
    }, 100);
})();
```

使用方法: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetFreezePanes](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetFreezePanes.md), [Unfreeze](/docs/office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/Unfreeze.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Select](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md), [FreezeAt](/docs/office-api/usage-api/spreadsheet-api/ApiFreezePanes/Methods/FreezeAt.md)

## 参考 Microsoft VBA 宏代码

```vb
Sub NavigateAndRefreeze()
    ActiveWindow.FreezePanes = False
    Application.Goto Reference:=Range("A10"), Scroll:=True
    ActiveWindow.FreezePanes = True
End Sub
```

## 结果

![冻结窗格](/assets/images/plugins/freeze-panes.png#gh-light-mode-only)![冻结窗格](/assets/images/plugins/freeze-panes.dark.png#gh-dark-mode-only)
