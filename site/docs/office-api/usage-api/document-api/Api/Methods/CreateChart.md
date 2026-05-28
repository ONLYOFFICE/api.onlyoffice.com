# CreateChart

Creates a chart with the parameters specified.

:::note
Values of *styleIndex* outside - **1 - 48** are interpreted as a chart style id from the *cs:chartStyle* element (e.g. 201, 215, 284) and are available only for [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) and [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api).
:::

## Syntax

```javascript
expression.CreateChart(chartType, series, seriesNames, catNames, width, height, styleIndex, numFormats);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| chartType | Optional | [ChartType](../../Enumeration/ChartType.md) | "bar" | The chart type used for the chart display. |
| series | Required | number[][] |  | The array of the data used to build the chart from. |
| seriesNames | Required | number[] \| string[] |  | The array of the names (the source table column names) used for the data which the chart will be build from. |
| catNames | Required | number[] \| string[] |  | The array of the names (the source table row names) used for the data which the chart will be build from. |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The chart width in English measure units. |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The chart height in English measure units. |
| styleIndex | Required | number |  | The chart color style index (can be 1 - 48, as described in OOXML specification). |
| numFormats | Required | [NumFormat](../../Enumeration/NumFormat.md)[] \| String[] |  | Numeric formats which will be applied to the series (can be custom formats). The default numeric format is "General". |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

Insert a 3D bar chart with colored data series into a document.

```javascript editor-docx
// How do I add a bar chart with custom series colors to a document?

// Visualize revenue and cost data for multiple years as a colored 3D bar chart in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let solidFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(solidFill, 0, false);
solidFill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(solidFill, 1, false);
```
