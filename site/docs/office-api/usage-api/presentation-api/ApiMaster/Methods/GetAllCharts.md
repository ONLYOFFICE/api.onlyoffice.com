# GetAllCharts

Returns an array with all the chart objects from the slide master.

## Syntax

```javascript
expression.GetAllCharts();
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiChart[]](../../ApiChart/ApiChart.md)

## Example

This example show how to get an array with all the chart objects from the slide master.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oMaster.AddObject(oChart);
oSlide.RemoveAllObjects();
var aCharts = oMaster.GetAllCharts();
var oStroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
aCharts[0].SetMinorHorizontalGridlines(oStroke);
```
