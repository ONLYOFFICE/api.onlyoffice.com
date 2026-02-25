# GetChartType

Returns a type of the chart object.

## Syntax

```javascript
expression.GetChartType();
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ChartType](../../Enumeration/ChartType.md)

## Example

How to get a chart type of a chart.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetPosition(608400, 1267200);

const solidGrey = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const solidOrange = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(solidGrey, 0, false);
chart.SetSeriesFill(solidOrange, 1, false);
const chartType = chart.GetChartType();
chart.SetTitle('This chart is of the ' + chartType + ' type', 14);

page.AddObject(chart);

```
