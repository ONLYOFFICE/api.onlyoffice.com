# 合并单元格区域

合并选定的单元格区域。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("A1:B3").Merge(true);
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Merge](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Merge.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Range("A1:B3").Merge
End Sub
```

## 结果

![Merge cells](/assets/images/plugins/merge-cells.png#gh-light-mode-only)![Insert text](/assets/images/plugins/merge-cells.dark.png#gh-dark-mode-only)
