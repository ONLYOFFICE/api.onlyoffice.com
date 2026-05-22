# GetInternalId

Returns an internal ID of the current table.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the unique identifier assigned to a table in a document.

```javascript editor-docx
// How do I find the unique identifier of a table in a document?

// Read the built-in ID that distinguishes one table from another in a document.

const doc = Api.GetDocument();
const table = Api.CreateTable(2, 2);
table.SetWidth('percent', 100);
doc.Push(table);

const internalId = table.GetInternalId();

const cell = table.GetCell(0, 0);
const cellContent = cell.GetContent();
const paragraph = cellContent.GetElement(0);
paragraph.AddText('This table internal ID: ' + internalId);
```
