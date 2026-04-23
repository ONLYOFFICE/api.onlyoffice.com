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

此示例更改 ApiChart 类第一个系列的类型并将新类型插入文档中。

```javascript editor-docx
// How to change a chart type.

// Change a chart type to the "area" type.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
let series = chart.GetSeries(0);
let seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Old Series Type = " + seriesType);
doc.Push(paragraph);
series.ChangeChartType("area");
seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("New Series Type = " + seriesType);
doc.Push(paragraph);
```
