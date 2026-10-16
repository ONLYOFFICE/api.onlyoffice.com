# GetLockAspect

Returns whether the aspect ratio of the drawing is locked.

Inherited from [ApiDrawing.GetLockAspect](../../ApiDrawing/Methods/GetLockAspect.md).

## Syntax

```javascript
expression.GetLockAspect();
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Read whether the aspect ratio of a shape is locked on a page in a PDF form.

```javascript editor-pdf
// Query the aspect-ratio lock before resizing the shape.

// Create a shape, lock its aspect ratio, then read and display that lock state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockAspect(true);
const locked = shape.GetLockAspect();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Aspect ratio locked: " + locked);
```
