# GetCurrentFootEndnote

Returns the footnote or endnote content if the cursor is currently inside one, otherwise returns null.

## Syntax

```javascript
expression.GetCurrentFootEndnote();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

Get the current footnote in the document.

```javascript editor-docx
// How to add footnote to the document.

// Get text from the current footnote in a document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

let curFootnote = doc.GetCurrentFootEndnote();
paragraph = doc.GetElement(0);
let footnoteText = curFootnote.GetText();
paragraph.AddText(footnoteText);
```
