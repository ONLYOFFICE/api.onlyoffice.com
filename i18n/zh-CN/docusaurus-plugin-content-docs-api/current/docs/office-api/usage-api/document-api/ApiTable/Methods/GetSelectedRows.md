# GetSelectedRows

返回包含当前选定单元格的所有行。此方法会确定哪些行包含选定单元格，并返回这些完整的行对象。

## 语法

```javascript
expression.GetSelectedRows();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)[]

## 示例

获取文档中包含当前选中单元格的所有行。

```javascript editor-docx
// GetSelectedRows returns an array of ApiTableRow objects for rows with an active selection.

// Create a table, select cells across two rows, then get those rows in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
doc.MoveCursorDown(1);
doc.MoveCursorDown(1, true);
let selectedRows = table.GetSelectedRows();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Selected rows: " + selectedRows.length);
doc.Push(paragraph);
```
