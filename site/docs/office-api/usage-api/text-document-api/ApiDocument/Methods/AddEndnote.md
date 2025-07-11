# AddEndnote

Adds an endnote for the selected text (or the current position if the selection doesn't exist).

## Syntax

```javascript
expression.AddEndnote();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example adds an endnote for the document.

```javascript editor-docx
// How to add endnote to the document.

// Get all endnotes first paragraphs and make the first one bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddEndnote();
let endNotesFirstParagraphs = doc.GetEndNotesFirstParagraphs();
endNotesFirstParagraphs[0].AddText("Endnote 1");
endNotesFirstParagraphs[0].SetBold(true);
```
