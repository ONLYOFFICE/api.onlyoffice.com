# GetSelectedColumnsCells

返回包含当前选定单元格的列中的所有单元格。此方法会确定哪些列包含选定单元格，然后返回这些列中的所有单元格，  而不仅仅是选定单元格本身。

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

获取文档中包含选中单元格的列中的所有单元格。

```javascript editor-docx
// GetSelectedColumnsCells returns every cell in each column that has at least one selected cell.

// Create a table, select a range of cells, then get all cells from the affected columns in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
doc.MoveCursorDown(1);
doc.MoveCursorRight(3, true);
let columnCells = table.GetSelectedColumnsCells();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Cells in selected columns: " + columnCells.length);
doc.Push(paragraph);
```
