# GetCurrentVisiblePages

Returns the indexes of the currently visible pages.

## Syntax

```javascript
expression.GetCurrentVisiblePages();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number[]

## Example

Retrieve the indexes of all currently visible pages in a document.

```javascript editor-docx
// How do I get a list of page numbers visible to the user in a document?

// Useful when synchronizing a thumbnail panel or sidebar with the pages the reader can see in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current visibles pages indexes is: " + doc.GetCurrentVisiblePages());
doc.Push(paragraph);
```
