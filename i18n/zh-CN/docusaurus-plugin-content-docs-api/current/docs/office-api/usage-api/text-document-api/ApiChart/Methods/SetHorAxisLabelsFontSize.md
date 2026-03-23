# SetHorAxisLabelsFontSize

指定横轴标签的字体大小。

## 语法

```javascript
expression.SetHorAxisLabelsFontSize(nFontSize);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nFontSize | 必需 | [pt](../../Enumeration/pt.md) |  | 以磅为单位的文本大小值。 |

## 返回值

boolean

## 示例

此示例为水平轴标签设置字体大小。

```javascript editor-docx
// How to resize a horizontal axis labels font.

// Create a chart and set its horizontal axis labels font to 8.

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
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetHorAxisLabelsFontSize(8);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
