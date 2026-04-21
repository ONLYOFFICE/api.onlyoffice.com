# SelectNoteReference

Select the reference to this footnote/endnote. If this document content is not a footnote/endnote, do nothing.

## Syntax

```javascript
expression.SelectNoteReference();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select footnote/endnote reference in the document.

```javascript editor-docx
// How to add footnote to the document.

// How to select footnote reference and increate its font size in a document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

footnote.SelectNoteReference();

doc.GetRangeBySelect().SetFontSize(48);
```
