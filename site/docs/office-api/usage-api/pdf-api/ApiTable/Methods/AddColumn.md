# AddColumn

Adds a new column to the end of the current table.

## Syntax

```javascript
expression.AddColumn(referenceCell, before);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| referenceCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell used as an insertion reference. |
| before | Optional | boolean | false | Add a new column before or after the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

boolean

## Example

Insert a new column into a table in a PDF

```javascript editor-pdf
// Can I add more columns to an existing table in a PDF?

// Attach a column at a specific position within a table in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetPosition(3, 170);
table.AddColumn(table.GetRow(0).GetCell(1), true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

page.AddObject(table);
```
