# GetInternalId

Returns an internal ID of the current document content.

Inherited from [ApiDocumentContent.GetInternalId](../../ApiDocumentContent/Methods/GetInternalId.md).

## Example

Get the internal ID of a document content in a document.

```javascript editor-docx
// How to get the internal id for a document content?

// Get the internal id and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(70, 130, 180));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', Api.MillimetersToEmus(100), Api.MillimetersToEmus(60), fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetContent();
const internalId = docContent.GetInternalId();

const shapeParagraph = docContent.GetElement(0);
shapeParagraph.AddText('Document content internal ID: ' + internalId);
```
