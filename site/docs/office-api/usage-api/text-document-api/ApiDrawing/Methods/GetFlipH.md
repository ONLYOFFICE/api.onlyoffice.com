# GetFlipH

Get horizontal flip of current drawing.

## Syntax

```javascript
expression.GetFlipH();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

This example checks whether the drawing is flipped horizontally.

```javascript editor-docx
// How to get the horizontal flip property of the shape.

// Create a drawing, add text to it, and read its horizontal flip value.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let flip = drawing.GetFlipH();
paragraph = Api.CreateParagraph();
paragraph.AddText("Drawing is flipped horizontally: " + flip);
doc.AddElement(0, paragraph);
```
