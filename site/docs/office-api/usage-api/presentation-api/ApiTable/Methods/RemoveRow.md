# RemoveRow

Removes a table row with the specified cell.

## Syntax

```javascript
expression.RemoveRow(oCell);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The table cell from the row which will be removed. |

## Returns

boolean

## Example

This example removes a table row with the specified cell.

```javascript editor-pptx
// How to delete a row from the table.

// Create a table, create cells and remove the whole row by its cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
let row = table.GetRow(0);
let cell = row.GetCell(0);
table.RemoveRow(cell);
row = table.GetRow(0);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The first row was removed.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);

```
