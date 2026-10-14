# SetShowDataTable

Specifies whether the data table is displayed below the chart, optionally with the legend keys.

## Syntax

```javascript
expression.SetShowDataTable(bShow, bShowKeys);
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | Required | boolean |  | Whether to show or hide the data table below the chart. |
| bShowKeys | Optional | boolean | false | Whether to show the legend keys in the data table. |

## Returns

boolean

## Example

Display the data table beneath a chart in a presentation.

```javascript editor-pptx
// Place the chart's values in a grid below the plot area, including the legend keys.

// Switch on the data table with legend keys for a 3D bar chart in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("3DColumnClustered", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 20);
chart.SetHorAxisTitle("Year", 22);
chart.SetLegendPos("bottom");
chart.SetShowDataTable(true, true);
chart.SetTitle("Financial Overview", 26);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);
```
