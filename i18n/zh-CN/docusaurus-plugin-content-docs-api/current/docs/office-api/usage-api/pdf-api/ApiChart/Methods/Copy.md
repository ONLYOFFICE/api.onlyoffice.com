# Copy

创建指定图表的副本。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiChart](../../ApiChart/ApiChart.md)

## 示例

复制图表并将副本放在 PDF 的另一页上。

```javascript editor-pdf
// How do I make a copy of a chart in a PDF?

// Create an exact duplicate of a chart and add it to a new page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
chart.SetPosition(608400, 1267200);
page.AddObject(chart);

const copyChart = chart.Copy();
const newPage = doc.AddPage(1);
newPage.AddObject(copyChart);
```
