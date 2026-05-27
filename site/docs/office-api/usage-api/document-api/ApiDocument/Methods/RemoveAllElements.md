# RemoveAllElements

Removes all the elements from the current document or from the current document element.
💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add
content to this paragraph, use the [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) method.

Inherited from [ApiDocumentContent.RemoveAllElements](../../ApiDocumentContent/Methods/RemoveAllElements.md).

## Example

Clear all elements from a shape's content area in a document.

```javascript editor-docx
// How do I delete every element inside a shape's content block in a document?

// Reset a shape's interior to an empty state before inserting new content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.AddElement(0, paragraph);
```
