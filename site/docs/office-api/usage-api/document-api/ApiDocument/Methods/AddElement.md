# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the document content.

Inherited from [ApiDocumentContent.AddElement](../../ApiDocumentContent/Methods/AddElement.md).

## Example

Insert a new paragraph at a specific position inside a shape in a document.

```javascript editor-docx
// How do I add a paragraph to a content container in a document?

// Replace the default content of a shape by clearing it and placing a custom paragraph inside in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.AddElement(0, paragraph);
```
