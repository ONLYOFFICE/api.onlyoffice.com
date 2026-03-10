# SetDataPointFill

设置指定图表系列中数据点的填充。

## 语法

```javascript
expression.SetDataPointFill(oFill, nSeries, nDataPoint, bAllSeries);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充数据点的填充类型。 |
| nSeries | 必需 | number |  | 图表系列的索引。 |
| nDataPoint | 必需 | number |  | 指定图表系列中数据点的索引。 |
| bAllSeries | 可选 | boolean | false | 指定填充是否应用于所有系列中的指定数据点。 |

## 返回值

boolean

## 示例

此示例展示如何设置数据点的填充。

```javascript editor-docx
// How to color chart data point with a solid fill.

// Create a chart and set a color for its data points.

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
chart.SetDataPointFill(fill, 0, 0, false);
```
