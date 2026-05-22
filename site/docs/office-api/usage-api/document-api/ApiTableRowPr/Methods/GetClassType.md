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

Read the class type of a table row properties object in a document.

```javascript editor-docx
// How do I find out what kind of object holds the row formatting settings in a document?

// Identify the type label assigned to a table row properties object in a document.

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
