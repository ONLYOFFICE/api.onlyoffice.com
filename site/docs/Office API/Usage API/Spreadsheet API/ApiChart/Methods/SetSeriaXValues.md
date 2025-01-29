# SetSeriaXValues

Sets the x-axis values from the specified range to the specified series. It is used with the scatter charts only.

## Syntax

expression.SetSeriaXValues(sRange, nSeria);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | A range of cells from the sheet with series x-axis values. For example: "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column, "A1:A5" - must be a single cell, row or column, "Example series". |
| nSeria | Required | number |  | The index of the chart series. |

## Returns

boolean

## Example

This example sets the x-axis values from the specified range to the specified series. It is used with the scatter charts only.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(2014);
oWorksheet.GetRange("C1").SetValue(2015);
oWorksheet.GetRange("D1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue("Projected Revenue");
oWorksheet.GetRange("A3").SetValue("Estimated Costs");
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(250);
oWorksheet.GetRange("B4").SetValue(2017);
oWorksheet.GetRange("C2").SetValue(240);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("C4").SetValue(2018);
oWorksheet.GetRange("D2").SetValue(280);
oWorksheet.GetRange("D3").SetValue(280);
oWorksheet.GetRange("D4").SetValue(2019);
var oChart = oWorksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "scatter", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSeriaXValues("'Sheet1'!$B$4:$D$4", 0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetMarkerFill(oFill, 0, 0, true);
var oStroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oChart.SetMarkerOutLine(oStroke, 0, 0, true);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetMarkerFill(oFill, 1, 0, true);
oStroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oChart.SetMarkerOutLine(oStroke, 1, 0, true);
```
