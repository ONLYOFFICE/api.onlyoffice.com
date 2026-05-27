# GetClassType

Returns a type of the ApiTablePr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tablePr"

## Example

Identify the kind of formatting object attached to a table in a document.

```javascript editor-docx
// How do I confirm what category a table's settings object belongs to in a document?

// Verify the object type of a table's property container in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tablePr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
