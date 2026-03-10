# GetClassType

返回 ApiChartSeries 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiChartSeries](../ApiChartSeries.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"chartSeries"

## 示例

此示例获取 ApiChartSeries 类的类型并将其插入文档中。

```javascript editor-docx
// How get a class type of ApiChartSeries.

// Retrieve class type of ApiChartSeries object and insert it to the slide.

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
let classType = series.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("The ApiChartSeries class type: " + classType);
doc.Push(paragraph);
```
