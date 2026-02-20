# SetSeriesOutLine

Sets the outline to the specified chart series.

## Syntax

```javascript
expression.SetSeriesOutLine(oStroke, nSeries, bAll);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the series outline. |
| nSeries | Required | number |  | The index of the chart series. |
| bAll | Optional | boolean | false | Specifies if the outline will be applied to all series. |

## Returns

boolean

## Example

This example sets the outline to the specified chart series.

```javascript editor-pptx playground
// How to outline a chart seria.

// Create a chart, set its properties and its series outline.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetSeriesFill(fill, 0, false);
chart.SetSeriesOutLine(stroke, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetSeriesOutLine(stroke, 1, false);
slide.AddObject(chart);

```
