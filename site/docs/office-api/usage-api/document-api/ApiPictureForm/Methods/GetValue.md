# GetValue

Returns the current image of the picture form as a base64 encoded string.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the image from a picture form as a base64 encoded string.

```javascript editor-docx
// The GetValue method of ApiPictureForm returns the image data currently stored in the form.

// Create a picture form, add it to the document, and read its current value.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Photo", "tip": "Upload your photo", "required": true, "placeholder": "Photo"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
let value = pictureForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Picture form value type: " + typeof value);
doc.Push(paragraph);
```
