# SetHorAxisMajorTickMark

指定横轴的主刻度线。

## 语法

```javascript
expression.SetHorAxisMajorTickMark(sTickMark);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickMark | 必需 | [TickMark](../../Enumeration/TickMark.md) |  | 刻度线外观的类型。 |

## 返回值

boolean

## 示例

此示例为横轴指定主刻度线「cross」。

```javascript editor-docx
// How to change a tickmark of a major horizontal axis.

// Create a chart and set its major horizontal axis tickmark as a cross symbol.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetMarkerFill(fill, 0, 0, true);
chart.SetMarkerOutLine(stroke, 0, 0, true);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetMarkerFill(fill, 1, 0, true);
chart.SetMarkerOutLine(stroke, 1, 0, true);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetHorAxisMajorTickMark("cross");
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
