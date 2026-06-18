---
hide_table_of_contents: true
description: 将单元格区域格式化为样式表格。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 将范围格式化为表格

将单元格范围 **A1:D10** 格式化为表格。

```ts
(function()
{
    Api.GetActiveSheet().FormatAsTable("A1:D10");
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [FormatAsTable](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/FormatAsTable.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Sheet1.ListObjects.Add(xlSrcRange, Range("A1:D10"), , xlYes).Name = "myTable1"
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/format-range-as-a-table" dark />
