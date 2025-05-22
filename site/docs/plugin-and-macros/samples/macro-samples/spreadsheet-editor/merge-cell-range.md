# Merge cell range

Merges the selected cell range.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("A1:B3").Merge(true);
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Merge](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Merge.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("A1:B3").Merge
End Sub
```

## Result

![Merge cells](/assets/images/plugins/merge-cells.png#gh-light-mode-only)![Insert text](/assets/images/plugins/merge-cells.dark.png#gh-dark-mode-only)
