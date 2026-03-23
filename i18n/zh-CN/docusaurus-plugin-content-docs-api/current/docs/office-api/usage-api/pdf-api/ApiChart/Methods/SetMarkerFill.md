# SetMarkerFill

设置指定图表系列中标记的填充。

## 语法

```javascript
expression.SetMarkerFill(oFill, nSeries, nMarker, bAllMarkers);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充标记的填充类型。 |
| nSeries | 必需 | number |  | 图表系列的索引。 |
| nMarker | 必需 | number |  | 指定图表系列中标记的索引。 |
| bAllMarkers | 可选 | boolean | false | 指定填充是否应用于指定图表系列中的所有标记。 |

## 返回值

boolean

## 示例

如何为标记设置填充。

```javascript editor-pdf
// Create a chart, set its properties and its marker color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetMarkerFill(fill, 0, 0, true);
chart.SetMarkerOutLine(stroke, 0, 0, true);

fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
chart.SetMarkerFill(fill, 1, 0, true);
chart.SetMarkerOutLine(stroke, 1, 0, true);
page.AddObject(chart);

```
