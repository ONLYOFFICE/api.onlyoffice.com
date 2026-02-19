# SetDataPointOutLine

Sets the outline to the data point in the specified chart series.

## Syntax

```javascript
expression.SetDataPointOutLine(oStroke, nSeries, nDataPoint, bAllSeries);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the data point outline. |
| nSeries | Required | number |  | The index of the chart series. |
| nDataPoint | Required | number |  | The index of the data point in the specified chart series. |
| bAllSeries | Required | boolean |  | Specifies if the outline will be applied to the specified data point in all series. |

## Returns

boolean

## Example

How to outline data points.

```javascript editor-pdf
// Create a chart then apply outline to its data points.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
chart.SetDataPointOutLine(stroke, 0, 0, false);
page.AddObject(chart);

```
