# Recalculate worksheet values

Repeatedly recalculates worksheet cell values within one-second intervals.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function ()
{
    let timerId = setInterval(function(){
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
        let worksheet = Api.GetActiveSheet();
        worksheet.GetRange("F2").SetValue("Average");
        worksheet.GetRange("G2").SetValue("=AVERAGE(B2:B80)");
    }, 1000);
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![Recalculate worksheet values](/assets/images/plugins/recalculate-cell-values.png#gh-light-mode-only)![Recalculate worksheet values](/assets/images/plugins/recalculate-cell-values.dark.png#gh-dark-mode-only)
