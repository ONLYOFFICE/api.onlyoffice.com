---
hide_table_of_contents: true
description: 更改指定单元格的字体颜色。
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# 更改单元格字体颜色

将单元格 **B4** 的字体颜色设置为红色。

```ts
(function()
{
    Api.GetActiveSheet().GetRange("B4").SetFontColor(Api.CreateColorFromRGB(255, 0, 0));
})();
```

使用方法： [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFontColor](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontColor.md)

## 参考 Microsoft VBA 宏代码

``` vb
Sub example()
    Range("B4").Font.Color = RGB(255, 0, 0)
End Sub
```

## 结果

<Video src="/assets/video/macros/spreadsheet-editor/change-cell-font-color" dark />
