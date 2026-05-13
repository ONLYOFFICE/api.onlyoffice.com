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

Get the first paragraphs from all footnotes in the document.

```javascript editor-docx
// How to get the first footnote paragraph, add text to it and make it bold in a document.

// Retrieve all footnote first paragraph for further manipulation in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);
```
