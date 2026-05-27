# MergeCells

Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null".
- **Warning**: The number of cells in any row and the number of rows in the current table may be changed.

## Syntax

```javascript
expression.MergeCells(cells);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cells | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md)[] |  | The cells to merge. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

Combine multiple cells into one unified cell in a PDF.

```javascript editor-pdf
// How can I join cells together within a table in a PDF?

// Join adjacent cells to form a single larger cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

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

page.AddObject(table);
```
