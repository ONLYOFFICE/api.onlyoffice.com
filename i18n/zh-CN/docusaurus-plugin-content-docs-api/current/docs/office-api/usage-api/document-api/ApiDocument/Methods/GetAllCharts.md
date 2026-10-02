# GetAllCharts

从文档内容返回图表对象集合。

继承自 [ApiDocumentContent.GetAllCharts](../../ApiDocumentContent/Methods/GetAllCharts.md)。

## 语法

```javascript
expression.GetAllCharts();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)[]

## 示例

获取文档中的所有图表，并为其中一个图表添加网格线。

```javascript editor-docx
// How do I access every chart in a document so I can modify a specific one in a document?

// Style a particular chart after gathering the full list of chart objects already placed in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart1 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart1);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart1.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart1.SetSeriesFill(fill, 1, false);
let chart2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart2.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart2.SetSeriesFill(fill, 1, false);
chart2.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart2.SetHorAxisTitle("Year", 11);
chart2.SetLegendPos("bottom");
chart2.SetShowDataLabels(false, false, true, false);
chart2.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart2);
let charts = doc.GetAllCharts();
let stroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
charts[1].SetMinorHorizontalGridlines(stroke);
```
