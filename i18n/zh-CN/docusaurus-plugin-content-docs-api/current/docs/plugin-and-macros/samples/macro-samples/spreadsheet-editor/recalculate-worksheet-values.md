# 重新计算工作表数值

以一秒间隔重复重新计算工作表单元格的数值。

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

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 结果

![Recalculate worksheet values](/assets/images/plugins/recalculate-cell-values.png#gh-light-mode-only)![Recalculate worksheet values](/assets/images/plugins/recalculate-cell-values.dark.png#gh-dark-mode-only)
