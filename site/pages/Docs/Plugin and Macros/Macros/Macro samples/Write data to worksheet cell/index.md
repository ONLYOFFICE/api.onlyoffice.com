Description

Writes the data (the *Hello world* phrase) to the worksheet third column of the fourth row.

```
(function()
{
    Api.GetActiveSheet().GetRange("C4").SetValue("Hello world");
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRange](/officeapi/spreadsheetapi/apiworksheet/getrange), [SetValue](/officeapi/spreadsheetapi/apirange/setvalue)

Reference Microsoft VBA macro code

```
Sub example()
    Cells(3, 4)="Hello world"
End Sub
```

Result

![Write data](/content/img/plugins/write_data_to_cell.png)
