# GetParagraphMarkTextPr

Returns the text properties of the paragraph mark which is used to mark the paragraph end. The mark can also acquire
common text properties like bold, italic, underline, etc.

## Syntax

```javascript
expression.GetParagraphMarkTextPr();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Access the text formatting applied to the paragraph end mark in a document.

```javascript editor-docx
// How do I retrieve the text properties of the paragraph mark in a document?

// Change the font size, color, and spacing of the invisible paragraph mark symbol in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the font size, font color and spacing for the paragraph mark. ");
paragraph.AddText("You can see it if you download the document, open it and enable the invisible symbols display.");
let paragraphMarkTextPr = paragraph.GetParagraphMarkTextPr();
paragraphMarkTextPr.SetFontSize(52);
paragraphMarkTextPr.SetColor(Api.HexColor('#FFFF00'));
paragraphMarkTextPr.SetSpacing(5);
```
