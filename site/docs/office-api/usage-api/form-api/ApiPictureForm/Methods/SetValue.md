# SetValue

Sets an image to the picture form.

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string |  | The image source (URL or base64 encoded image). |

## Returns

boolean

## Example

Set the image of a picture form using a URL or base64 encoded string.

```javascript editor-forms
// The SetValue method of ApiPictureForm is a shorthand for SetImage that fits the unified value interface.

// Create a picture form and assign an image from a URL using SetValue.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Photo", "tip": "Upload your photo", "required": true, "placeholder": "Photo"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
```
