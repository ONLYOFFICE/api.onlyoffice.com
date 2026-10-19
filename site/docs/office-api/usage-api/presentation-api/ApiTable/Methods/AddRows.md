# AddRows

Adds the new rows to the current table.

## Syntax

```javascript
expression.AddRows(oCell, nCount, isBefore);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell after which the new rows will be added. If not specified, the new rows will be added at the end of the table. |
| nCount | Required | Number |  | Count of rows to be added. |
| isBefore | Optional | boolean | false | Adds the new rows before (true) or after (false) the specified cell. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Add new rows to the table in a presentation.

```javascript editor-pptx
// Useful for adding multiple rows to a table at once.

// Create a table and add two rows after the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddRows(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Two rows were added. Total rows: " + table.GetRowsCount());
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
