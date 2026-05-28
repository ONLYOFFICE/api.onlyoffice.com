# GetIndex

Returns the current row index.

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Find the position of a row within a table in a document.

```javascript editor-docx
// How do I determine which row number a specific row occupies in a document?

// Retrieve the numeric position of a table row to reference it by order in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let row = table.GetRow(1);
row.GetCell(0).GetContent().GetElement(0).AddText("Row index: " + row.GetIndex());
doc.Push(table);
```
