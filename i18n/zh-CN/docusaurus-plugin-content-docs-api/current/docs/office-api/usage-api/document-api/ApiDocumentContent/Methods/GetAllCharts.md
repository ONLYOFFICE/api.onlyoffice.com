# GetAllCharts

从文档内容返回图表对象集合。

## 语法

```javascript
expression.GetAllCharts();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)[]

## 示例

检索文档内容中嵌入的所有图表。

```javascript editor-docx
// How do I access every chart inside a content container in a document?

// Apply custom gridline styling to the first chart found inside a shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 95 * 36000, 70 * 36000, 24);
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph = Api.CreateParagraph();
paragraph.AddDrawing(chart);
let docContent = shape.GetDocContent();
docContent.AddElement(0, paragraph);
let charts = docContent.GetAllCharts();
stroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
charts[0].SetMinorHorizontalGridlines(stroke);
```
