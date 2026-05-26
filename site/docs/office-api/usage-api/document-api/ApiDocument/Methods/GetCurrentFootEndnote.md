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

Retrieve the active footnote at the current cursor position in a document.

```javascript editor-docx
// How do I get the footnote the cursor is currently inside in a document?

// Read the text of the active footnote to display or process it elsewhere in a document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

let curFootnote = doc.GetCurrentFootEndnote();
paragraph = doc.GetElement(0);
let footnoteText = curFootnote.GetText();
paragraph.AddText(footnoteText);
```
