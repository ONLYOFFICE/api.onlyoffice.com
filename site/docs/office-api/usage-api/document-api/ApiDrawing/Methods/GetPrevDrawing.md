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

Access the drawing that appears immediately before another drawing in a document.

```javascript editor-docx
// How do I get the preceding drawing object in a document?

// Apply a horizontal flip to the earlier shape in a sequence of drawings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
paragraph.AddDrawing(copyDrawing);
let nextDrawing = copyDrawing.GetPrevDrawing();
nextDrawing.SetHorFlip(true);
```
