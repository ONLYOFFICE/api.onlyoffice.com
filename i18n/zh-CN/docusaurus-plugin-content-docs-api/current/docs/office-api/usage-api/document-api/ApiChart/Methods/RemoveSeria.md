# RemoveSeria

从当前图表中删除指定的系列。

## 语法

```javascript
expression.RemoveSeria(nSeria);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeria | 必需 | number |  | 图表系列的索引。 |

## 返回值

boolean

## 示例

按位置从文档中的图表移除数据系列。

```javascript editor-docx
// How do I delete one of the data series from a chart in a document?

// Trim a chart down to fewer series when some data is no longer needed in a document.

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
chart.RemoveSeria(1);
paragraph.AddLineBreak();
paragraph.AddText("The Estimated Costs series was removed from the current chart.");
```
