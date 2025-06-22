# SetCellBorderLeft

Sets the border which shall be displayed at the left of the current table cell.

## Syntax

```javascript
expression.SetCellBorderLeft(fSize, oApiFill);
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

This example sets the border which shall be displayed at the left of the table cell.

```javascript editor-pptx
// How to set cell left border with its fill color.

// Create table and set its cell left border.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderLeft(2, fill);

slide.RemoveAllObjects();
slide.AddObject(table);

```
