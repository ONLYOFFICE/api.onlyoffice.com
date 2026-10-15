# GetParent

Returns the document content that contains the current paragraph.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| null

## Example

Access the document content that contains a paragraph.

```javascript editor-docx
// The parent is the document content that holds the paragraph.

// Navigate from a paragraph up to its parent and count the elements the parent holds.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample paragraph.");
doc.Push(paragraph);
let parent = paragraph.GetParent();
let report = Api.CreateParagraph();
report.AddText("The parent holds " + parent.GetElementsCount() + " elements.");
doc.Push(report);
```
