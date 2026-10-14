# Ungroup

Ungroups the current group of drawings.

:::note
This method is not supported in the document builder and works only in the editor.
:::

## Syntax

```javascript
expression.Ungroup();
```

`expression` - A variable that represents an [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)[] \| null

## Example

Group two shapes on the sheet, copy the group beside the original, then ungroup the copy in a spreadsheet.

```javascript editor-xlsx
// Keep the original group intact and split its copy into shapes to compare grouped and ungrouped side by side.

// Ungroup the copy so its shapes become individually editable next to the untouched original group.

const worksheet = Api.GetActiveSheet();

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(61, 155, 255));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());

const shape1 = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill1, stroke, 0, 0, 0, 0);
const shape2 = worksheet.AddShape("ellipse", 60 * 36000, 40 * 36000, fill2, stroke, 0, 0, 3, 0);

const group = worksheet.GroupDrawings([shape1, shape2]);
if (group) {
	const copy = group.Copy();
	worksheet.AddDrawing(copy, 4, 0, 0, 0);
	copy.Ungroup();
}
```
