# SetSeriesFill

Sets the fill to the specified chart series.

## Syntax

```javascript
expression.SetSeriesFill(oFill, nSeries, bAll);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the series. |
| nSeries | Required | number |  | The index of the chart series. |
| bAll | Optional | boolean | false | Specifies if the fill will be applied to all series. |

## Returns

boolean

## Example

Color a chart series with a solid fill in a document.

```javascript editor-docx
// How do I change the fill color of a chart series in a document?

// Visually separate data series from each other by assigning each one a distinct background color in a document.

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
chart.SetSeriesFill(fill, 1, false);
```
