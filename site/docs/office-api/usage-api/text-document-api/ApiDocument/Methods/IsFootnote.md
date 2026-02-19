# IsFootnote

Check if the current document content is a footnote.

## Syntax

```javascript
expression.IsFootnote();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example check is the ApiDocumentContent is a footnote.

```javascript editor-docx
// How to add footnote to the document.

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
