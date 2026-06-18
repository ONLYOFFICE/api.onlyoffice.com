---
hide_table_of_contents: true
description: Change the font color of specified cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Change cell font color

Sets the font color of the cell **B4** to red.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("B4").SetFontColor(Api.CreateColorFromRGB(255, 0, 0));
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFontColor](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontColor.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("B4").Font.Color = RGB(255, 0, 0)
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/change-cell-font-color" dark />
