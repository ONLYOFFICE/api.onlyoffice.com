# GetEndNotesFirstParagraphs

Returns the first paragraphs from all endnotes in the current document.

## Syntax

```javascript
expression.GetEndNotesFirstParagraphs();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Add an endnote and write bold text into its first paragraph in a document.

```javascript editor-docx
// How do I access the first paragraph of each endnote to add formatted text in a document?

// Populate endnote content by writing directly to each endnote's opening paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);
```
