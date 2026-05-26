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

调整文档中图表垂直轴标签文本的大小。

```javascript editor-docx
// How do I change the font size of the numbers along the vertical axis in a document?

// Make vertical axis labels larger or smaller to improve chart readability in a document.

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
