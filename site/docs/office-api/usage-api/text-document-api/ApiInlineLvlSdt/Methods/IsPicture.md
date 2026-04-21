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

Check if the content control is a picture in a document.

```javascript editor-docx
// How to is picture for an inline content control in a document?

// Is picture and display the result in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
let isPicture = inlineControl.IsPicture();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a picture? " + isPicture);
doc.Push(paragraph);
```
