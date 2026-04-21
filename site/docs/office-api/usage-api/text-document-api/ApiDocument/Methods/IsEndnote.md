# IsEndnote

Check if the current document content is an endnote.

Inherited from [ApiDocumentContent.IsEndnote](../../ApiDocumentContent/Methods/IsEndnote.md).

## Example

Check is the document content is an endnote.

```javascript editor-docx
// How to add endnote to the document.

// Use document content to is endnote.

let doc = Api.GetDocument();
let endnote = doc.AddEndnote();
let paragraph = endnote.GetElement(0);
paragraph.AddText("Endnote text");

let isFootnote = endnote.IsFootnote();
let isEndnote  = endnote.IsEndnote();
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Footnote " + isFootnote);
paragraph.AddLineBreak();
paragraph.AddText("Endnote " + isEndnote);
```
