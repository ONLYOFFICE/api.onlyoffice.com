# GetParentRow

返回当前单元格的父行。

## 语法

```javascript
expression.GetParentRow();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

此示例展示如何获取单元格的父行。

```javascript editor-docx
// How to get parent row of the cell.

// Retrieve the cell from the table and get the height of its parent row.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
let parentRow = table.GetCell(0, 0).GetParentRow();
parentRow.SetHeight("atLeast", 720);
```
