# GetRowIndex

返回父行的索引。

## 语法

```javascript
expression.GetRowIndex();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number \| null

## 示例

获取 PDF 中表格单元格的行索引。

```javascript editor-pdf
// Find out which row a table cell belongs to in a PDF.

// Retrieve the row index and display it in the cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(1).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Row index: ' + cell.GetRowIndex());
content.Push(paragraph);

page.AddObject(table);
```
