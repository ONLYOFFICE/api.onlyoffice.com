# CreateSignatureField

Creates a signature field.

## Syntax

```javascript
expression.CreateSignatureField(rect);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiSignatureField](../../ApiSignatureField/ApiSignatureField.md)

## Example

Create and add a field with signature to document.

```javascript editor-pdf
// Create the signature field in a PDF document.

// Create the signature field and sets the signature image to it.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let signatureField = Api.CreateSignatureField([10, 10, 100, 100]);
page.AddObject(signatureField);
signatureField.SetValue('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png');
```
