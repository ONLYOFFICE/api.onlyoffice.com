# CreateChart

Creates a chart with the parameters specified.

## Syntax

```javascript
expression.CreateChart(sType, aSeries, aSeriesNames, aCatNames, nWidth, nHeight, nStyleIndex, aNumFormats);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ChartType](../../Enumeration/ChartType.md) | "bar" | The chart type used for the chart display. |
| aSeries | Required | number[][] |  | The array of the data used to build the chart from. |
| aSeriesNames | Required | number[] \| string[] |  | The array of the names (the source table column names) used for the data which the chart will be build from. |
| aCatNames | Required | number[] \| string[] |  | The array of the names (the source table row names) used for the data which the chart will be build from. |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The chart width in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The chart height in English measure units. |
| nStyleIndex | Required | number |  | The chart color style index (can be **1 - 48**, as described in OOXML specification). |
| aNumFormats | Required | [NumFormat](../../Enumeration/NumFormat.md)[] \| String[] |  | Numeric formats which will be applied to the series (can be custom formats). The default numeric format is "General". |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

This example shows how to create a chart and paste it into the document.

```javascript editor-pptx playground
// How to add charts to slides.

// Create a 3D bar chart, set its size, position, color and other properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);

```
