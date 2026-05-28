# GetAllParagraphs

Returns a collection of paragraphs that represents all the paragraphs in the specified range.

## Syntax

```javascript
expression.GetAllParagraphs();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Collect all paragraphs contained within a selected range in a document.

```javascript editor-docx
// How do I get every paragraph that falls inside a text selection in a document?

// Pull together each paragraph from a bounded region to process them as a group in a document.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);
firstParagraph.AddText("First paragraph");
let secondParagraph = Api.CreateParagraph();
secondParagraph.AddText("Second Paragraph");
doc.Push(secondParagraph);
let range = doc.GetRange(0, 28);
let paragraphs = range.GetAllParagraphs();
paragraphs[0].SetBold("true");
```
