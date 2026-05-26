# GetStartPos

Returns the start position of the current range.

## Syntax

```javascript
expression.GetStartPos();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Determine where a selected region of text begins within the content in a document.

```javascript editor-docx
// How do I find the first character position of a text selection in a document?

// Pinpoint the opening boundary of a highlighted span to measure its starting point in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with start position: " + range.GetStartPos());
doc.Push(paragraph);
```
