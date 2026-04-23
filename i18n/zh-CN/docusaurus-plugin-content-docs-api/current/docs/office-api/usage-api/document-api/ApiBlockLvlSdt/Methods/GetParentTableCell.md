# GetParentTableCell

返回包含当前内容控件的表格单元格。

## 语法

```javascript
expression.GetParentTableCell();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

此示例演示如何获取包含当前内容控件的表格单元格。

```javascript editor-docx
// Creates a block content control in the table cell, returns this cell as a parent of the container, and sets a black top border to this cell.

// How to return a parent table cell of the ApiBlockLvlSdt object.

// Creates a block level container, adds it to the table in the current document, and returns the parent ApiTableCell object.
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
let cell = table.GetRow(0).GetCell(0);
cell.AddElement(0, blockLvlSdt);
let parentTableCell = blockLvlSdt.GetParentTableCell();
parentTableCell.SetCellBorderTop("single", 32, 0, 51, 51, 51);
```
