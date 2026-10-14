# GetCount

返回文档中目录的数量。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiTablesOfContents](../ApiTablesOfContents.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

统计文档包含的目录数量。

```javascript editor-docx
// Add a table of contents built from the document headings to the collection.

// Read the number of tables of contents currently present in the document.

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
