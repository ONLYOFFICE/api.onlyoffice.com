# AddFootnote

Adds a footnote for the selected text (or the current position if the selection doesn't exist).

## Syntax

```javascript
expression.AddFootnote();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

Add a footnote to a paragraph in a document.

```javascript editor-docx
// How do I attach a footnote to text in a document?

// Collect all footnote paragraphs and style the first one as bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);
```
