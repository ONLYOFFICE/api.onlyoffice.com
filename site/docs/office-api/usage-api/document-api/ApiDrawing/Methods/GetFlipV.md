# GetFlipV

Get vertical flip of current drawing.

## Syntax

```javascript
expression.GetFlipV();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

Check whether a drawing is flipped vertically in a document.

```javascript editor-docx
// How do I read the vertical flip state of a shape in a document?

// Display the vertical flip flag of a drawing as a text label in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVertFlip(true);
let flip = drawing.GetFlipV();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing is flipped vertically: " + flip);
doc.AddElement(0, paragraph);
```
