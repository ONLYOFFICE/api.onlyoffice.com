Description

Unhides all the rows and columns in the active spreadsheet.

```
(function()
{
    var activeSheet = Api.ActiveSheet;
    var indexRowMax = 1048576;
    var n = 1;
    for (let i = 0; i < indexRowMax; i++) {
        activeSheet.GetRows(n).SetHidden(false);
        n++;
    }
    var newRange = activeSheet.GetRange("A1");
    newRange.SetValue("All the rows and columns are unhidden now");
})();
```

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRows](/officeapi/spreadsheetapi/apirange/getrows), [SetHidden](/officeapi/spreadsheetapi/apirange/sethidden), [GetRange](/officeapi/spreadsheetapi/api/getrange), [SetValue](/officeapi/spreadsheetapi/apirange/setvalue)

Result

![Unhide all rows](/content/img/plugins/unhide_all_rows.png)
