# SetShd

Specifies the shading which is applied to the extents of the current table.

## Syntax

```javascript
expression.SetShd(shd);
```

`expression` - A variable that represents an [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | Required | [ApiShd](../../ApiShd/ApiShd.md) |  | The shading created with the Api.CreateShd method. |

## Returns

boolean

## Example

Fill the table background through its table properties in a presentation.

```javascript editor-pptx
// The table background is drawn under the cells, so it shows through the cells which have no fill.

// Apply a yellow background to the table style and clear the cell fills to make it visible.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetShd(Api.CreateSolidFill(Api.RGB(255, 213, 79)));
style.SetTablePr(tablePr);
table.Cells.forEach(function (row) { row.forEach(function (cell) { cell.SetShd(Api.CreateShd("nil")); }); });
slide.RemoveAllObjects();
slide.AddObject(table);
```
