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

Get the content object from a table cell.

```javascript editor-pptx
// Access the document content that the cell contains.

// Retrieve the content object and add text to a table cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
```
