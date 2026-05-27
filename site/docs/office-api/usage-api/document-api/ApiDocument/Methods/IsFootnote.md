# IsFootnote

Check if the current document content is a footnote.

Inherited from [ApiDocumentContent.IsFootnote](../../ApiDocumentContent/Methods/IsFootnote.md).

## Example

Detect whether a note is a footnote in a document.

```javascript editor-docx
// How do I check if a note content block belongs to a footnote in a document?

// Verify note type to decide whether to display bottom-of-page or end-of-document reference text.

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
