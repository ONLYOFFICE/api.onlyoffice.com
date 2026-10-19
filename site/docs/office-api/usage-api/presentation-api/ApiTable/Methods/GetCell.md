# GetCell

Returns a cell by its position.

## Syntax

```javascript
expression.GetCell(rowIndex, cellIndex);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowIndex | Required | number |  | The row index in the current table. |
| cellIndex | Required | number |  | The cell index in the specified row. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## Example

Get a table cell by its row and column index in a presentation.

```javascript editor-pptx
// Useful for accessing a specific cell in a table.

// Create a table and add text to the cell at row 0, column 1.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetCell(0, 1);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row 0, Col 1");
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
