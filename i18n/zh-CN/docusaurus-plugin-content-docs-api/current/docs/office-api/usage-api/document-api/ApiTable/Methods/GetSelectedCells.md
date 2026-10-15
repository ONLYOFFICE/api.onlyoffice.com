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

获取文档中表格内当前选中的单元格。

```javascript editor-docx
// GetSelectedCells returns an array of ApiTableCell objects for the active selection.

// Create a table, select a range of cells, then count how many were selected in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
doc.MoveCursorDown(1);
doc.MoveCursorRight(3, true);
let selectedCells = table.GetSelectedCells();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Selected cells: " + selectedCells.length);
doc.Push(paragraph);
```
