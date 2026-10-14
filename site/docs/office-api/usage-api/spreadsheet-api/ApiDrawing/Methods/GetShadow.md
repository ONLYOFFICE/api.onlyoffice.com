# GetShadow

Returns the shadow of the current graphic object.

## Syntax

```javascript
expression.GetShadow();
```

`expression` - A variable that represents an [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShadow](../../ApiShadow/ApiShadow.md) \| null

## Example

Read the shadow of a drawing and reuse it in a spreadsheet.

```javascript editor-xlsx
// Retrieve the shadow applied to one shape and apply the same shadow to another.

// Set a shadow on the first shape, read it with GetShadow, and apply it to a second shape.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, fill, stroke, 2, 0, 2, 0);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 }));
const shadow = shape.GetShadow();
const shape2 = worksheet.AddShape("ellipse", 100 * 36000, 50 * 36000, fill, stroke, 2, 0, 6, 0);
shape2.SetShadow(shadow);
```
