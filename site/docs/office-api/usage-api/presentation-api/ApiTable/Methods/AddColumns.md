# AddColumns

Adds the new columns to the current table.

## Syntax

```javascript
expression.AddColumns(oCell, nCount, isBefore);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell after which the new columns will be added. If not specified, the new columns will be added at the end of the table. |
| nCount | Required | Number |  | Count of columns to be added. |
| isBefore | Optional | boolean | false | Adds the new columns before (true) or after (false) the specified cell. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Add new columns to the table in a presentation.

```javascript editor-pptx
// Useful for adding multiple columns to a table at once.

// Create a table and add two columns after the first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddColumns(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Two columns added. Total columns: " + table.GetRow(0).GetCellsCount());
cell.GetContent().Push(paragraph);
table.SetSize(200*36000, 100*36000);
slide.RemoveAllObjects();
slide.AddObject(table);
```
