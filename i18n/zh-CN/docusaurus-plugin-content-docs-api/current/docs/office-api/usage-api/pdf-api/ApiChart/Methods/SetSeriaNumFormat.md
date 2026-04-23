# SetSeriaNumFormat

将指定的数字格式设置为图表系列。

## 语法

```javascript
expression.SetSeriaNumFormat(sFormat, nSeria);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | 数字格式（可以是自定义格式）。 |
| nSeria | 必需 | Number |  | 系列索引。 |

## 返回值

boolean

## 示例

如何为图表系列设置 "0.00" 数字格式。

```javascript editor-pdf
// Create a chart, set its properties and its series numeric format.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetSeriaNumFormat("0.00", 0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);

```
