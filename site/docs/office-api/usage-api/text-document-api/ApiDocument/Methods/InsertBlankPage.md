# InsertBlankPage

Inserts a blank page to the current location.

## Syntax

```javascript
expression.InsertBlankPage();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Insert a blank page at the current cursor position in a document.

```javascript editor-docx
// How can I insert the blank page using a document in a document?

// Insert the blank page for a document in a document.

const doc = Api.GetDocument();
doc.InsertBlankPage();

const paragraph = Api.CreateParagraph();
paragraph.AddText('This text is on the page after the blank one.');
doc.Push(paragraph);
```
