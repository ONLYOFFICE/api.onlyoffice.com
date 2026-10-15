# GetPosInParent

Returns the position (index) of the current hyperlink within its parent element.

## Syntax

```javascript
expression.GetPosInParent();
```

`expression` - A variable that represents an [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Determine the index of a hyperlink within its parent element.

```javascript editor-docx
// The position is the hyperlink's index within its parent paragraph.

// Read a hyperlink's position within its paragraph and report it back.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Visit our website");
let hyperlink = paragraph.AddHyperlink("https://www.example.com", "Example");
let position = hyperlink.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The hyperlink is at position " + position + " in its parent.");
doc.Push(report);
```
