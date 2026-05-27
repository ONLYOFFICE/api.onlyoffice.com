# GetAllSeries

返回图表空间中的所有系列。

## 语法

```javascript
expression.GetAllSeries();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChartSeries](../../ApiChartSeries/ApiChartSeries.md)[]

## 示例

列出文档中图表中的每个数据系列及其类型。

```javascript editor-docx
// How do I retrieve all series from a chart and inspect each one's type in a document?

// Audit a combo chart's composition by printing the type of each data series in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
let allSeries = chart.GetAllSeries();
let series, seriesType;
for (let i = 0; i < allSeries.length; ++i) {
	series = allSeries[i];
	seriesType = series.GetChartType();
	paragraph = Api.CreateParagraph();
	paragraph.AddText((i + 1) + " Series Type = " + seriesType);
	doc.Push(paragraph);
}
```
