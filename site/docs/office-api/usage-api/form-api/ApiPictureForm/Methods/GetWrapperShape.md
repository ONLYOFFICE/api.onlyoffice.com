# GetWrapperShape

Returns a shape in which the form is placed to control the position and size of the fixed size form frame.

The null value will be returned for the inline forms.

Inherited from [ApiFormBase.GetWrapperShape](../../ApiFormBase/Methods/GetWrapperShape.md).

## Syntax

```javascript
expression.GetWrapperShape();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiShape](../../../document-api/ApiShape/ApiShape.md)

## Example

Retrieve the shape that wraps a picture form to control its position and size in a document.

```javascript editor-forms
// How do I access the container shape of a picture form in a document?

// Get the outer shape holding a picture form to adjust its layout in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
pictureForm.ToFixed(10 * 240, 10 * 240);
let shape = pictureForm.GetWrapperShape();
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
shape.SetOutLine(stroke);
```
