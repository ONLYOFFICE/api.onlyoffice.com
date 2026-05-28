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

Read the unique identifier assigned to each table cell in a document.

```javascript editor-docx
// How do I find the unique identifier of a table cell in a document?

// Distinguish individual table cells by their identifiers in a document.

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
