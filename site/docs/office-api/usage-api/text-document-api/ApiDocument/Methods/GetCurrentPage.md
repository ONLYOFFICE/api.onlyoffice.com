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

This example shows how to get current page index.

```javascript editor-docx
// How to know the order index of the current page.

// Get current page number.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current page index is: " + doc.GetCurrentPage());
doc.Push(paragraph);

```
