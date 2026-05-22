# GetParentTableCell

返回包含当前段落的表格单元格。

## 语法

```javascript
expression.GetParentTableCell();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

检索文档中包含给定段落的表格单元格。

```javascript editor-docx
// How do I find the table cell that holds a paragraph in a document?

// Apply a background color to a cell by accessing it from a paragraph nested inside it in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
let parentTableCell = paragraph.GetParentTableCell();
parentTableCell.SetShd("clear", Api.HexColor('#FF6F3D'));
```
