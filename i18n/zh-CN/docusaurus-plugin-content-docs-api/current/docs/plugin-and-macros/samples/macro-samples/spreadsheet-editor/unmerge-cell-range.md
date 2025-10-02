# 取消合并单元格区域

取消选定的单元格区域的合并操作。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("C5:D10").UnMerge();
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [UnMerge](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Range("C5:D10").UnMerge
End Sub
```

## 结果

![Unmerge-before](/assets/images/plugins/unmerge-cells-before.png#gh-light-mode-only)![Unmerge-before](/assets/images/plugins/unmerge-cells-before.dark.png#gh-dark-mode-only) ![Unmerge-after](/assets/images/plugins/unmerge-cells-after.png#gh-light-mode-only)![Unmerge-after](/assets/images/plugins/unmerge-cells-after.dark.png#gh-dark-mode-only)
