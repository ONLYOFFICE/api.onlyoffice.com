# GetRowIndex

Returns an index of the parent row.

## Syntax

```javascript
expression.GetRowIndex();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get an index of the row.

```javascript editor-docx
// How to get row index of the table cell.

// Retrieve the cell from the table and add a text showing its row index.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Row index: " + table.GetCell(0, 0).GetRowIndex());
```
