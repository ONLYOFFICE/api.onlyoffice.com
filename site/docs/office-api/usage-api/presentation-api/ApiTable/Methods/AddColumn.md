# AddColumn

Adds a new column to the end of the current table.

## Syntax

```javascript
expression.AddColumn(oCell, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | If not specified, a new column will be added to the end of the table. |
| isBefore | Optional | boolean | false | Add a new column before or after the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

This method doesn't return any data.

## Example

This example adds a new column to the table.

```javascript editor-pptx
// How to insert a column to the table.

// Create a 2x4 table, set its position and then insert a column to it.

const presentation = Api.GetPresentation();
presentation.SetSizes(300 * 36000, 190 * 36000);

const table = Api.CreateTable(2, 4);
table.SetPosition(0 * 36000, 60 * 36000);
table.AddColumn(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);

```
