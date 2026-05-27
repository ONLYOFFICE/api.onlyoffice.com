# CreateParagraph

Creates a new paragraph.

## Syntax

```javascript
expression.CreateParagraph();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Add a new paragraph with text to the end of a document.

```javascript editor-docx
// How do I create a blank paragraph, fill it with text, and append it to a document?

// Build a paragraph from scratch and place it at the bottom of a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
