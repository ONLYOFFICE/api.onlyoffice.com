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
// How do I add an empty page at a specific point in a document?

// Create a visual separator between sections by placing a fully empty page before subsequent content.

const doc = Api.GetDocument();
doc.InsertBlankPage();

const paragraph = Api.CreateParagraph();
paragraph.AddText('This text is on the page after the blank one.');
doc.Push(paragraph);
```
