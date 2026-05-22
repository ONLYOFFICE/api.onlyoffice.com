# Select

Sets the selection to the specified range.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Highlight a specific range of text as the active selection in a document.

```javascript editor-docx
// How do I make a portion of text become the current selection in a document?

// Mark a segment of text so it is selected and ready for further actions in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
range.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("The word 'ONLYOFFICE' was just selected.");
doc.Push(paragraph);
```
