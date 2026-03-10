# SetVertAxisLabelsFontSize

指定纵轴标签的字体大小。

## 语法

```javascript
expression.SetVertAxisLabelsFontSize(nFontSize);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nFontSize | 必需 | [pt](../../Enumeration/pt.md) |  | 以磅为单位的文本大小值。 |

## 返回值

boolean

## 示例

This example specifies font size for the labels of the vertical axis.

```javascript editor-docx
// How to resize a font size of the vertical axis labels.

// Create a chart then change a font size of axis labels.

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
chart.SetVertAxisLabelsFontSize(8);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
