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

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Cells(3, 4)="Hello world"
End Sub
```

## Result

![Write data](/assets/images/plugins/write-data-to-cell.png)
