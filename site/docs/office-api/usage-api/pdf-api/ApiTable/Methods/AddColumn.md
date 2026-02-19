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

boolean

## Example

How to insert a column to the table.

```javascript editor-pdf
// Create a 2x4 table, set its position and then insert a column to it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetPosition(3, 170);
table.AddColumn(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

page.AddObject(table);
```
