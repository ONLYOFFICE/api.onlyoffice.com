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

How to outline a chart seria.

```javascript editor-pdf
// Create a chart, set its properties and its series outline.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetSeriesFill(fill, 0, false);
chart.SetSeriesOutLine(stroke, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetSeriesOutLine(stroke, 1, false);
page.AddObject(chart);

```
