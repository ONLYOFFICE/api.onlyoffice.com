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

This example sets the selection to the specified range.

```javascript editor-docx playground
// How to select a range with a cursor.

// Get range of the paragraph and select it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
range.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("The word 'ONLYOFFICE' was just selected.");
doc.Push(paragraph);
```
