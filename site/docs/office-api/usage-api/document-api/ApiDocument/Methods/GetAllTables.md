# GetAllTables

Returns an array of all tables from the current document content.

Inherited from [ApiDocumentContent.GetAllTables](../../ApiDocumentContent/Methods/GetAllTables.md).

## Syntax

```javascript
expression.GetAllTables();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md)[]

## Example

Retrieve all tables in a document.

```javascript editor-docx
// How do I collect every table present in a document?

// Insert text into the first cell of the first table to populate it with initial content.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tables = doc.GetAllTables();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = tables[0].GetCell(0, 0);
tables[0].AddElement(cell, 0, paragraph);
```
