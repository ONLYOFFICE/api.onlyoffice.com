# GetNextChart

返回下一个内联图表（如果存在）。

## 语法

```javascript
expression.GetNextChart();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md) \| null

## 示例

为文档中当前图表之后的图表应用网格线样式。

```javascript editor-docx
// How do I access the next chart and change its gridlines in a document?

// Style minor horizontal gridlines on a sibling chart without selecting it directly in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
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
let copyChart = chart.Copy();
paragraph.AddDrawing(copyChart);
let nextChart = chart.GetNextChart();
let stroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
nextChart.SetMinorHorizontalGridlines(stroke);
```
