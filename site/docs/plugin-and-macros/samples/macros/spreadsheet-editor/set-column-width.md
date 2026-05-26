---
hide_table_of_contents: true
description: Set the width of specified columns.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Set column width

Sets the width for the column **B**.

```ts
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [SetColumnWidth](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetColumnWidth.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/set-column-width.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/set-column-width.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
