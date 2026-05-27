# SetHorAxisTickLabelPosition

Spicifies tick labels position for the horizontal axis.

## Syntax

```javascript
expression.SetHorAxisTickLabelPosition(sTickLabelPosition);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickLabelPosition | Required | [TickLabelPosition](../../Enumeration/TickLabelPosition.md) |  | The type for the position of chart horizontal tick labels. |

## Returns

boolean

## Example

Move the horizontal axis tick labels to the top of a chart in a document.

```javascript editor-docx
// How do I reposition tick labels to display above the chart area in a document?

// Place category labels at the high end of the axis to free up space at the bottom in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetHorAxisTickLabelPosition("high");
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
