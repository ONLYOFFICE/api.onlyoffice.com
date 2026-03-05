# GetRow

Returns a row by its index.

## Syntax

```javascript
expression.GetRow(nIndex);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The row index (position) in the table. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

How to get a row object from the table.

```javascript editor-pdf
// Create a table, add rows and columns, then get its row by index.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the first row.");
content.Push(paragraph);

page.AddObject(table);
```
