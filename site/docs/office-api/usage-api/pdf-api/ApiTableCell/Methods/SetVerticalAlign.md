# SetVerticalAlign

Specifies the vertical alignment for text within the current table cell.

## Syntax

```javascript
expression.SetVerticalAlign(verticalAlign);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| verticalAlign | Required | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | The vertical alignment type. |

## Returns

boolean

## Example

Set vertical alignment of text within a table cell in a PDF.

```javascript editor-pdf
// How do I position text vertically within a cell in a PDF?

// Align content to the top, middle, or bottom of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(1);
row.SetHeight(30 * 36000);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetVerticalAlign("bottom");

page.AddObject(table);
```
