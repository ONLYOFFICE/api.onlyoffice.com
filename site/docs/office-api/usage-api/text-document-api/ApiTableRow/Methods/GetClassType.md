# GetClassType

Returns a type of the ApiTableRow class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableRow"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-docx playground
// How to get a class type of ApiTableRow.

// Retrieve class type of ApiTableRow object and insert it to the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableRow.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
