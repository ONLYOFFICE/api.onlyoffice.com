# GetIndex

Returns the current cell index.

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the cell index.

```javascript editor-docx
// How to get position index of the cell.

// Retrieve the index of the table cell and display it in the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell index: " + table.GetCell(0, 0).GetIndex());
```
