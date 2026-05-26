# MergeCells

Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null".
- **Warning**: The number of cells in any row and the number of rows in the current table may be changed.

## Syntax

```javascript
expression.MergeCells(aCells);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aCells | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md)[] |  | The array of cells. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

Merge an array of cells into one.

```javascript editor-pptx
// Get two cells by their position index and merge them.

// Create a table, obtain two cells, and merge them together.

const presentation = Api.GetPresentation();

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell1 = row.GetCell(0);
const cell2 = row.GetCell(1);
table.MergeCells([cell1, cell2]);

const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This cell was formed by merging two cells.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);
```
