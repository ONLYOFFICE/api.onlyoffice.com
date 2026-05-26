# GetPageCount

Returns a number of pages in the current document.
💡 This method can be slow for large documents because it runs the document calculation
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

Count the total number of pages in a document.

```javascript editor-docx
// How do I find out how many pages a document has in a document?

// Insert the page count as readable text so readers see it at a glance in a document.

let doc = Api.GetDocument();
let pageCount = doc.GetPageCount();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of pages: " + pageCount);
```
