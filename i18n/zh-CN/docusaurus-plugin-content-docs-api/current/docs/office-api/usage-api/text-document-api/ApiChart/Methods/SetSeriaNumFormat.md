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

此示例将指定的数字格式设置为图表系列。

```javascript editor-docx
// How to set the "0.00" numeric format to the chart seria.

// Create a chart, set its properties and its series numeric format.

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
chart.SetSeriaNumFormat("0.00", 0);
paragraph.AddDrawing(chart);
```
