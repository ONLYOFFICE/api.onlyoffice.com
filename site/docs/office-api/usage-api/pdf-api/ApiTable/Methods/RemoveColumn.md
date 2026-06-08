# RemoveColumn

Removes a table column with the specified cell.

## Syntax

```javascript
expression.RemoveColumn(columnCell);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| columnCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | A cell from the column to remove. |

## Returns

boolean

## Example

Delete a column from a table in a PDF.

```javascript editor-pdf
// How do I remove an unwanted column from a table in a PDF?

// Take out a vertical column of cells from your table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
let cell = row.GetCell(1);
table.RemoveColumn(cell);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The second column was removed.");
content.Push(paragraph);

page.AddObject(table);
```
