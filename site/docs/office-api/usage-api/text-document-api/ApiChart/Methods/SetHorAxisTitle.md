# SetHorAxisTitle

Specifies the chart horizontal axis title.

## Syntax

```javascript
expression.SetHorAxisTitle(sTitle, nFontSize, bIsBold);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The title which will be displayed for the horizontal axis of the current chart. |
| nFontSize | Required | [pt](../../Enumeration/pt.md) |  | The text size value measured in points. |
| bIsBold | Required | boolean |  | Specifies if the horizontal axis title is written in bold font or not. |

## Returns

boolean

## Example

This example specifies the chart horizontal axis title.

```javascript editor-docx
// How to change a position of a horizontal axis title.

// Create a chart and move its horizontal axis title.

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
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
