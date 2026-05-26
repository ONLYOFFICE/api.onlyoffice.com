---
hide_table_of_contents: true
description: Merge a range of cells in a spreadsheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Merge cell range

Merges the selected cell range.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("A1:B3").Merge(true);
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Merge](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Merge.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("A1:B3").Merge
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/merge-cell-range.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/merge-cell-range.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
