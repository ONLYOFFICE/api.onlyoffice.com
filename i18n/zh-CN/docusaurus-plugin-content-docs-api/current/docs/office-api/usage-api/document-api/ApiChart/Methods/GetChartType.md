# GetChartType

返回图表对象的类型。

## 语法

```javascript
expression.GetChartType();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ChartType](../../Enumeration/ChartType.md)

## 示例

此示例演示如何获取图表的图表类型。

```javascript editor-docx
const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);

const solidGrey = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const solidOrange = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(solidGrey, 0, false);
chart.SetSeriesFill(solidOrange, 1, false);
const chartType = chart.GetChartType();
chart.SetTitle('This chart is of the ' + chartType + ' type', 14);

firstParagraph.AddDrawing(chart);

```
