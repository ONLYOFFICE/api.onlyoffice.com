# GetCell

Returns a cell by its position in the current row.

## Syntax

```javascript
expression.GetCell(cellIndex);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cellIndex | Required | number |  | The zero-based cell index in the table row. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

Access a specific cell from a table row in a PDF.

```javascript editor-pdf
// How do I retrieve a single cell from a row in a PDF?

// Get any cell you want from a table row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell of the first row.");
content.Push(paragraph);

page.AddObject(table);
```
