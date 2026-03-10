# SetXValues

将 x 轴值设置为所有图表系列。仅用于散点图。

## 语法

```javascript
expression.SetXValues(aValues);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aValues | 必需 | string[] |  | 将设置到 x 轴数据点的数据数组。 |

## 返回值

boolean

## 示例

How to add values to horizontal axis for all series of scatter charts.

```javascript editor-pdf
// Fill all x-axis values of scattered charts series.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetXValues(["2020", "2021", "2022"]);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetMarkerFill(fill, 0, 0, true);
chart.SetMarkerOutLine(stroke, 0, 0, true);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
chart.SetMarkerFill(fill, 1, 0, true);
chart.SetMarkerOutLine(stroke, 1, 0, true);
page.AddObject(chart);

```
