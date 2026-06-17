---
hide_table_of_contents: true
description: 设置指定列的宽度。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 设置列宽

设置 **B** 列的宽度。

```ts
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [SetColumnWidth](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetColumnWidth.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/set-column-width" dark />
