Description

Formats the range of cells **A1:D10** as a table.

```
(function()
{
    Api.GetActiveSheet().FormatAsTable("A1:D10");
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [FormatAsTable](/officeapi/spreadsheetapi/apiworksheet/formatastable)

Reference Microsoft VBA macro code

```
Sub example()
    Sheet1.ListObjects.Add(xlSrcRange, Range("A1:D10"), , xlYes).Name = "myTable1"
End Sub
```

Result

![Range as a table](/content/img/plugins/range_as_a_table.png)
