# SetVerAxisOrientation

Specifies the vertical axis orientation.

## Syntax

expression.SetVerAxisOrientation(bIsMinMax);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bIsMinMax | Required | boolean |  | The &lt;code&gt;true&lt;/code&gt; value will set the normal data direction for the vertical axis (from minimum to maximum). |

## Returns

This method doesn't return any data.

## Example

This example specifies the direction of the data displayed on the vertical axis.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(2014);
oWorksheet.GetRange("C1").SetValue(2015);
oWorksheet.GetRange("D1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue("Projected Revenue");
oWorksheet.GetRange("A3").SetValue("Estimated Costs");
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(250);
oWorksheet.GetRange("C2").SetValue(240);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("D2").SetValue(280);
oWorksheet.GetRange("D3").SetValue(280);
var oChart = oWorksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);
oChart.SetTitle("Financial Overview", 13);
oChart.SetVerAxisOrientation(false);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
```
