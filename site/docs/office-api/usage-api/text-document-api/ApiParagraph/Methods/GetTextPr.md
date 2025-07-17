# GetTextPr

Returns the text properties for a paragraph end mark.

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get the paragraph text properties.

```javascript editor-docx
// How to get text properties of the paragraph object.

// Get the paragraph text properties and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(32);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);
textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
paragraph.SetTextPr(textPr);
```
