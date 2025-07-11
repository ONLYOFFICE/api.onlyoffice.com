# Delete

Deletes the current table.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the table.

```javascript editor-docx
// How to remove a table from the document.

// Get a table and delete it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.Delete();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The table was removed from the document.");
doc.Push(paragraph);
```
