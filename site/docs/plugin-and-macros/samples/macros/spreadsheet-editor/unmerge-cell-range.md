---
hide_table_of_contents: true
description: Unmerge cells in a specified range.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Unmerge cell range

Unmerges the selected cell range.

```ts
(function()
{
    Api.GetActiveSheet().GetRange("C5:D10").UnMerge();
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [UnMerge](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("C5:D10").UnMerge
End Sub
```

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/unmerge-cell-range.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/unmerge-cell-range.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
