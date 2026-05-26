# SetPlotAreaFill

设置图表绘图区域的填充。

## 语法

```javascript
expression.SetPlotAreaFill(oFill);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充绘图区域的填充类型。 |

## 返回值

boolean

## 示例

在文档中用纯色背景填充图表绘图区。

```javascript editor-docx
// How do I change the background color of a chart's plot area in a document?

// Give the chart a distinct look by painting the data region with a custom color in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
chart.SetPlotAreaFill(fill);
```
