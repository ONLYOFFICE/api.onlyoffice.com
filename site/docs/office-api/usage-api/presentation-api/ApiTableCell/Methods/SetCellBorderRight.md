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

This example sets the border which shall be displayed at the right of the table cell.

```javascript editor-pptx
// How to set cell right border with its fill color.

// Create table and set its cell right border.

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
