# GetInternalId

Returns an internal id of the current table cell.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the internal ID of a table cell.

```javascript editor-docx
const doc = Api.GetDocument();
const table = Api.CreateTable(3, 3);
table.SetWidth('percent', 100);
doc.Push(table);

for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
	for (let colIndex = 0; colIndex < 3; colIndex++) {
		const cell = table.GetCell(rowIndex, colIndex);
		const cellParagraph = cell.GetContent().GetElement(0);
		cellParagraph.AddText('This cell ID: ' + cell.GetInternalId());
	}
}

```
