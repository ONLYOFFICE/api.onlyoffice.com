# SetMinorHorizontalGridlines

Specifies minor horizontal gridline visual properties.

## Syntax

```javascript
expression.SetMinorHorizontalGridlines(oStroke);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the element shadow. |

## Returns

boolean

## Example

Style the minor horizontal gridlines of a chart in a document.

```javascript editor-docx
// How do I control the appearance of minor horizontal gridlines in a document?

// Add subtle horizontal reference lines between major intervals to improve value precision in a document.

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
let stroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetMinorHorizontalGridlines(stroke);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
