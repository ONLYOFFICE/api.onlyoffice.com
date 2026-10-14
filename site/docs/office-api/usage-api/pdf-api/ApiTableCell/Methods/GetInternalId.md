# GetInternalId

Returns an internal id of the current table cell.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal identifier of a table cell in a PDF.

```javascript editor-pdf
// Get a unique identifier for a table cell in a PDF.

// Retrieve the internal id and display it in the cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Internal id: ' + cell.GetInternalId());
content.Push(paragraph);

page.AddObject(table);
```
