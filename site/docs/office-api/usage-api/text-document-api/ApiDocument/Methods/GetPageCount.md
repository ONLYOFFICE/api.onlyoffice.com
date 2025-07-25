# GetPageCount

Returns a number of pages in the current document.\
💡 This method can be slow for large documents because it runs the document calculation\
process before the full recalculation.

## Syntax

```javascript
expression.GetPageCount();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a number of pages in the current document.

```javascript editor-docx
// How to count the number of pages in the document.

// Display the number of pages of the document.

let doc = Api.GetDocument();
let pageCount = doc.GetPageCount();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);
```
