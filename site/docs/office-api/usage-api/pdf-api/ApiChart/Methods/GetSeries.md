# GetSeries

Returns the series with a specific index.

## Syntax

```javascript
expression.GetSeries(nIdx);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIdx | Required | number |  | Series index. |

## Returns

[ApiChartSeries](../../ApiChartSeries/ApiChartSeries.md)

## Example

How to get a seria from a chart using its index.

```javascript editor-pdf
// Find a chart seria.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);

const allSeries = chart.GetAllSeries();
const series = allSeries[0];
const seriesType = series.GetChartType();
const title = "Series Type = " + seriesType + "\n";
chart.SetTitle(title, 20);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);

```
