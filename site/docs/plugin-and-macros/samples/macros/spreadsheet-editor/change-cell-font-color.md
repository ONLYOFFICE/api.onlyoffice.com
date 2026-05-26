---
hide_table_of_contents: true
description: Change the font color of specified cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Change cell font color

Sets the font color of the cell **B4** to red.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("B4").SetFontColor(Api.CreateColorFromRGB(255, 0, 0));
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetFontColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFontColor.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("B4").Font.Color = RGB(255, 0, 0)
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/change-cell-font-color.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/change-cell-font-color.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
