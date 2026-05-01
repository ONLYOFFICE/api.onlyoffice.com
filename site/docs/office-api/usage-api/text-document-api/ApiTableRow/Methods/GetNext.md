# GetNext

Returns the next row if exists.

## Syntax

```javascript
expression.GetNext();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## Example

Get the next row in a document.

```javascript editor-docx
// Get the next row of the current row in a document.

// Display the first and the second row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.GetNext().GetCell(0).GetContent().GetElement(0).AddText("Second row");
doc.Push(table);
```
