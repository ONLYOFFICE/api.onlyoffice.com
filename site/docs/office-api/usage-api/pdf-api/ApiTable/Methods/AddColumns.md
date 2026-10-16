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

[ApiTable](../../ApiTable/ApiTable.md)

## Example

Add new columns to a table in a PDF.

```javascript editor-pdf
// Insert several columns into a table at once in a PDF.

// Create a table and add two columns after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetCell(0, 0);
table.AddColumns(cell, 2);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two columns added. Total columns: ' + table.GetRow(0).GetCellsCount());
cell.GetContent().Push(paragraph);

page.AddObject(table);
```
