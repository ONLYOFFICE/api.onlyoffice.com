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

How to change a number format of a data point.

```javascript editor-pdf
// Create a chart then apply specified numeric format to its data points.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetDataPointNumFormat("0.00", 0, 0, true);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);

```
