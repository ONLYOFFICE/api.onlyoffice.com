---
hide_table_of_contents: true
description: 将单元格公式转换为其计算值。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 公式转换数值

将当前工作表中的所有公式转换为数值。

:::note
该宏是通过 [AI 插件](../../guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin)从 VBA 代码转换而来。
:::

```ts
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

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub ConvertToValues()
    With ActiveSheet.UsedRange
        .Value = .Value
    End With
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/convert-formulas-into-values" dark />
