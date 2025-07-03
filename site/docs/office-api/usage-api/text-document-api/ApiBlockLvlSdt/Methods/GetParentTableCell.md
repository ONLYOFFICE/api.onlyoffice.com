# GetParentTableCell

Returns a table cell that contains the current content control.

## Syntax

```javascript
expression.GetParentTableCell();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## Example

This example shows how to get a table cell that contains the current content control.

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
