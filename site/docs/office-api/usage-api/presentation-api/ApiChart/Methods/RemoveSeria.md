# RemoveSeria

Removes the specified series from the current chart.

## Syntax

```javascript
expression.RemoveSeria(nSeria);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeria | Required | number |  | The index of the chart series. |

## Returns

boolean

## Example

This example shows how to remove the specified series from the current chart.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
oChart.RemoveSeria(1);
oChart.SetTitle("The Estimated Costs series was removed from the current chart.");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 0, false);
oSlide.AddObject(oChart);
```
