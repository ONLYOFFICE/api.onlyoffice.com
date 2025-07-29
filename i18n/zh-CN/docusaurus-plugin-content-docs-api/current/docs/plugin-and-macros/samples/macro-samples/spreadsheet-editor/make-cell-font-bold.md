# 设置单元格字体加粗

将单元格 A2 的字体设置为加粗。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("A2").SetBold(true);
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetBold](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Range("A2").Font.Bold = True
End Sub
```

## 结果

![Font bold](/assets/images/plugins/font-bold.png#gh-light-mode-only)![Font bold](/assets/images/plugins/font-bold.dark.png#gh-dark-mode-only)
