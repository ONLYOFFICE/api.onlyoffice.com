# SetHorAxisMajorTickMark

Specifies major tick mark for the horizontal axis.

## Syntax

```javascript
expression.SetHorAxisMajorTickMark(sTickMark);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickMark | Required | [TickMark](../../Enumeration/TickMark.md) |  | The type of tick mark appearance. |

## Returns

boolean

## Example

This example specifies the major tick mark "cross" for the horizontal axis.

```javascript editor-docx
// How to change a tickmark of a major horizontal axis.

// Create a chart and set its major horizontal axis tickmark as a cross symbol.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetMarkerFill(fill, 0, 0, true);
chart.SetMarkerOutLine(stroke, 0, 0, true);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
chart.SetMarkerFill(fill, 1, 0, true);
chart.SetMarkerOutLine(stroke, 1, 0, true);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetHorAxisMajorTickMark("cross");
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
