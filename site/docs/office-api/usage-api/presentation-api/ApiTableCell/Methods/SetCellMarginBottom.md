# SetCellMarginBottom

Specifies an amount of space which shall be left between the bottom extent of the cell contents and the border
of a specific individual table cell within a table.

## Syntax

```javascript
expression.SetCellMarginBottom(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | If this value is `null`, then default table cell bottom margin shall be used, otherwise override the table cell bottom margin with specified value for the current cell. |

## Returns

This method doesn't return any data.

## Example

Set the spacing between text and the bottom edge of a table cell in a presentation.

```javascript editor-pptx
// How do I add space below text in a table cell in a presentation?

// Adjust the bottom margin to control padding in a table cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginBottom(600);

slide.RemoveAllObjects();
slide.AddObject(table);
```
