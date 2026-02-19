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

boolean

## Example

How to set cell left border with its fill color.

```javascript editor-pdf
// Create table and set its cell left border.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderLeft(2, fill);

page.AddObject(table);

```
