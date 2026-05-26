# Select

Selects the current table.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select an entire table in a document.

```javascript editor-docx
// How do I programmatically select a whole table in a document?

// Highlight a table for further editing or copying in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This table is selected.");
table.Select();
```
