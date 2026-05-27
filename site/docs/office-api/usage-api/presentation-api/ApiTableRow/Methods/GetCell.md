# GetCell

Returns a cell by its position in the current row.

## Syntax

```javascript
expression.GetCell(nPos);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The cell position in the table row. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

Access a specific table cell using its column position in a presentation.

```javascript editor-pptx
// How do I retrieve a cell from a row by its column index in a presentation?

// Select a cell from a table row to read or modify its content in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell of the first row.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
```
