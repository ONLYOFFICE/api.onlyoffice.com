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

This example shows how to get the internal ID of a table.

```javascript editor-docx
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
