# SetShowPointDataLabel

指定数据标签的显示选项。

## 语法

```javascript
expression.SetShowPointDataLabel(nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeriesIndex | 必需 | number |  | 用于构建图表的数据数组中的系列索引。 |
| nPointIndex | 必需 | number |  | 此系列中的数据点索引。 |
| bShowSerName | 必需 | boolean |  | 是否显示或隐藏用于构建图表数据的源表列名。 |
| bShowCatName | 必需 | boolean |  | 是否显示或隐藏用于构建图表数据的源表行名。 |
| bShowVal | 必需 | boolean |  | 是否显示或隐藏图表数据值。 |
| bShowPercent | 必需 | boolean |  | 是否显示或隐藏数据值的百分比（适用于堆叠图表类型）。 |

## 返回值

boolean

## 示例

此示例指定图表数据标签的显示选项。

```javascript editor-pptx
// How to show specific chart data labels with options.

// Create a chart, set its properties and the visibility of its data labels options.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetTitle("Financial Overview", 13);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);

```
