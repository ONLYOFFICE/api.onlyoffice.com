# Last

Returns the last document element.

## Syntax

```javascript
expression.Last();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

Get the last document element in a document.

```javascript editor-docx
// How to bold the final element of the document.

// Find the last paragraph and update its text properties in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text №2.");
doc.Push(paragraph);
let element = doc.Last();
element.SetBold(true);
```
