Description

Repeatedly recalculates worksheet cell values within one-second intervals.

```
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

Methods used: [GetActiveSheet](/officeapi/spreadsheetapi/api/getactivesheet), [GetRange](/officeapi/spreadsheetapi/api/getrange), [SetValue](/officeapi/spreadsheetapi/apirange/setvalue)

Result

![Recalculate worksheet values](/content/img/plugins/recalculate-cell-values.png)
