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

This example shows how to get current visible pages indexes.

```javascript editor-docx playground
// How to get all indexes of non-hidden pages.

// How to display numbers of all visible pages.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The current visibles pages indexes is: " + doc.GetCurrentVisiblePages());
doc.Push(paragraph);

```
