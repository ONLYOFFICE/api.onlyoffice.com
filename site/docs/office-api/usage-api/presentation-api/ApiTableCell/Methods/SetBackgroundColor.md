# SetBackgroundColor

Sets the background color to the current table cell.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | If not passed, the background color will be cleared. |

## Returns

boolean

## Example

Set the background color of a table cell in a presentation.

```javascript editor-pptx
// Useful for coloring the background of a cell.

// Set an orange background for the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.RGB(255, 111, 61));
slide.RemoveAllObjects();
slide.AddObject(table);
```
