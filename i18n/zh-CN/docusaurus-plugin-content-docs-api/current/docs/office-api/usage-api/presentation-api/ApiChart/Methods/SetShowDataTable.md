# SetShowDataTable

指定是否在图表下方显示数据表，并可选择同时显示图例项标示。

## 语法

```javascript
expression.SetShowDataTable(bShow, bShowKeys);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | 必需 | boolean |  | 是否在图表下方显示或隐藏数据表。 |
| bShowKeys | 可选 | boolean | false | 是否在数据表中显示图例项标示。 |

## 返回值

boolean

## 示例

在演示文稿中图表下方显示数据表。

```javascript editor-pptx
// Place the chart's values in a grid below the plot area, including the legend keys.

// Switch on the data table with legend keys for a 3D bar chart in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("3DColumnClustered", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 20);
chart.SetHorAxisTitle("Year", 22);
chart.SetLegendPos("bottom");
chart.SetShowDataTable(true, true);
chart.SetTitle("Financial Overview", 26);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);
```
