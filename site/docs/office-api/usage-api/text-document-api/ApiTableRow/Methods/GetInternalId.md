# GetInternalId

Returns an internal id of the current table row.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal ID of a table row in a document.

```javascript editor-docx
// How can I get the internal id using a table row in a document?

// Get the internal id for a table row in a document.

const doc = Api.GetDocument();
const table = Api.CreateTable(3, 3);
table.SetWidth('percent', 100);
doc.Push(table);

for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
	const colIndex = rowIndex;
	const cell = table.GetCell(rowIndex, colIndex);
	const cellParagraph = cell.GetContent().GetElement(0);
	const internalId = table.GetRow(rowIndex).GetInternalId();
	cellParagraph.AddText('This row internal ID: ' + internalId);
}
```
