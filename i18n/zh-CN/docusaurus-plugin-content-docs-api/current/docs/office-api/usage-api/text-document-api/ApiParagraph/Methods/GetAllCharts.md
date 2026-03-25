# GetAllCharts

返回段落中的图表对象集合。

## 语法

```javascript
expression.GetAllCharts();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)[]

## 示例

此示例展示如何获取段落中的图表对象集合。

```javascript editor-docx
// How to retrieve all charts from the document.

// Get all charts and set minor horizontal gridlines.

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
chart2.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart2);
let charts = paragraph.GetAllCharts();
let stroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
charts[1].SetMinorHorizontalGridlines(stroke);
```
