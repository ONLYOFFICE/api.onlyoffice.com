# RemoveColumn

Removes a table column with the specified cell.

## Syntax

```javascript
expression.RemoveColumn(oCell);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The table cell from the column which will be removed. |

## Returns

boolean

## Example

How to delete a column from the table.

```javascript editor-pdf
// Create a table, create cells and remove the whole column by its cell.

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
