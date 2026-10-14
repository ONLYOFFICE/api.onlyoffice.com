# GetSelectedColumnsCells

返回包含当前所选单元格的列中的所有单元格。此方法会确定哪些列包含所选单元格，然后返回这些列中的所有单元格，而不仅仅是所选单元格本身。

## 语法

```javascript
expression.GetSelectedColumnsCells();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)[]

## 示例

从 PDF 中表格的所选列获取单元格。

```javascript editor-pdf
// Retrieve all cells belonging to the currently selected columns in a table in a PDF.

// Select a cell and read back the cells of its column in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 4);
table.GetCell(0, 0).Select();
const selectedCells = table.GetSelectedColumnsCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected column cells count: ' + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
