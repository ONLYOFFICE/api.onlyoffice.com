# SetSeriesOutLine

设置指定图表系列的轮廓。

## 语法

```javascript
expression.SetSeriesOutLine(oStroke, nSeries, bAll);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建系列轮廓的笔触。 |
| nSeries | 必需 | number |  | 图表系列的索引。 |
| bAll | 可选 | boolean | false | 指定轮廓是否应用于所有系列。 |

## 返回值

boolean

## 示例

在文档中为图表上的特定数据系列应用边框轮廓。

```javascript editor-docx
// How do I add a visible border around a single data series on a chart in a document?

// Style individual series differently to distinguish them from the rest of the chart in a document.

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
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetSeriesOutLine(stroke, 1, false);
```
