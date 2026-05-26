# CreateChart

Creates a chart with the parameters specified.
:::note
Values of &lt;em&gt;styleIndex&lt;/em&gt; outside - **1 - 48** are interpreted as a chart style id from the &lt;em&gt;cs:chartStyle&lt;/em&gt; element (e.g. 201, 215, 284) and are available only for [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) and [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api).
:::

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
| numFormats | 必需 | [NumFormat](../../Enumeration/NumFormat.md)[] \| String[] |  | 将应用于系列的数字格式（可以是自定义格式）。 |

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)

## 示例

在文档中插入带有彩色数据系列的 3D 条形图。

```javascript editor-docx
// How do I add a bar chart with custom series colors to a document?

// Visualize revenue and cost data for multiple years as a colored 3D bar chart in a document.

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
