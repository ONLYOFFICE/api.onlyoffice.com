# RemoveColumn

Removes a column containing the current cell.

## Syntax

```javascript
expression.RemoveColumn();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example removes a column containing the cell.

```javascript editor-docx
// How to delete the column with Cell 1.

// Get the first cell and remove its column. 

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 0).RemoveColumn();
table.GetCell(0, 0).GetContent().GetElement(0).AddText("A column with Cell 1 was removed.");
```
