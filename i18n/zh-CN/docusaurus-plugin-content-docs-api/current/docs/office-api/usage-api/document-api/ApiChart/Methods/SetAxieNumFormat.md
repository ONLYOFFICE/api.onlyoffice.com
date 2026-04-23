# SetAxieNumFormat

将指定的数字格式设置为坐标轴值。

## 语法

```javascript
expression.SetAxieNumFormat(sFormat, sAxiePos);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | 数字格式（可以是自定义格式）。 |
| sAxiePos | 必需 | [AxisPos](../../Enumeration/AxisPos.md) |  | 图表中的坐标轴位置。 |

## 返回值

boolean

## 示例

此示例将指定的数字格式设置为坐标轴值。

```javascript editor-docx
// How to set number format style to the axis. 

// Create a chart and format its axis numbering.

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
chart.SetAxieNumFormat("0.00", "left");
paragraph.AddDrawing(chart);
```
