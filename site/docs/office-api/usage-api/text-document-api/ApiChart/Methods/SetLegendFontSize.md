# SetLegendFontSize

Specifies the legend font size.

## Syntax

```javascript
expression.SetLegendFontSize(nFontSize);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nFontSize | Required | [pt](../../Enumeration/pt.md) |  | The text size value measured in points. |

## Returns

boolean

## Example

This example specifies the chart legend font size.

```javascript editor-docx
// How to resize a legend font size.

// Create a chart and set a font size of its legend.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendFontSize(12);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
