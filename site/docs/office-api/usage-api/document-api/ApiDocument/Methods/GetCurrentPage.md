# GetCurrentPage

Returns the index of the current page.

## Syntax

```javascript
expression.GetCurrentPage();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Retrieve the index of the current page in a document.

```javascript editor-docx
// How do I find which page the cursor is on in a document?

// Useful when building navigation tools that need to report the user's current position in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current page index is: " + doc.GetCurrentPage());
doc.Push(paragraph);
```
