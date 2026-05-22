# GetFootnotesFirstParagraphs

Returns the first paragraphs from all footnotes in the current document.

## Syntax

```javascript
expression.GetFootnotesFirstParagraphs();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Add a footnote and write bold text into its first paragraph in a document.

```javascript editor-docx
// How do I access the first paragraph of each footnote to add formatted text in a document?

// Populate footnote content by writing directly to each footnote's opening paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);
```
