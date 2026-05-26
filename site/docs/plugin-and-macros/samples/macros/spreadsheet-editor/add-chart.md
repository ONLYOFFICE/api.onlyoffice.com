---
hide_table_of_contents: true
description: Add a chart to a spreadsheet from cell data.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Add chart

Adds a new chart to the selected cell range.

```ts
(function()
{
    Api.GetActiveSheet().AddChart("'Sheet1'!$C$5:$D$7", true, "bar", 2, 105 * 36000, 105 * 36000, 0, 0, 9, 0);
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [AddChart](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/AddChart.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    With ActiveSheet.ChartObjects.Add(Left:=300, Width:=300, Top:=10, Height:=300)
        .Chart.SetSourceData Source:=Sheets("Sheet1").Range("C5:D7")
    End With
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/add-chart.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/add-chart.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
