# ChangeChartType

尝试更改系列类型。如果成功则返回 true。

## 语法

```javascript
expression.ChangeChartType(sType);
```

`expression` - 表示 [ApiChartSeries](../ApiChartSeries.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [ChartType](../../Enumeration/ChartType.md) |  | 图表类型。 |

## 返回值

boolean

## 示例

将图表系列类型从条形/折线组合修改为面积样式。

```javascript editor-pptx
// Extract series from combo chart and convert to area type before display.

// Change first series to area chart type and display type change in title.

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

const series = chart.GetSeries(0);
let seriesType = series.GetChartType();
let title = "Old Series Type = " + seriesType + "\n";

series.ChangeChartType("area");
seriesType = series.GetChartType();
title += "New Series Type = " + seriesType;

chart.SetTitle(title, 20);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);
```
