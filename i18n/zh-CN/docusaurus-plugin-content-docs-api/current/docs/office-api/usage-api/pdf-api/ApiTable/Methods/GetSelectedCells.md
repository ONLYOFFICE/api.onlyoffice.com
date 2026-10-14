# GetSelectedCells

返回当前表格中选定的单元格。

## 语法

```javascript
expression.GetSelectedCells();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)[]

## 示例

从 PDF 中的表格获取所选单元格。

```javascript editor-pdf
// Find out which cells are currently selected in a table in a PDF.

// Select a cell and read back the list of selected cells in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.GetCell(0, 0).Select();
const selectedCells = table.GetSelectedCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected cells count: ' + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);

page.AddObject(table);
```
