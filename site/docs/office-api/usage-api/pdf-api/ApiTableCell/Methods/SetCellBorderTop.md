# SetCellBorderTop

Sets the border which shall be displayed at the top of the current table cell.

## Syntax

```javascript
expression.SetCellBorderTop(borderWidth, fill);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderWidth | Required | [mm](../../Enumeration/mm.md) |  | The width of the current border. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the current border. |

## Returns

boolean

## Example

Set the top border of a table cell with a fill color in a PDF.

```javascript editor-pdf
// How do I customize the appearance of the top edge of a cell in a PDF?

// Style the border on the top side of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderTop(2, fill);

page.AddObject(table);
```
