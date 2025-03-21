# Unhide all rows and columns

Unhides all the rows and columns in the active spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
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

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRows](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRows.md), [SetHidden](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![Unhide all rows](/assets/images/plugins/unhide-all-rows.png#gh-light-mode-only)![Unhide all rows](/assets/images/plugins/unhide-all-rows.dark.png#gh-dark-mode-only)
