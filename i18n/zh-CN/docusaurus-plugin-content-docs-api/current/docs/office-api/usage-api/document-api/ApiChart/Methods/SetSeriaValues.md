# SetSeriaValues

为指定的图表系列设置值。

## 语法

```javascript
expression.SetSeriaValues(aValues, nSeria);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aValues | 必需 | number[] |  | 将设置到指定图表系列的数据数组。 |
| nSeria | 必需 | number |  | 图表系列的索引。 |

## 返回值

boolean

## 示例

更新文档中图表系列的数据值。

```javascript editor-docx
// How do I replace the numbers in a chart series in a document?

// Refresh a chart with revised figures without rebuilding the entire chart from scratch in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetSeriaValues([260, 270, 300], 1);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetShowPointDataLabel(1, 1, false, false, true, false);
chart.SetShowPointDataLabel(1, 2, false, false, true, false);
```
