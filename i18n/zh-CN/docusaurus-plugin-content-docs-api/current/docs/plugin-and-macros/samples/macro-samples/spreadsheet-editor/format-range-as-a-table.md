# 将范围格式化为表格

将单元格范围 **A1:D10** 格式化为表格。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().FormatAsTable("A1:D10");
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [FormatAsTable](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/FormatAsTable.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Sheet1.ListObjects.Add(xlSrcRange, Range("A1:D10"), , xlYes).Name = "myTable1"
End Sub
```

## 结果

![Range as a table](/assets/images/plugins/range-as-a-table.png#gh-light-mode-only)![Range as a table](/assets/images/plugins/range-as-a-table.dark.png#gh-dark-mode-only)
