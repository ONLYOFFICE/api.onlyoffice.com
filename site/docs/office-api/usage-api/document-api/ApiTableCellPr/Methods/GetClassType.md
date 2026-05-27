# GetClassType

Returns a type of the ApiTableCellPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableCellPr"

## Example

Retrieve the class type of a table cell properties object in a document.

```javascript editor-docx
// How do I identify what type of object holds the table cell properties in a document?

// Read and display the category label assigned to a table cell properties object in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableCellPr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
