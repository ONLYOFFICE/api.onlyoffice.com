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

Get the current document in a document.

```javascript editor-docx
// Return the current document object and add a paragraph to it.

// Create the paragraph object, add a text to it, and insert this object into the document object.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
