# GetElement

Returns an element by its position in the document.

Inherited from [ApiDocumentContent.GetElement](../../ApiDocumentContent/Methods/GetElement.md).

## Example

Retrieve a specific element by its index from a document content in a document.

```javascript editor-docx
// How do I get a single element at a known position inside a document content in a document?

// Add text to a header paragraph by fetching it directly through its position index.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");
```
