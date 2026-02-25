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

This example creates a new paragraph and inserts it into the document.

```javascript editor-docx playground
// Creates the ApiParagraph object, adds a text to it, and inserts it into the ApiDocument class.

// How to create a paragraph with the specified text and add it to the current document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
```
