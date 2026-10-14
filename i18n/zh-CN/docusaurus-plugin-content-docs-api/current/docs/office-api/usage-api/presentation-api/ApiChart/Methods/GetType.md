# GetType

使用 \{@link ChartType\} 枚举中的图表类型名称返回图表对象的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ChartType](../../Enumeration/ChartType.md)

## 示例

在演示文稿中使用图表类型名称识别图表类型。

```javascript editor-pptx
// Useful for confirming a chart's type before applying type-specific formatting in a presentation.

// Determine the chart type and display it as the title in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const chartWidth = 4051300;
const chartHeight = 2347595;
const chart = Api.CreateChart('3DColumnClustered', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], chartWidth, chartHeight, 24);

const solidGrey = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const solidOrange = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(solidGrey, 0, false);
chart.SetSeriesFill(solidOrange, 1, false);
const chartType = chart.GetType();
chart.SetTitle('This chart is of the ' + chartType + ' type', 28);
chart.SetPosition((presentation.GetWidth() - chartWidth) / 2, (presentation.GetHeight() - chartHeight) / 2);

slide.RemoveAllObjects();
slide.AddObject(chart);
```
