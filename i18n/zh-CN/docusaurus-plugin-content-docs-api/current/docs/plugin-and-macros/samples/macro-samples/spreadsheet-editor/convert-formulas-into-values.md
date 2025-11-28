# 公式转换数值

将当前工作表中的所有公式转换为数值。

> 该宏是通过 [AI 插件](/docs/plugin-and-macros/macros/converting-vba-macros.md#automatic-conversion-using-ai-plugin)从 VBA 代码转换而来。

<!-- 此代码片段在截图中显示。 -->

<!-- eslint-skip -->

``` ts
(function(){
    // 获取当前活动工作表
    var oWorksheet = Api.GetActiveSheet();
    
    // 获取工作表的已使用范围
    var oUsedRange = oWorksheet.GetUsedRange();
    
    // 检查是否存在已使用范围
    if (oUsedRange) {
        // 获取范围内的当前值（这将计算公式）
        var aValues = oUsedRange.GetValue();
        
        // 将值重新设置回范围（这将用计算结果替换公式）
        oUsedRange.SetValue(aValues);
    }
})();
```

使用方法：[获取当前工作表](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md)，[获取已使用范围](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md)，[获取范围值](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md)，[设置范围值](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub ConvertToValues()
    With ActiveSheet.UsedRange
        .Value = .Value
    End With
End Sub
```

## 结果

![公式转换数值](/assets/images/plugins/convert-formulas-into-values.png#gh-light-mode-only)![公式转换数值](/assets/images/plugins/convert-formulas-into-values.dark.png#gh-dark-mode-only)
