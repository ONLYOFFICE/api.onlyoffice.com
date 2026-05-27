# SetMinorHorizontalGridlines

指定次要水平网格线的视觉属性。

## 语法

```javascript
expression.SetMinorHorizontalGridlines(oStroke);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建元素阴影的笔触。 |

## 返回值

boolean

## 示例

设置文档中图表次水平网格线的样式。

```javascript editor-docx
// How do I control the appearance of minor horizontal gridlines in a document?

// Add subtle horizontal reference lines between major intervals to improve value precision in a document.

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
let stroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetMinorHorizontalGridlines(stroke);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
