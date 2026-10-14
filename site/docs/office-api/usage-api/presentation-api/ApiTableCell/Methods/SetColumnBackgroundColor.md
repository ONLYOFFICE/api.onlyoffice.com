# SetColumnBackgroundColor

Sets the background color to all cells in the column containing the current cell.

## Syntax

```javascript
expression.SetColumnBackgroundColor(color);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | If not passed, the background color will be cleared. |

## Returns

boolean

## Example

Set the background color for all cells in the column containing the cell in a presentation.

```javascript editor-pptx
// Useful for coloring an entire column background.

// Set an orange background for the entire first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 4);
const cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(Api.RGB(255, 111, 61));
slide.RemoveAllObjects();
slide.AddObject(table);
```
