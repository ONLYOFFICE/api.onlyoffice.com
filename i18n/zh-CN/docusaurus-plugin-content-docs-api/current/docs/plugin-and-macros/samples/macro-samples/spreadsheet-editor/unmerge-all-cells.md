# 取消合并单元格

取消当前工作表中所有已合并的单元格。

> 该宏由 VBA 代码通过 [AI 插件](/docs/plugin-and-macros/macros/converting-vba-macros.md#automatic-conversion-using-ai-plugin)转换而来。

<!-- 以下代码展示在截图中。 -->

<!-- eslint-skip -->

``` ts
(function(){
    // 获取当前工作表
    var oWorksheet = Api.GetActiveSheet();
    
    // 通过获取已用区域，获取工作表内所有单元格
    var oUsedRange = oWorksheet.GetUsedRange();
    
    // 如果存在已用区域
    if (oUsedRange) {
        // 取消该区域内的所有合并单元格
        oUsedRange.UnMerge();
    }
    
    // 备选方案：获取整张工作表区域并取消合并
    // 备选方案将确保所有可能的合并单元格都被取消
    var oRange = oWorksheet.GetRange("A1:XFD1048576");
    oRange.UnMerge();
})();
```

使用方法：[获取当前工作表](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md)，[获取已使用范围](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md)，[取消合并单元格](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md)，[获取范围](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub UnmergeAllCells()
    ActiveSheet.Cells.UnMerge
End Sub
```

## 结果

![取消合并单元格前](/assets/images/plugins/unmerge-before.png#gh-light-mode-only)![取消合并单元格前](/assets/images/plugins/unmerge-before.dark.png#gh-dark-mode-only) ![取消合并单元格后](/assets/images/plugins/unmerge-after.png#gh-light-mode-only)![取消合并单元格后](/assets/images/plugins/unmerge-after.dark.png#gh-dark-mode-only)
