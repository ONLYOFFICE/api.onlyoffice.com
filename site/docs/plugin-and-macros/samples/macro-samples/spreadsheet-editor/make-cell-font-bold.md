# Make cell font bold

Sets the font of the cell **A2** to bold.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
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

![Font bold](/assets/images/plugins/font-bold.png#gh-light-mode-only)![Font bold](/assets/images/plugins/font-bold.dark.png#gh-dark-mode-only)
