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

This example shows how to check if the content control is a picture.

```javascript editor-docx playground
let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
let isPicture = inlineControl.IsPicture();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a picture? " + isPicture);
doc.Push(paragraph);
```
