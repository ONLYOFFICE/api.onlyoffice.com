# GetTablesOfContents

返回文档中所有目录的集合。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetTablesOfContents();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTablesOfContents](../../ApiTablesOfContents/ApiTablesOfContents.md)

## 示例

返回文档中所有目录的集合。

```javascript editor-docx
// Build a heading and insert a table of contents into the document.

// Get the tables of contents collection and read how many it holds.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let tablesOfContents = doc.GetTablesOfContents();
tablesOfContents.Add({"BuildFrom": {"OutlineLvls": 9}});
let count = tablesOfContents.GetCount();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Tables of contents count: " + count);
doc.Push(resultParagraph);
```
