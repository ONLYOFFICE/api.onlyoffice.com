# SelectNoteReference

Select the reference to this footnote/endnote. If this document content is not a footnote/endnote, do nothing.

Inherited from [ApiDocumentContent.SelectNoteReference](../../ApiDocumentContent/Methods/SelectNoteReference.md).

## Example

This example show how to select footnote/endnote reference in the document.

```javascript editor-docx
// How to add footnote to the document.

// How to select footnote reference and increate its font size.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

footnote.SelectNoteReference();

doc.GetRangeBySelect().SetFontSize(48);
```

