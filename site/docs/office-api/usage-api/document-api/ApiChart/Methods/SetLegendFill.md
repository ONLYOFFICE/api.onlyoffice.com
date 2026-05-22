# SetLegendFill

Sets the fill to the chart legend.

## Syntax

```javascript
expression.SetLegendFill(oFill);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the legend. |

## Returns

boolean

## Example

Apply a background fill color to the chart legend in a document.

```javascript editor-docx
// How do I set a solid background color for the legend of a chart in a document?

// Highlight the legend with a distinct fill so it stands out from the chart area in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
chart.SetLegendFill(fill);
```
