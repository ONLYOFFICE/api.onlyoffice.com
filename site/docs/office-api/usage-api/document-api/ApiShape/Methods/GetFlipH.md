# GetFlipH

Get horizontal flip of current drawing.

Inherited from [ApiDrawing.GetFlipH](../../ApiDrawing/Methods/GetFlipH.md).

## Example

Check whether a drawing is flipped horizontally in a document.

```javascript editor-docx
// How do I read the horizontal flip state of a shape in a document?

// Display the horizontal flip flag of a drawing as a text label in a document.

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
