# GetParentTable

Returns a parent table of the current cell.

## Syntax

```javascript
expression.GetParentTable();
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Get the parent table of a table cell in a presentation.

```javascript editor-pptx
// Useful for getting the table that contains the cell.

// Get the parent table and set its background color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const parentTable = cell.GetParentTable();
parentTable.SetBackgroundColor(Api.RGB(255, 213, 79));
slide.RemoveAllObjects();
slide.AddObject(table);
```
