# GetLockAspect

Returns whether the aspect ratio of the drawing is locked.

## Syntax

```javascript
expression.GetLockAspect();
```

`expression` - A variable that represents an [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Return whether the aspect ratio of the drawing is locked in a presentation.

```javascript editor-pptx
// Useful for getting the lock aspect ratio state of a shape in a presentation.

// Create a shape, lock its aspect ratio and display the result.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetLockAspect(true);
let docContent = drawing.GetContent();
let lockAspect = drawing.GetLockAspect();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Aspect ratio locked: " + lockAspect);
slide.AddObject(drawing);
```
