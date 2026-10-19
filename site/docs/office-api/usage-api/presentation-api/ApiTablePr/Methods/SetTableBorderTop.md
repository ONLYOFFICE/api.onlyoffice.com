# SetTableBorderTop

Sets the border which will be displayed at the top of the current table.

## Syntax

```javascript
expression.SetTableBorderTop(type, size, fill);
```

`expression` - A variable that represents an [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The top border style. |
| size | Required | [mm](../../Enumeration/mm.md) |  | The width of the current top border. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the current border. |

## Returns

boolean

## Example

Set the top table border through the table properties in a presentation.

```javascript editor-pptx
// The border width is measured in millimeters and the color is passed as an ApiFill object.

// Apply a dark gray border above the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderTop("single", 1, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
