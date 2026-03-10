# GetAllCharts

返回包含当前演示文稿中所有图表对象的数组。

## 语法

```javascript
expression.GetAllCharts();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)[]

## 示例

此示例演示如何获取当前演示文稿中的所有图表对象。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const series = [[200, 240, 280], [250, 260, 280]];
const seriesNames = ['Category A', 'Category B'];
const categoryNames = [2024, 2025, 2026];
const chart = Api.CreateChart(
	'bar3D',
	series, seriesNames, categoryNames,
	200 * 36000, 150 * 36000, 24,
	['0', '0.00']
);
chart.SetPosition(36000, 36000);
slide.AddObject(chart);

const labelFill = Api.CreateSolidFill(Api.RGB(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
const chartsCount = presentation.GetAllCharts().length;
paragraph.AddText('Charts: ' + chartsCount);
label.SetPosition(36000, 170 * 36000);
slide.AddObject(label);

```
