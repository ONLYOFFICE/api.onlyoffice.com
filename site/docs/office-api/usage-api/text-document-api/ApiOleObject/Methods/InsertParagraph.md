# InsertParagraph

Inserts a paragraph at the specified position.

Inherited from [ApiDrawing.InsertParagraph](../../ApiDrawing/Methods/InsertParagraph.md).

## Example

This example inserts a paragraph at the specified position.

```javascript editor-docx
// How to insert the paragraph into the drawing.

// Create a rectangle and then add a paragraph to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object with paragraph.");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph.");
drawing.InsertParagraph(paragraph);
```

