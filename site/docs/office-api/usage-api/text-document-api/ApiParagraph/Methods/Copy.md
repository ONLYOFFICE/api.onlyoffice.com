# Copy

Creates a paragraph copy. Ingnore comments, footnote references, complex fields.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Create a paragraph copy in a document.

```javascript editor-docx
// How to add a duplicate paragraph in a document.

// Copy a paragraph using the paragraph API in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text that was copied.");
let paragraph2 = paragraph1.Copy();
doc.Push(paragraph2);
```
