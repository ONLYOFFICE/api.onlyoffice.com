---
hide_table_of_contents: true
description: Recalculate all formulas in a worksheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Recalculate worksheet values

Repeatedly recalculates worksheet cell values within one-second intervals.

```ts
(function ()
{
    let timerId = setInterval(function(){
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
        let worksheet = Api.GetActiveSheet();
        worksheet.GetRange("F2").SetValue("Average");
        worksheet.GetRange("G2").SetValue("=AVERAGE(B2:B80)");
    }, 1000);
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/recalculate-worksheet-values.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/recalculate-worksheet-values.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
