# GetCount

返回文档中图表目录的数量。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiTablesOfFigures](../ApiTablesOfFigures.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

统计文档包含的图表目录数量。

```javascript editor-docx
// Add a captioned figure and a table of figures built from the "Figure" label.

// Read the number of tables of figures currently present in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Figure 1");
paragraph.AddCaption(" - Sample figure", "Figure", false, "Arabic", false, undefined, "hyphen");
let tablesOfFigures = doc.GetTablesOfFigures();
tablesOfFigures.Add({"BuildFrom": "Figure", "LabelNumber": true});
let count = tablesOfFigures.GetCount();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Tables of figures count: " + count);
doc.Push(resultParagraph);
```
