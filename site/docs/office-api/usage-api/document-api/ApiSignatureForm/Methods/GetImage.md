# GetImage

Returns an image in the base64 format from the current signature form.

## Syntax

```javascript
expression.GetImage();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Base64Img](../../Enumeration/Base64Img.md)

## Example

Extract the image stored inside a signature form in a document.

```javascript editor-docx
// How do I retrieve the picture placed in a signature form in a document?

// Pull the embedded image out of a signature form to reuse it in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
let base64img = signatureForm.GetImage();
let drawing = Api.CreateImage(base64img, 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
```
