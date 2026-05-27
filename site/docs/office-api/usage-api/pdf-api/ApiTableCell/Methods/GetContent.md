# GetContent

Returns the current cell content.

## Syntax

```javascript
expression.GetContent();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

Retrieve the inner content from a table cell in a PDF.

```javascript editor-pdf
// How do I access what is stored inside a table cell in a PDF?

// Extract the document elements contained within a cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell.");
content.Push(paragraph);

page.AddObject(table);
```
