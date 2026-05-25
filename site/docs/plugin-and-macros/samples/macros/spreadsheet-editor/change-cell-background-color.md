---
hide_table_of_contents: true
description: Change the background color of specified cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Change cell background color

Sets the background color of the cell **B3** to blue.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("B3").SetFillColor(Api.CreateColorFromRGB(0, 0, 250));
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [CreateColorFromRGB](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("B3").Interior.Color = RGB(0, 0, 250)
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/change-cell-background-color.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/change-cell-background-color.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
