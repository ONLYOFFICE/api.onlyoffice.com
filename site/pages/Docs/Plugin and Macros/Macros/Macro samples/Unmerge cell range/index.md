Description

Unmerges the selected cell range.

```
(function()
{
    Api.GetActiveSheet().GetRange("C5:D10").UnMerge();
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRange](/officeapi/spreadsheetapi/apiworksheet/getrange), [UnMerge](/officeapi/spreadsheetapi/apirange/unmerge)

Reference Microsoft VBA macro code

```
Sub example()
    Range("C5:D10").UnMerge
End Sub
```

Result

![Unmerge-before](/content/img/plugins/unmerge_cells_before.png) ![Unmerge-after](/content/img/plugins/unmerge_cells_after.png)
