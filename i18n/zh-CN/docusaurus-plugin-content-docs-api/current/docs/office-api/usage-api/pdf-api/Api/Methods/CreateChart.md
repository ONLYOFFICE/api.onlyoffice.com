# CreateChart

使用指定的参数创建图表。
:::note
**1 - 48** 范围之外的 &lt;em&gt;nStyleIndex&lt;/em&gt; 值将被解释为 &lt;em&gt;cs:chartStyle&lt;/em&gt; 元素中的图表样式 ID（例如 201、215、284），仅适用于 [ONLYOFFICE Docs Enterprise](https://www.onlyoffice.com/docs-enterprise-prices.aspx?from=api) 和 [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api)。
:::

## 语法

```javascript
expression.CreateChart(sType, aSeries, aSeriesNames, aCatNames, nWidth, nHeight, nStyleIndex, aNumFormats);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 可选 | [ChartType](../../Enumeration/ChartType.md) | "bar" | 用于图表显示的图表类型。 |
| aSeries | 必需 | number[][] |  | 用于构建图表的数据数组。 |
| aSeriesNames | 必需 | number[] \| string[] |  | 用于构建图表的数据所使用的名称数组（源表列名）。 |
| aCatNames | 必需 | number[] \| string[] |  | 用于构建图表的数据所使用的名称数组（源表行名）。 |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图表宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图表高度。 |
| nStyleIndex | 必需 | number |  | 图表颜色样式索引（可以是 **1 - 48**，如 OOXML 规范所述）。 |
| aNumFormats | 必需 | [NumFormat](../../Enumeration/NumFormat.md)[] \| String[] |  | 将应用于系列的数字格式（可以是自定义格式）。 |

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)

## 示例

向 PDF 添加 3D 条形图。

```javascript editor-pdf
// How do I insert a chart in a PDF?

// Configure a chart's size, position, and styling in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);
```
