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

在文档中图表下方显示数据表。

```javascript editor-docx
// Add the source values as a grid below the plot area, including the legend keys.

// Turn on the data table with legend keys for a 3D bar chart in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("3DColumnClustered", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 20);
chart.SetHorAxisTitle("Year", 22);
chart.SetShowDataTable(true, true);
chart.SetTitle("Financial Overview", 26);
paragraph.AddDrawing(chart);
```
