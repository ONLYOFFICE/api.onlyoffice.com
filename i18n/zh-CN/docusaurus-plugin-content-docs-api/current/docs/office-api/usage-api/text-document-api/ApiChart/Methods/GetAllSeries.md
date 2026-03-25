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

此示例获取 ApiChart 类的所有系列并将其类型插入文档中。

```javascript editor-docx
// How to get all series from the chart and show each one's type in the document.

// Display each chart series type in the document.

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
