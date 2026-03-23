# CreateChart

使用指定的参数创建图表。

## 语法

```javascript
expression.CreateChart(chartType, series, seriesNames, catNames, width, height, styleIndex, numFormats);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| chartType | 可选 | [ChartType](../../Enumeration/ChartType.md) | "bar" | 用于图表显示的图表类型。 |
| series | 必需 | number[][] |  | 用于构建图表的数据数组。 |
| seriesNames | 必需 | number[] \| string[] |  | 用于构建图表的数据所使用的名称数组（源表列名）。 |
| catNames | 必需 | number[] \| string[] |  | 用于构建图表的数据所使用的名称数组（源表行名）。 |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图表宽度。 |
| height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图表高度。 |
| styleIndex | 必需 | number |  | 图表颜色样式索引（可以是 1 - 48，如 OOXML 规范中所述）。 |
| numFormats | 必需 | [NumFormat](../../Enumeration/NumFormat.md)[] \| String[] |  | 将应用于系列的数字格式（可以是自定义格式）。默认数字格式为"常规"。 |

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)

## 示例

此示例展示如何创建图表并将其粘贴到文档中。

```javascript editor-docx
// Creates a "bar3D" chart, adds it to the ApiParagraph class, and fills its series with the created solid fills.

// How to create the ApiChart object and add it to the first paragraph of the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let solidFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(solidFill, 0, false);
solidFill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(solidFill, 1, false);
```
