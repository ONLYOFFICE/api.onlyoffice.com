# GetContent

返回当前单元格的内容。

## 语法

```javascript
expression.GetContent();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

从 PDF 中的表格单元格检索内部内容。

```javascript editor-pdf
// How do I access what is stored inside a table cell in a PDF?

// Extract the document elements contained within a cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell.");
content.Push(paragraph);

page.AddObject(table);
```
