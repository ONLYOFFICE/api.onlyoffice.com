# ApplyChartStyle

通过样式 ID 为当前图表设置样式。

## 语法

```javascript
expression.ApplyChartStyle(nStyleId);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStyleId | 必需 |  |  | 编辑器中可用的样式之一。 |

## 返回值

boolean

## 示例

此示例展示如何为图表应用样式。

```javascript editor-docx
// How to change the style of the chart by indicating a number that specifies a style type.

// Create a bar chart and set its style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.ApplyChartStyle(2);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetSeriesFill(fill, 0, false);
chart.SetSeriesOutLine(stroke, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetSeriesFill(fill, 1, false);
chart.SetSeriesOutLine(stroke, 1, false);
paragraph.AddDrawing(chart);
```
