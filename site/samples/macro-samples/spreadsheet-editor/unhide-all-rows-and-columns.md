# Unhide all rows and columns

Unhides all the rows and columns in the active spreadsheet.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    let activeSheet = Api.ActiveSheet;
    let indexRowMax = 1048576;
    let n = 1;
    for (let i = 0; i < indexRowMax; i++) {
        activeSheet.GetRows(n).SetHidden(false);
        n++;
    }
    let newRange = activeSheet.GetRange("A1");
    newRange.SetValue("All the rows and columns are unhidden now");
})();
```

Methods used: [GetActiveSheet](../../../docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRows](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRows.md), [SetHidden](../../../docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetRange](../../../docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![Unhide all rows](/assets/images/plugins/unhide-all-rows.png#gh-light-mode-only)![Unhide all rows](/assets/images/plugins/unhide-all-rows.dark.png#gh-dark-mode-only)
