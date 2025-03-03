# CreateChart

Creates a chart with the parameters specified.

## Syntax

```javascript
expression.CreateChart(sType, aSeries, aSeriesNames, aCatNames, nWidth, nHeight, nStyleIndex, aNumFormats);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ChartType](../../Enumeration/ChartType.md) | "bar" | The chart type used for the chart display. |
| aSeries | Required | Array |  | The array of the data used to build the chart from. |
| aSeriesNames | Required | Array |  | The array of the names (the source table column names) used for the data which the chart will be build from. |
| aCatNames | Required | Array |  | The array of the names (the source table row names) used for the data which the chart will be build from. |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The chart width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The chart height in English measure units. |
| nStyleIndex | Required | number |  | The chart color style index (can be **1 - 48**, as described in OOXML specification). |
| aNumFormats | Required | [NumFormat[]](../../Enumeration/NumFormat.md) \| String[] |  | Numeric formats which will be applied to the series (can be custom formats). The default numeric format is "General". |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

This example shows how to create a chart and paste it into the document.

```javascript editor-pptx
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
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oSlide.AddObject(oChart);
```
