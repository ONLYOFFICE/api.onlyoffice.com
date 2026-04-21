# GetClassType

Returns a type of the ApiTableRowPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableRowPr"

## Example

Check the class type returned by a table row properties in a document.

```javascript editor-docx
// How do I check what type a table row properties object is in a document?

// Retrieve and output the class type string for a table row properties in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRowPr = tableStyle.GetTableRowPr();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableRowPr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
