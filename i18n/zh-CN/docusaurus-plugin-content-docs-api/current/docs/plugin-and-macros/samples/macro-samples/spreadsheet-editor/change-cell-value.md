# 修改单元格的值

修改选定单元格的值。

> 该宏是通过 [AI 插件](/docs/plugin-and-macros/macros/converting-vba-macros.md#automatic-conversion-using-ai-plugin)从  VBA 代码转换而来。

<!-- 此代码片段以截图展示。 -->

<!-- eslint-skip -->

``` ts
(function(){
    // 获取当前活动工作表
    var activeSheet = Api.GetActiveSheet();
    
    // 选中 A1 单元格
    activeSheet.GetRange("A1").Select();
    
    // 将选定单元格的值设置为"Hello World"
    activeSheet.GetRange("A1").SetValue("Hello World");
})();
```

使用方法：[获取当前工作表](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md)，[获取单元格范围](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md)，[选中单元格](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md)，[设置单元格值](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub ChangeCellValue()
    Application.ActiveSheet.Range("A1").Select
    Application.Selection.Value = "Hello World"
End Sub
```

## 结果

![修改单元格的值](/assets/images/plugins/change-cell-value.png#gh-light-mode-only)![修改单元格的值](/assets/images/plugins/change-cell-value.dark.png#gh-dark-mode-only)
