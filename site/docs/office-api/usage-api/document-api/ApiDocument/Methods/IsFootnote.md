# IsFootnote

Check if the current document content is a footnote.

Inherited from [ApiDocumentContent.IsFootnote](../../ApiDocumentContent/Methods/IsFootnote.md).

## Example

Check is the document content is a footnote.

```javascript editor-docx
// How to add footnote to the document.

// Is footnote using a document content object.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

let isFootnote = footnote.IsFootnote();
let isEndnote  = footnote.IsEndnote();
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("Footnote " + isFootnote);
paragraph.AddLineBreak();
paragraph.AddText("Endnote " + isEndnote);
```
