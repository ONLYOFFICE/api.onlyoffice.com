# SetMajorVerticalGridlines

Specifies major vertical gridline visual properties.

## Syntax

```javascript
expression.SetMajorVerticalGridlines(oStroke);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the element shadow. |

## Returns

This method doesn't return any data.

## Example

This example specifies the visual properties for the major horizontal gridlines.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSize(300 * 36000, 130 * 36000);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
var oStroke = Api.CreateStroke(1 * 15000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oChart.SetMajorVerticalGridlines(oStroke);
oChart.SetPosition(608400, 1267200);
oSlide.AddObject(oChart);
```
