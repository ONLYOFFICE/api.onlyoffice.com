Description

Merges the selected cell range.

```
(function()
{
    Api.GetActiveSheet().GetRange("A1:B3").Merge(true);
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRange](/officeapi/spreadsheetapi/apiworksheet/getrange), [Merge](/officeapi/spreadsheetapi/apirange/merge)

Reference Microsoft VBA macro code

```
Sub example()
    Range("A1:B3").Merge
End Sub
```

Result

![Merge cells](/content/img/plugins/merge_cells.png)
