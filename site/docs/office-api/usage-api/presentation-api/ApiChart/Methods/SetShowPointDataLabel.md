# SetShowPointDataLabel

Spicifies the show options for data labels.

## Syntax

```javascript
expression.SetShowPointDataLabel(nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeriesIndex | Required | number |  | The series index from the array of the data used to build the chart from. |
| nPointIndex | Required | number |  | The point index from this series. |
| bShowSerName | Required | boolean |  | Whether to show or hide the source table column names used for the data which the chart will be build from. |
| bShowCatName | Required | boolean |  | Whether to show or hide the source table row names used for the data which the chart will be build from. |
| bShowVal | Required | boolean |  | Whether to show or hide the chart data values. |
| bShowPercent | Required | boolean |  | Whether to show or hide the percent for the data values (works with stacked chart types). |

## Returns

boolean

## Example

This example specifies the show options for the chart data labels.

```javascript editor-pptx
// How to show specific chart data labels with options.

// Create a chart, set its properties and the visibility of its data labels options.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetTitle("Financial Overview", 13);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);

```
