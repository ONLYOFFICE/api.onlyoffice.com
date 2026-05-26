# IsPicture

Checks whether the content control is a picture control.
This method verifies if the content control is specifically a picture control.

## Syntax

```javascript
expression.IsPicture();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether an inline content control is a picture control in a document.

```javascript editor-docx
// How do I verify that a content control is intended to hold a picture in a document?

// Identify picture controls to apply image-specific handling separately from text controls in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
let isPicture = inlineControl.IsPicture();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a picture? " + isPicture);
doc.Push(paragraph);
```
