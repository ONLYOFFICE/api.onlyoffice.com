# ToFixed

Converts the current form to a fixed size form.

Inherited from [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md).

## Syntax

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape width measured in twentieths of a point (1/1440 of an inch). |
| height | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape height measured in twentieths of a point (1/1440 of an inch). |
| keepPosition | Required | boolean |  | Save position on the page (it can be a little bit slow, because it runs the document calculation). |

## Returns

boolean

## Example

Attempt to set a fixed size on a signature field in a document.

```javascript editor-forms
// How do I confirm that a signature field always keeps a fixed size in a document?

// Verify that a signature field retains its fixed dimensions regardless of resize attempts in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.ToFixed(10 * 240, 2 * 240);
let fixed = signatureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
doc.Push(paragraph);
```
