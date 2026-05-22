# SetValue

Sets an image to the signature form.

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents a [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string |  | The image source (URL or base64 encoded image). |

## Returns

boolean

## Example

Set the image of a signature form using a URL or base64 encoded string.

```javascript editor-forms
// The SetValue method of ApiSignatureForm is a shorthand for SetImage that fits the unified value interface.

// Create a signature form and assign a signature image from a URL using SetValue.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "required": true, "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
```
