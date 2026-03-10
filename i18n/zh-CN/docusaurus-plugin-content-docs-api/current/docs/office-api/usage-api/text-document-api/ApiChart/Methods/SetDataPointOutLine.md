# SetDataPointOutLine

设置指定图表系列中数据点的轮廓。

## 语法

```javascript
expression.SetDataPointOutLine(oStroke, nSeries, nDataPoint, bAllSeries);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建数据点轮廓的笔触。 |
| nSeries | 必需 | number |  | 图表系列的索引。 |
| nDataPoint | 必需 | number |  | 指定图表系列中数据点的索引。 |
| bAllSeries | 必需 | boolean |  | 指定轮廓是否应用于所有系列中的指定数据点。 |

## 返回值

boolean

## 示例

此示例展示如何设置数据点的轮廓。

```javascript editor-docx
// How to set a numeric format of the data points.

// Create a chart and set its data points number format to round to two decimal places.

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
let stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
chart.SetDataPointOutLine(stroke, 0, 0, false);
```
