# SelectNoteReference

Selects the reference to this footnote/endnote.

If this document content is not a footnote/endnote, do nothing.

Inherited from [ApiDocumentContent.SelectNoteReference](../../ApiDocumentContent/Methods/SelectNoteReference.md).

## Syntax

```javascript
expression.SelectNoteReference();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select a footnote reference marker in a document.

```javascript editor-docx
// How do I select the inline reference mark of a footnote in a document?

// Target a footnote's reference mark to resize it independently from the surrounding body text.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

footnote.SelectNoteReference();

doc.GetRangeBySelect().SetFontSize(48);
```
