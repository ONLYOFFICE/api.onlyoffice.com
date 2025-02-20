# Recalculate worksheet values

## Description

Repeatedly recalculates worksheet cell values within one-second intervals.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function ()
{
    let timerId = setInterval(function(){
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
        var oWorksheet = Api.GetActiveSheet();
        oWorksheet.GetRange("F2").SetValue("Average");
        oWorksheet.GetRange("G2").SetValue("=AVERAGE(B2:B80)");
    }, 1000);
})();
```

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![Recalculate worksheet values](/assets/images/plugins/recalculate-cell-values.png)
