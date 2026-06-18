---
hide_table_of_contents: true
description: Write data to a specific worksheet cell.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Write data to worksheet cell

Writes the data (the *Hello world* phrase) to the worksheet third column of the fourth row.

```ts
(function()
{
  Api.GetActiveSheet().GetRange("C4").SetValue("Hello world");
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Cells(3, 4)="Hello world"
End Sub
```

## Result

<Video src="/assets/video/macros/spreadsheet-editor/write-data-to-worksheet-cell" dark />
