# SetBackgroundColor

Sets the background color to the current form.

Inherited from [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md).

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | The background color. |

## Returns

boolean

## Example

Apply a fill color to the background of a signature field in a document.

```javascript editor-docx
// How do I change the background color of a signature field in a document?

// Highlight a signature field by giving it a distinct background color in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
