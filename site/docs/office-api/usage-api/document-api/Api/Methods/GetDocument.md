# GetDocument

Returns the main document.

## Syntax

```javascript
expression.GetDocument();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md)

## Example

Add a new paragraph with text to the current document.

```javascript editor-docx
// How do I access the open document and add content to it in a document?

// Insert a paragraph into the active document using a reference to it in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
