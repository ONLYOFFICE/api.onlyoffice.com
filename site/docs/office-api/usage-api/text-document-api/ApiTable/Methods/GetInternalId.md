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

Get the internal ID of a table in a document.

```javascript editor-docx
// How do I get the internal id in a document?

// Get the internal id using a table object in a document.

const doc = Api.GetDocument();
const table = Api.CreateTable(2, 1);
table.SetWidth('percent', 100);
doc.Push(table);

const internalId = table.GetInternalId();

const cell = table.GetCell(0, 0);
const cellContent = cell.GetContent();
const paragraph = cellContent.GetElement(0);
paragraph.AddText('This table internal ID: ' + internalId);
```
