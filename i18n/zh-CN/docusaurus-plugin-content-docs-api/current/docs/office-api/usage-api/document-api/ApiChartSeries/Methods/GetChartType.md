# GetChartType

返回当前系列的图表类型。

## 语法

```javascript
expression.GetChartType();
```

`expression` - 表示 [ApiChartSeries](../ApiChartSeries.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ChartType](../../Enumeration/ChartType.md)

## 示例

读取并显示文档中特定数据系列的图表类型。

```javascript editor-docx
// How do I find out what chart type a data series is using in a document?

// Verify the visual style assigned to a series before deciding whether to change it in a document.

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
let series = chart.GetSeries(0);
let seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Series Type = " + seriesType);
doc.Push(paragraph);
```
