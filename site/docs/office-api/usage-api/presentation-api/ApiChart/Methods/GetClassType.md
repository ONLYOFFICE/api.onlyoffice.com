# GetClassType

Returns a type of the ApiChart class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"chart"

## Example

This example gets a type of ApiChart class and inserts it into the presentation.

```javascript editor-pptx
// How to get a class type of ApiChart.

// Retrieve class type of ApiChart object and insert it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
const classType = chart.GetClassType();
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview: Class Type = " + classType, 20);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);

```
