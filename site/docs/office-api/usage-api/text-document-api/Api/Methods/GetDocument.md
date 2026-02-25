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

This example shows how to get the current document.

```javascript editor-docx playground
// Returns the current document object and adds a paragraph to it.

// How to add a paragraph to the current document.

// Creates the ApiParagraph object, adds a text to it, and inserts this object into the ApiDocument object.

// How to get the current document to work with it.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
