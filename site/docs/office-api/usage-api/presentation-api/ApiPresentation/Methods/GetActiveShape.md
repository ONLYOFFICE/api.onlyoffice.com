# GetActiveShape

Returns the shape that is currently selected or being edited in the presentation.

## Syntax

```javascript
expression.GetActiveShape();
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../ApiShape/ApiShape.md) \| null

## Example

Select a shape and retrieve it as the active shape to apply a fill change.

```javascript editor-pptx
// GetActiveShape returns the shape currently selected or being edited in the presentation.

// Add two shapes to the slide, select the first, and recolor it using the returned active shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 153, 204));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("heart", 38 * 36000, 38 * 36000, fill, stroke);
shape.SetPosition(184 * 36000, 0);
slide.AddObject(shape);

const fill2 = Api.CreateSolidFill(Api.RGB(255, 153, 204));
const shape2 = Api.CreateShape("heart", 38 * 36000, 38 * 36000, fill2, stroke);
shape2.SetPosition(100 * 36000, 50 * 36000);
slide.AddObject(shape2);

shape.Select(true);
const activeShape = presentation.GetActiveShape();
activeShape.SetFill(Api.CreateSolidFill(Api.RGB(255, 0, 0)));
```
