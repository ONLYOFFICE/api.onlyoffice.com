# IsEndnote

Check if the current document content is an endnote.

## Syntax

```javascript
expression.IsEndnote();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Detect whether a note is an endnote in a document.

```javascript editor-docx
// How do I tell if a note is an endnote rather than a footnote in a document?

// Distinguish endnotes from footnotes to display the correct label next to each note.

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
