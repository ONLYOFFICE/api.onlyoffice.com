# GetType

使用 \{@link ChartType\} 枚举中的图表类型名称返回当前系列的图表类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiChartSeries](../ApiChartSeries.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ChartType](../../Enumeration/ChartType.md)

## 示例

在文档中读取特定数据系列的图表类型名称。

```javascript editor-docx
// Useful for confirming which chart type a specific data series uses in a document.

// Verify the type assigned to a series before deciding whether to change it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("ComboColumnClusteredLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 20);
chart.SetHorAxisTitle("Year", 22);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 26);
paragraph.AddDrawing(chart);
let series = chart.GetSeries(0);
let seriesType = series.GetType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Series Type = " + seriesType);
doc.Push(paragraph);
```
