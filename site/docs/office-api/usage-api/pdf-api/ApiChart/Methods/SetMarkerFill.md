# SetMarkerFill

Sets the fill to the marker in the specified chart series.

## Syntax

```javascript
expression.SetMarkerFill(oFill, nSeries, nMarker, bAllMarkers);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the marker. |
| nSeries | Required | number |  | The index of the chart series. |
| nMarker | Required | number |  | The index of the marker in the specified chart series. |
| bAllMarkers | Optional | boolean | false | Specifies if the fill will be applied to all markers in the specified chart series. |

## Returns

boolean

## Example

How to set a fill to the marker.

```javascript editor-pdf
// Create a chart, set its properties and its marker color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetMarkerFill(fill, 0, 0, true);
chart.SetMarkerOutLine(stroke, 0, 0, true);

fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
chart.SetMarkerFill(fill, 1, 0, true);
chart.SetMarkerOutLine(stroke, 1, 0, true);
page.AddObject(chart);

```
