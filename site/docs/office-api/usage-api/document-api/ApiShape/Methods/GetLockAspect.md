# GetLockAspect

Returns whether the aspect ratio of the drawing is locked.

Inherited from [ApiDrawing.GetLockAspect](../../ApiDrawing/Methods/GetLockAspect.md).

## Syntax

```javascript
expression.GetLockAspect();
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Return whether the aspect ratio of the drawing is locked in a document.

```javascript editor-docx
// Useful for getting the lock aspect ratio state of a shape in a text document.

// Create a shape, lock its aspect ratio and display the result.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
drawing.SetLockAspect(true);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let lockAspect = drawing.GetLockAspect();
let innerParagraph = Api.CreateParagraph();
innerParagraph.AddText("Aspect ratio locked: " + lockAspect);
docContent.AddElement(0, innerParagraph);
```
