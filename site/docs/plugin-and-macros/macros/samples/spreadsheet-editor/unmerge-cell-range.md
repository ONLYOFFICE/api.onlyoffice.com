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

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [UnMerge](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/UnMerge.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Range("C5:D10").UnMerge
End Sub
```

## Result

![Unmerge-before](/assets/images/plugins/unmerge-cells-before.png) ![Unmerge-after](/assets/images/plugins/unmerge-cells-after.png)
