# AddRows

Adds the new rows to the current table.

## Syntax

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number |  | Count of rows to be added. |
| isBefore | Optional | boolean | false | Specifies if the new rows will be added before or after the current cell. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Add new rows to a table via one of its cells in a PDF.

```javascript editor-pdf
// Insert rows right after a specific cell in a PDF table.

// Add two rows after the first cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Two new rows added after this cell.');
cell.GetContent().Push(paragraph);
cell.AddRows(2, false);

page.AddObject(table);
```
