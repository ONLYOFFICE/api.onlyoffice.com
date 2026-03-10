# SetHorAxisTickLabelPosition

指定横轴刻度标签的位置。

## 语法

```javascript
expression.SetHorAxisTickLabelPosition(sTickLabelPosition);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickLabelPosition | 必需 | [TickLabelPosition](../../Enumeration/TickLabelPosition.md) |  | 图表横轴刻度标签位置的类型。 |

## 返回值

boolean

## 示例

此示例指定横轴刻度标签的位置。

```javascript editor-docx
// How to change a position of a horizontal axis tick label.

// Create a chart and move its horizontal axis tick label.

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
chart.SetHorAxisTickLabelPosition("high");
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
