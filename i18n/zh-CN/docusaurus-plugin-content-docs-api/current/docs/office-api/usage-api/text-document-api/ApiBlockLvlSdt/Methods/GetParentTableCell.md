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

获取文档中包含当前内容控件的表格单元格。

```javascript editor-docx
// Create a block content control in the table cell, return this cell as a parent of the container, and set a black top border to this cell.

// Create a block level container, add it to the table in the current document, and return the parent table cell object.

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
