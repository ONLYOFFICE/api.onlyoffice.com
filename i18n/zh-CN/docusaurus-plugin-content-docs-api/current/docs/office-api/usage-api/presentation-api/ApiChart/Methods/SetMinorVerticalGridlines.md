# SetMinorVerticalGridlines

指定次要垂直网格线的视觉属性。

## 语法

```javascript
expression.SetMinorVerticalGridlines(oStroke);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建元素阴影的笔触。 |

## 返回值

boolean

## 示例

此示例指定次要垂直网格线的视觉属性。

```javascript editor-pptx
// How to set minor vertical gridlines of the chart.

// Create a chart, set its properties and its minor gridlines.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetTitle("Financial Overview", 13);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
let stroke = Api.CreateStroke(1 * 10000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetMinorVerticalGridlines(stroke);
slide.AddObject(chart);

```
