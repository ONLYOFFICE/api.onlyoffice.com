# Unmerge cell range

Unmerges the selected cell range.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().GetRange("C5:D10").UnMerge();
})();
```

Methods used: [GetActiveSheet](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [UnMerge](../../../docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("C5:D10").UnMerge
End Sub
```

## Result

![Unmerge-before](/assets/images/plugins/unmerge-cells-before.png#gh-light-mode-only)![Unmerge-before](/assets/images/plugins/unmerge-cells-before.dark.png#gh-dark-mode-only) ![Unmerge-after](/assets/images/plugins/unmerge-cells-after.png#gh-light-mode-only)![Unmerge-after](/assets/images/plugins/unmerge-cells-after.dark.png#gh-dark-mode-only)
