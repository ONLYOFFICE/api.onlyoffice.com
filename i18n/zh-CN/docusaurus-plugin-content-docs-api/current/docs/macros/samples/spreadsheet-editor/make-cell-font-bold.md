---
hide_table_of_contents: true
description: 将指定单元格的字体设为粗体。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 设置单元格字体加粗

将单元格 A2 的字体设置为加粗。

```ts
(function()
{
    Api.GetActiveSheet().GetRange("A2").SetBold(true);
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetBold](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Range("A2").Font.Bold = True
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/make-cell-font-bold" dark />
