# Set column width

Sets the width for the column **B**.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

Methods used: [GetActiveSheet](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [SetColumnWidth](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/SetColumnWidth.md)

## Reference Microsoft VBA macro code

``` vb
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

## Result

![Column width](/assets/images/plugins/column-width.png#gh-light-mode-only)![Column width](/assets/images/plugins/column-width.dark.png#gh-dark-mode-only)
