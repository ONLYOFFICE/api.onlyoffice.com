# GetEndPos

Returns the end position of the current range.

## Syntax

```javascript
expression.GetEndPos();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Determine where a selected region of text finishes within the content in a document.

```javascript editor-docx
// How do I find the last character position of a text selection in a document?

// Pinpoint the final boundary of a highlighted span to measure its extent in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with end position: " + range.GetEndPos());
doc.Push(paragraph);
```
