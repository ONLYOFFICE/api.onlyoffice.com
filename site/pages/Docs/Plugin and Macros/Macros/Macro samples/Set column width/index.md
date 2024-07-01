Description

Sets the width for the column **B**.

```
(function()
{
    Api.GetActiveSheet().SetColumnWidth(1, 25);
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [SetColumnWidth](/officeapi/spreadsheetapi/apiworksheet/setcolumnwidth)

Reference Microsoft VBA macro code

```
Sub example()
    Columns("B").ColumnWidth = 25
End Sub
```

Result

![Column width](/content/img/plugins/column_width.png)
