# SetShd

Specifies the shading which shall be applied to the extents of the current table cell.

## Syntax

```javascript
expression.SetShd(shd);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | Required | [ApiShd](../../ApiShd/ApiShd.md) |  | The shading created with the Api.CreateShd method. |

## Returns

This method doesn't return any data.

## Example

Apply a background color to a table cell in a presentation.

```javascript editor-pptx
// How do I fill a table cell with a color in a presentation?

// Create a table and set a solid color background for a cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const shd = Api.CreateShd("clear", Api.RGB(51, 51, 51));
cell.SetShd(shd);

slide.RemoveAllObjects();
slide.AddObject(table);
```
