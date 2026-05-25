---
hide_table_of_contents: true
description: Format a cell range as a styled table.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Format range as table

Formats the range of cells **A1:D10** as a table.

```ts
(function()
{
    Api.GetActiveSheet().FormatAsTable("A1:D10");
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [FormatAsTable](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/FormatAsTable.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Sheet1.ListObjects.Add(xlSrcRange, Range("A1:D10"), , xlYes).Name = "myTable1"
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/format-range-as-a-table.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/format-range-as-a-table.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
