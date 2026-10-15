# ChangeChartType

尝试更改系列类型。

如果成功，则返回 true。

抛出：如果不支持该图表类型，则抛出 Error。

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

更改文档中单个图表系列的视觉类型。

```javascript editor-docx
// How do I switch a single data series to a different chart style in a document?

// Convert a bar series to an area series so overlapping data trends are easier to read in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("ComboColumnClusteredLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 20);
chart.SetHorAxisTitle("Year", 22);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 26);
paragraph.AddDrawing(chart);
let series = chart.GetSeries(0);
let seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Old Series Type = " + seriesType);
doc.Push(paragraph);
series.ChangeChartType("Area");
seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("New Series Type = " + seriesType);
doc.Push(paragraph);
```
