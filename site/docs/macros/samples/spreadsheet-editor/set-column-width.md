---
hide_table_of_contents: true
description: Set the width of specified columns.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Set column width

Sets the width for the column **B**.

```ts
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [SetColumnWidth](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetColumnWidth.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/set-column-width" dark />
