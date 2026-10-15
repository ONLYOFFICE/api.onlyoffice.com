# SetTableBorderInsideH

Specifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge of the parent table (all horizontal borders which are not the topmost or bottommost borders).

## Syntax

```javascript
expression.SetTableBorderInsideH(type, size, fill);
```

`expression` - A variable that represents an [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The horizontal table cell border style. |
| size | Required | [mm](../../Enumeration/mm.md) |  | The width of the current border. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the current border. |

## Returns

boolean

## Example

Set the inner horizontal borders through the table properties in a presentation.

```javascript editor-pptx
// Inner horizontal borders are all the row separators except the outer edges.

// Draw thin orange separators between the table rows.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderInsideH("single", 0.5, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
