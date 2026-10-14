# GetClassType

Returns a type of the ApiSignatureField class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiSignatureField](../ApiSignatureField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"signatureField"

## Example

Determine the object type of a signature field in a PDF.

```javascript editor-pdf
// How do I find out what class a signature field belongs to in a PDF?

// Identify the type category of a signature field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let signatureField = Api.CreateSignatureField([10, 10, 100, 100]);
page.AddObject(signatureField);
signatureField.SetValue('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png');

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);

paragraph.SetJc("left");
paragraph.AddText('Signature field class type is: ' + '"' + signatureField.GetClassType() + '"');
page.AddObject(shape);
```
