# GetTablesOfFigures

返回文档中所有图表目录的集合。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetTablesOfFigures();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTablesOfFigures](../../ApiTablesOfFigures/ApiTablesOfFigures.md)

## 示例

返回文档中所有图表目录的集合。

```javascript editor-docx
// Add a captioned figure and an anchor paragraph where the table of figures appears.

// Get the tables of figures collection and add a table of figures replacing the anchor range.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let anchor = Api.CreateParagraph();
anchor.AddText("Table of figures goes here");
doc.Push(anchor);
let tablesOfFigures = doc.GetTablesOfFigures();
let range = anchor.GetRange();
let tof = tablesOfFigures.Add({"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": "Figure", "LabelNumber": true, "TofStyle": "distinctive"}, range);
```
