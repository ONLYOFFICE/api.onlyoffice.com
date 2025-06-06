# Format range as table

Formats the range of cells **A1:D10** as a table.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
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

![Range as a table](/assets/images/plugins/range-as-a-table.png#gh-light-mode-only)![Range as a table](/assets/images/plugins/range-as-a-table.dark.png#gh-dark-mode-only)
