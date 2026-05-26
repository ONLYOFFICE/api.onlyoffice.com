# SetDataPointNumFormat

将指定的数字格式设置为图表数据点。

## 语法

```javascript
expression.SetDataPointNumFormat(sFormat, nSeria, nDataPoint, bAllSeries);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | 数字格式（可以是自定义格式）。 |
| nSeria | 必需 | Number |  | 系列索引。 |
| nDataPoint | 必需 | number |  | 指定图表系列中数据点的索引。 |
| bAllSeries | 必需 | boolean |  | 指定数字格式是否应用于所有系列中的指定数据点。 |

## 返回值

boolean

## 示例

格式化文档中特定数据点标签上显示的数字。

```javascript editor-docx
// How do I control the numeric format of individual data point labels on a chart in a document?

// Show data point values with consistent decimal precision when labels are visible on a chart in a document.

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
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetDataPointNumFormat("0.00", 1, 0, true);
paragraph.AddDrawing(chart);
```
