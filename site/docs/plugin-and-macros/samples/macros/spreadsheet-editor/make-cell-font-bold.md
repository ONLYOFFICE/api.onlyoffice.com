---
hide_table_of_contents: true
description: Make the font bold for specified cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Make cell font bold

Sets the font of the cell **A2** to bold.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("A2").SetBold(true);
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetBold](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetBold.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("A2").Font.Bold = True
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/make-cell-font-bold.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/make-cell-font-bold.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
