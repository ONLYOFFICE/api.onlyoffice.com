# GetClassType

Returns a type of the ApiTableStylePr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableStylePr](../ApiTableStylePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableStylePr"

## Example

Find out the class type of a table style properties object in a document.

```javascript editor-docx
// How can I get the class type of a table style properties in a document?

// Get the class type of a table style properties and display it in the document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableStylePr = tableStyle.GetConditionalTableStyle();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableStylePr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
