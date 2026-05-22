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

Find the column position of a table cell in a document.

```javascript editor-docx
// How do I determine which column a table cell occupies in a document?

// Look up the column number of a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell index: " + table.GetCell(0, 0).GetIndex());
```
