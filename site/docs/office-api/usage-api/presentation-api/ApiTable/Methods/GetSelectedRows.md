# GetSelectedRows

Returns the rows that contain the currently selected cells of the current table.

## Syntax

```javascript
expression.GetSelectedRows();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)[]

## Example

Get the selected rows from the table in a presentation.

```javascript editor-pptx
// Useful for retrieving currently selected rows in a table.

// Create a table and get the list of selected rows (returns empty when no selection).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(4, 3);
table.GetCell(0, 0).Select();
const selectedRows = table.GetSelectedRows();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Selected rows count: " + selectedRows.length);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
