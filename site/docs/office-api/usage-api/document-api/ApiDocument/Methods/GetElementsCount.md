# GetElementsCount

Returns a number of elements in the current document.

Inherited from [ApiDocumentContent.GetElementsCount](../../ApiDocumentContent/Methods/GetElementsCount.md).

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count all elements in the document and display the totals before and after adding paragraphs in a document.

```javascript editor-docx
// How do I check how many elements exist at different points while building a document?

// Track the element count dynamically as new paragraphs are pushed into a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of document elements at this point: ");
paragraph.AddTabStop();
paragraph.AddText("" + doc.GetElementsCount());
paragraph = Api.CreateParagraph();
paragraph.AddText("Now we add one more paragraph and push it.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of document elements after we added the second paragraph ");
paragraph.AddText("but before we push the third one: ");
paragraph.AddTabStop();
paragraph.AddText("" + doc.GetElementsCount());
doc.Push(paragraph);
```
