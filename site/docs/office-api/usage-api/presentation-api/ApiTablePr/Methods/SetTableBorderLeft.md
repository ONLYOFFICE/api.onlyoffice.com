# SetTableBorderLeft

Sets the border which will be displayed on the left of the current table.

## Syntax

```javascript
expression.SetTableBorderLeft(type, size, fill);
```

`expression` - A variable that represents an [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The left border style. |
| size | Required | [mm](../../Enumeration/mm.md) |  | The width of the current left border. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the current border. |

## Returns

boolean

## Example

Set the left table border through the table properties in a presentation.

```javascript editor-pptx
// The border fill accepts any ApiFill object, not only a solid color.

// Apply a dark gray border to the left of the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderLeft("single", 1, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
