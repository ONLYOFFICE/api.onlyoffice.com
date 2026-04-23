# SetShowDataLabels

指定为图表显示哪些图表数据标签。

## 语法

```javascript
expression.SetShowDataLabels(bShowSerName, bShowCatName, bShowVal, bShowPercent);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShowSerName | 必需 | boolean |  | 是否显示或隐藏用于构建图表数据的源表列名。 |
| bShowCatName | 必需 | boolean |  | 是否显示或隐藏用于构建图表数据的源表行名。 |
| bShowVal | 必需 | boolean |  | 是否显示或隐藏图表数据值。 |
| bShowPercent | 必需 | boolean |  | 是否显示或隐藏数据值的百分比（适用于堆叠图表类型）。 |

## 返回值

boolean

## 示例

如何显示特定的图表数据标签。

```javascript editor-pdf
// Create a chart, set its properties and its specific data labels visibility.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);

```
