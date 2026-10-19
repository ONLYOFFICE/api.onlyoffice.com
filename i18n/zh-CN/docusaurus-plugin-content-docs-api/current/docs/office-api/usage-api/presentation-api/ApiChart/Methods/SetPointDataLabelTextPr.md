# SetPointDataLabelTextPr

为图表数据点的数据标签设置文本属性。

## 语法

```javascript
expression.SetPointDataLabelTextPr(seriesIndex, pointIndex, textPr);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| seriesIndex | 必需 | number |  | 用于构建图表的数据数组中的系列索引。 |
| pointIndex | 必需 | number |  | 此系列中的数据点索引。 |
| textPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 要应用于数据标签的文本属性。 |

## 返回值

boolean

## 示例

在演示文稿中为特定图表数据点的数据标签设置文本属性。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle('USD In Hundred Thousands', 20);
chart.SetHorAxisTitle('Year', 22);
chart.SetLegendPos('bottom');
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 26);
chart.SetSize(Api.MillimetersToEmus(300), Api.MillimetersToEmus(130));
chart.SetPosition(608400, 1267200);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(69, 90, 100)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(38, 80, 109)), 1, false);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(96);
textPr.SetBold(true);
textPr.SetItalic(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.RGB(210, 105, 30));
chart.SetPointDataLabelTextPr(1, 0, textPr);

slide.AddObject(chart);
```
