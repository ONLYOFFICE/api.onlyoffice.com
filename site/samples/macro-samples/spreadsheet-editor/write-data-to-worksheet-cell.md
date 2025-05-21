# Write data to worksheet cell

Writes the data (the *Hello world* phrase) to the worksheet third column of the fourth row.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
  Api.GetActiveSheet().GetRange("C4").SetValue("Hello world");
})();
```

Methods used: [GetActiveSheet](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Cells(3, 4)="Hello world"
End Sub
```

## Result

![Write data](/assets/images/plugins/write-data-to-cell.png#gh-light-mode-only)![Write data](/assets/images/plugins/write-data-to-cell.dark.png#gh-dark-mode-only)
