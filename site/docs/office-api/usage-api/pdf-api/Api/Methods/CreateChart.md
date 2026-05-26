# CreateChart

Creates a chart with the parameters specified.

:::note
Values of *nStyleIndex* outside - **1 - 48** are interpreted as a chart style id from the *cs:chartStyle* element (e.g. 201, 215, 284) and are available only for [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) and [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api).
:::

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
| aNumFormats | Required | [NumFormat](../../Enumeration/NumFormat.md)[] \| String[] |  | Numeric formats which will be applied to the series (can be custom formats).
The default numeric format is "General". |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

Add a 3D bar chart to a PDF.

```javascript editor-pdf
// How do I insert a chart in a PDF?

// Configure a chart's size, position, and styling in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);
```
