# SetCellBorderBottom

Sets the border which shall be displayed at the bottom of the current table cell.

## Syntax

```javascript
expression.SetCellBorderBottom(borderWidth, fill);
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

Add a bottom border to a table cell in a PDF.

```javascript editor-pdf
// How do I create a border on the bottom edge of a cell in a PDF?

// Draw a styled line along the bottom of a table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderBottom(2, fill);

page.AddObject(table);
```
