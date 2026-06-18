# AddRow

Adds a new row to the current table.

## Syntax

```javascript
expression.AddRow(referenceCell, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| referenceCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell used as an insertion reference. |
| isBefore | Optional | boolean | false | Adds a new row before or after the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

Insert a new row into a table in a PDF

```javascript editor-pdf
// Can I add more rows to an existing table in a PDF?

// Attach a row at a specific position within a table in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.AddRow(table.GetRow(1).GetCell(0), true);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("New row was added here.");
content.Push(paragraph);

page.AddObject(table);
```
