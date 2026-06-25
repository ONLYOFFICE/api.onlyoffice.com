---
hide_table_of_contents: true
description: 取消合并电子表格中所有已合并的单元格。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 取消合并单元格

取消当前工作表中所有已合并的单元格。

:::note
该宏由 VBA 代码通过 [AI 插件](../../guides/converting-vba-macros.md#automatic-conversion-using-ai-plugin)转换而来。
:::

```ts
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

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [UnMerge](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub UnmergeAllCells()
    ActiveSheet.Cells.UnMerge
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/unmerge-all-cells" dark />
