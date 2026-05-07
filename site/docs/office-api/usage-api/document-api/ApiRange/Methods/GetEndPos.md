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

Get the end position of a given range object in a document.

```javascript editor-docx
// How to get the last index of the range position in a document.

// Get a range of the paragraph and display its the end position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with end position: " + range.GetEndPos());
doc.Push(paragraph);
```
