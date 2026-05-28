# GetClassType

Returns a type of the ApiTableCell class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableCell"

## Example

Identify the type of a table cell object in a document.

```javascript editor-docx
// How do I find out what kind of object a table cell is in a document?

// Confirm the object category of a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Cell #1");
table.SetStyle(tableStyle);
doc.Push(table);
let classType = cell.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
