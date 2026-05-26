# Copy

Creates a copy of the current table.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md)

## Example

Duplicate an existing table and place the copy in a document.

```javascript editor-docx
// How do I make an identical copy of a table in a document?

// Reproduce a table with all its structure and style preserved in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let copyTable = table.Copy();
doc.Push(copyTable);
```
