---
hide_table_of_contents: true
description: Unhide all hidden rows.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Unhide all rows

Unhides all the rows in the active spreadsheet.

```ts
(function()
{
    let activeSheet = Api.ActiveSheet;
    let indexRowMax = 1048576;
    let n = 1;
    for (let i = 0; i < indexRowMax; i++) {
        activeSheet.GetRows(n).SetHidden(false);
        n++;
    }
    let newRange = activeSheet.GetRange("A1");
    newRange.SetValue("All rows are unhidden now");
})();
```

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRows](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRows.md), [SetHidden](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetHidden.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

<Video src="/assets/video/macros/spreadsheet-editor/unhide-all-rows-and-columns" dark />
