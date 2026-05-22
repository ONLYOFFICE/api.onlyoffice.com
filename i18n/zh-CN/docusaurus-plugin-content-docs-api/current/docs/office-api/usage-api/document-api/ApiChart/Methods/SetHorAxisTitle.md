# SetHorAxisTitle

指定图表横轴的标题。

## 语法

```javascript
expression.SetHorAxisTitle(sTitle, nFontSize, bIsBold);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 将为当前图表横轴显示的标题。 |
| nFontSize | 必需 | [pt](../../Enumeration/pt.md) |  | 以磅为单位的文本大小值。 |
| bIsBold | 必需 | boolean |  | 指定横轴标题是否以粗体字体书写。 |

## 返回值

boolean

## 示例

为文档中图表的水平轴添加标题。

```javascript editor-docx
// How do I label the horizontal axis to describe the data category in a document?

// Give the horizontal axis a descriptive name so viewers understand what the values represent in a document.

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
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
