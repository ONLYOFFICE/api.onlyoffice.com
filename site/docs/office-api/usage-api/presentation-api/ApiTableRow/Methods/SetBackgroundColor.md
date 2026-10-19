# SetBackgroundColor

Sets the background color to all cells in the current table row.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | If not passed, the background color will be cleared. |

## Returns

boolean

## Example

Set the background color for all cells in a table row in a presentation.

```javascript editor-pptx
// Useful for coloring the background of a row.

// Set an orange background for the second row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
row.SetBackgroundColor(Api.RGB(255, 111, 61));
slide.RemoveAllObjects();
slide.AddObject(table);
```
