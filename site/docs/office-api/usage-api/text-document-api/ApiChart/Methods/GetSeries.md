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

This example gets the first series of ApiChart class and inserts its type into the document.

```javascript editor-docx
// How to get first series from the chart and show its type in the document.

// Display first chart series type in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
let series = chart.GetSeries(0);
let seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Series Type = " + seriesType);
doc.Push(paragraph);
```
