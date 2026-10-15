# GetShadow

Returns the shadow of the current graphic object.

Inherited from [ApiDrawing.GetShadow](../../ApiDrawing/Methods/GetShadow.md).

## Syntax

```javascript
expression.GetShadow();
```

`expression` - A variable that represents an [ApiOleObject](../ApiOleObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShadow](../../ApiShadow/ApiShadow.md) \| null

## Example

Read the shadow of a drawing and reuse it in a presentation.

```javascript editor-pptx
// Retrieve the shadow applied to one shape and apply the same shadow to another.

// Set a shadow on the first shape, read it with GetShadow, and apply it to a second shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(40 * 36000, 40 * 36000);
slide.AddObject(shape);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 }));
const shadow = shape.GetShadow();
const shape2 = Api.CreateShape("ellipse", 100 * 36000, 50 * 36000, fill, stroke);
shape2.SetPosition(40 * 36000, 110 * 36000);
slide.AddObject(shape2);
shape2.SetShadow(shadow);
```
