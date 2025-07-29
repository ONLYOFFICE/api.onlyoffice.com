# 设置列宽

设置 **B** 列的宽度。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [SetColumnWidth](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetColumnWidth.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

## 结果

![Column width](/assets/images/plugins/column-width.png#gh-light-mode-only)![Column width](/assets/images/plugins/column-width.dark.png#gh-dark-mode-only)
