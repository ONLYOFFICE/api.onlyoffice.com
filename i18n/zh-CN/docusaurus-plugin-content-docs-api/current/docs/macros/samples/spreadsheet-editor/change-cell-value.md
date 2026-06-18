---
hide_table_of_contents: true
description: 更改指定单元格的值。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 修改单元格的值

修改选定单元格的值。

:::note
该宏是通过 [AI 插件](../../guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin)从  VBA 代码转换而来。
:::

```ts
(function(){
    // 获取当前活动工作表
    var activeSheet = Api.GetActiveSheet();
    
    // 选中 A1 单元格
    activeSheet.GetRange("A1").Select();
    
    // 将选定单元格的值设置为"Hello World"
    activeSheet.GetRange("A1").SetValue("Hello World");
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Select](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub ChangeCellValue()
    Application.ActiveSheet.Range("A1").Select
    Application.Selection.Value = "Hello World"
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/change-cell-value" dark />
