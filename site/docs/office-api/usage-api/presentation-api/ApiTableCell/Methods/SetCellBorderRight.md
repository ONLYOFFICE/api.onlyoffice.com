# SetCellBorderRight

Sets the border which shall be displayed at the right of the current table cell.

## Syntax

```javascript
expression.SetCellBorderRight(fSize, oApiFill);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fSize | Required | [mm](../../Enumeration/mm.md) |  | The width of the current border. |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the current border. |

## Returns

This method doesn't return any data.

## Example

Add a colored border to the right side of a table cell in a presentation.

```javascript editor-pptx
// How do I add a colored border to the right side of a table cell in a presentation?

// Create a table and apply a right border with a solid color fill in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
cell.SetCellBorderRight(2, fill);

slide.RemoveAllObjects();
slide.AddObject(table);
```
