# SetShd

Specifies the shading which shall be applied to the extents of the current table cell.

## Syntax

```javascript
expression.SetShd(sType, r, g, b);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../Enumeration/ShdType.md) \| [ApiFill](../../ApiFill/ApiFill.md) |  | The shading type applied to the contents of the current table. Can be ShdType or ApiFill. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

boolean

## Example

Apply a background fill color to a table cell in a PDF.

```javascript editor-pdf
// How do I change the background color of a table cell in a PDF?

// Color the background of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetShd(fill);

page.AddObject(table);
```
