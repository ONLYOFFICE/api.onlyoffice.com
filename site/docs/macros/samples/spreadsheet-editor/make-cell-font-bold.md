---
hide_table_of_contents: true
description: Make the font bold for specified cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Make cell font bold

Sets the font of the cell **A2** to bold.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("A2").SetBold(true);
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetBold](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("A2").Font.Bold = True
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/make-cell-font-bold" dark />
