# SetTextDirection

Specifies the direction of the text flow for the current table cell.

## Syntax

```javascript
expression.SetTextDirection(sType);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TextFlowDirection](../../Enumeration/TextFlowDirection.md) |  | The type of the text flow direction. |

## Returns

boolean

## Example

How to set text direction of the table cell.

```javascript editor-pdf
// Create a table and set the text direction for the ApiTableCell object.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);
const cell = row.GetCell(0);
cell.SetTextDirection("tbrl");
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);

page.AddObject(table);

```
