---
hide_table_of_contents: true
description: Unhide all hidden rows.
tags: ["Docs", "Macros", "Spreadsheets"]
---

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

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRows](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRows.md), [SetHidden](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetHidden.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/unhide-all-rows-and-columns.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/unhide-all-rows-and-columns.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
