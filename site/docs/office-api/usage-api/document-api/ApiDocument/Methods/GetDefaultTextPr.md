# GetDefaultTextPr

Returns a set of default properties for the text run in the current document.

## Syntax

```javascript
expression.GetDefaultTextPr();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Read and modify the default text formatting properties for the entire document in a document.

```javascript editor-docx
// How do I set the default font family, size, and language for all text in a document?

// Change font settings at the document level so every text run inherits the new defaults in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Comic Sans MS");
paragraph.AddText("This is just a text.");
```
