# SetDataLabelsTextPr

为图表数据标签设置文本属性。

## 语法

```javascript
expression.SetDataLabelsTextPr(textPr);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 要应用于数据标签的文本属性。 |

## 返回值

boolean

## 示例

在文档中为所有图表数据标签设置文本属性。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(55, 71, 79)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(21, 101, 131)), 1, false);
chart.SetVerAxisTitle('USD In Hundred Thousands', 20);
chart.SetHorAxisTitle('Year', 22);
chart.SetLegendPos('bottom');
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 26);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(18);
textPr.SetBold(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.RGB(25, 80, 150));
chart.SetDataLabelsTextPr(textPr);

paragraph.AddDrawing(chart);
```
