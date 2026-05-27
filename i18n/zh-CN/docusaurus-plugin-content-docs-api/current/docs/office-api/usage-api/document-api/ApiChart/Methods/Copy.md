# Copy

复制当前图表。

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

复制图表并将副本添加到文档中的同一段落。

```javascript editor-docx
// How do I make a copy of a chart in a document?

// Clone a chart so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
paragraph.AddDrawing(chart);

let copyChart = chart.Copy();
paragraph.AddDrawing(copyChart);
```
