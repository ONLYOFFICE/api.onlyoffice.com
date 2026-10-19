# SetTableBorderInsideV

Specifies the border which will be displayed on all vertical table cell borders which are not on the outmost edge of the parent table (all vertical borders which are not the leftmost or rightmost borders).

## Syntax

```javascript
expression.SetTableBorderInsideV(type, size, fill);
```

`expression` - A variable that represents an [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The vertical table cell border style. |
| size | Required | [mm](../../Enumeration/mm.md) |  | The width of the current border. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the current border. |

## Returns

boolean

## Example

Set the inner vertical borders through the table properties in a presentation.

```javascript editor-pptx
// Inner vertical borders are all the column separators except the outer edges.

// Draw thin orange separators between the table columns.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderInsideV("single", 0.5, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
