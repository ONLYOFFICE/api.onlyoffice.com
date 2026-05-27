# SetVertAxisTickLabelPosition

Spicifies tick labels position for the vertical axis.

## Syntax

```javascript
expression.SetVertAxisTickLabelPosition(sTickLabelPosition);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickLabelPosition | Required | [TickLabelPosition](../../Enumeration/TickLabelPosition.md) |  | The type for the position of chart vertical tick labels. |

## Returns

boolean

## Example

Set the position of tick labels on the vertical axis of a chart in a document.

```javascript editor-docx
// How do I control where tick labels appear on the vertical axis in a document?

// Place tick labels at the far end of the vertical axis to keep them away from the chart area in a document.

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
chart.SetVertAxisTickLabelPosition("high");
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
