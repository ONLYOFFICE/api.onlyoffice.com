# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame.

The null value will be returned for the inline forms.

Inherited from [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md).

## Syntax

```javascript
expression.GetWrapperShape();
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../../document-api/ApiShape/ApiShape.md)

## Example

Access the container shape that controls the position and size of a signature field in a document.

```javascript editor-forms
// How do I reposition or resize the frame holding a signature field in a document?

// Anchor a signature field to a specific location on the page by adjusting its surrounding shape in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let shape = signatureForm.GetWrapperShape();
shape.SetWrappingStyle("square");
shape.SetHorAlign("page", "center");
shape.SetVerAlign("margin", "top");
```
