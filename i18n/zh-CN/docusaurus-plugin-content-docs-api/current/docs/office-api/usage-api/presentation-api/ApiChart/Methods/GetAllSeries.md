# GetAllSeries

返回图表空间中的所有系列。

## 语法

```javascript
expression.GetAllSeries();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChartSeries](../../ApiChartSeries/ApiChartSeries.md)[]

## 示例

此示例获取 ApiChart 类的所有系列并将其类型插入演示文稿。

```javascript editor-pptx
// How to get types of all series of a chart.

// Get all series from a chart.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);

let series, seriesType, title = "";
const allSeries = chart.GetAllSeries();
for (let seriesIndex = 0; seriesIndex < allSeries.length; ++seriesIndex) {
	series = allSeries[seriesIndex];
	seriesType = series.GetChartType();
	title += ((seriesIndex + 1) + " Series Type = " + seriesType + "\n");
}
chart.SetTitle(title, 20);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);

```
