# GetPrevDrawing

Returns the previous inline drawing object if exists.

## Syntax

```javascript
expression.GetPrevDrawing();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| null

## Example

This example shows how to get the previous inline drawing object if exists.

```javascript editor-docx
// How to set vertical flip for the previous drawing.

// Get the previous drawing and update its properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
paragraph.AddDrawing(copyDrawing);
let nextDrawing = copyDrawing.GetPrevDrawing();
nextDrawing.SetHorFlip(true);
```
