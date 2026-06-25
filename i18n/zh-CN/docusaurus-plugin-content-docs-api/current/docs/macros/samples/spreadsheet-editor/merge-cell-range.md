---
hide_table_of_contents: true
description: 合并电子表格中的单元格区域。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 合并单元格区域

合并选定的单元格区域。

```ts
(function()
{
    Api.GetActiveSheet().GetRange("A1:B3").Merge(true);
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Merge](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Merge.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Range("A1:B3").Merge
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/merge-cell-range" dark />
