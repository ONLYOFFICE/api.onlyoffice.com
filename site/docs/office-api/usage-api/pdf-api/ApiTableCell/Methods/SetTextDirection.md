# SetTextDirection

Specifies the direction of the text flow for the current table cell.

## Syntax

```javascript
expression.SetTextDirection(textDirection);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textDirection | Required | [TextFlowDirection](../../Enumeration/TextFlowDirection.md) |  | The text flow direction. |

## Returns

boolean

## Example

Set the direction that text flows inside a table cell in a PDF.

```javascript editor-pdf
// How do I rotate text direction in a table cell in a PDF?

// Change the text orientation inside your table cell in a PDF.

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
