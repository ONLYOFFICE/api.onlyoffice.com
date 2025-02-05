# SetDataPointNumFormat

Sets the specified numeric format to the chart data point.

## Syntax

```javascript
expression.SetDataPointNumFormat(sFormat, nSeria, nDataPoint, bAllSeries);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../Enumeration/NumFormat.md) | String |  | Numeric format (can be custom format). |
| nSeria | Required | Number |  | Series index. |
| nDataPoint | Required | number |  | The index of the data point in the specified chart series. |
| bAllSeries | Required | boolean |  | Specifies if the numeric format will be applied to the specified data point in all series. |

## Returns

boolean

## Example

This example sets "0.00" numeric format for chart.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
oChart.SetShowPointDataLabel(1, 0, false, false, true, false);
oChart.SetDataPointNumFormat("0.00", 0, 0, true);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oSlide.AddObject(oChart);
```
