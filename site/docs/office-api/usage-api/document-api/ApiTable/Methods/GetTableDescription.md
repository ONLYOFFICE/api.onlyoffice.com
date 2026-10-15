# GetTableDescription

Returns the table description.

Inherited from [ApiTablePr.GetTableDescription](../../ApiTablePr/Methods/GetTableDescription.md).

## Syntax

```javascript
expression.GetTableDescription();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the descriptive text assigned to a table in a document.

```javascript editor-docx
// How do I retrieve the description that has been set on a table in a document?

// Display the stored description of a table as paragraph text in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + table.GetTableDescription());
doc.Push(table);
```
