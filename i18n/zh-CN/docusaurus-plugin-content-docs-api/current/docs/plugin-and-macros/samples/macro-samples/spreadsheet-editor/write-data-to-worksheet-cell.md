# 向工作表单元格写入数据

将数据（*Hello world* 这个短语）写入工作表第 4 行第 3 列的单元格中。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
  Api.GetActiveSheet().GetRange("C4").SetValue("Hello world");
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Cells(3, 4)="Hello world"
End Sub
```

## 结果

![Write data](/assets/images/plugins/write-data-to-cell.png#gh-light-mode-only)![Write data](/assets/images/plugins/write-data-to-cell.dark.png#gh-dark-mode-only)
