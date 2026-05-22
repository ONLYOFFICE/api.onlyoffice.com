# GetEndPage

Returns the end page number of the current range.

## Syntax

```javascript
expression.GetEndPage();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Find the last page where a selected region of text ends in a document.

```javascript editor-docx
// How do I determine which page a text selection finishes on in a document?

// Locate the closing page of a highlighted span to understand its layout position in a document.

const doc = Api.GetDocument();

const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This text is on the first page.');

doc.MoveCursorToEnd();
doc.InsertBlankPage();

const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is on the second page.');
doc.Push(secondParagraph);

const firstRange = firstParagraph.GetRange();
const secondRange = secondParagraph.GetRange();

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('First paragraph range ends on page: ' + firstRange.GetEndPage());
resultParagraph.AddLineBreak();
resultParagraph.AddText('Second paragraph range ends on page: ' + secondRange.GetEndPage());
doc.Push(resultParagraph);
```
