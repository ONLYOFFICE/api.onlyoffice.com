# SetPlaceholderText

Sets the placeholder text to the current form.

:::note
The placeholder text can't be set for checkbox or radio button forms.
:::

Inherited from [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md).

## Syntax

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current form. |

## Returns

boolean

## Example

Set the placeholder text for a signature field in a document.

```javascript editor-forms
// How do I add placeholder text to a signature field in a document?

// Customize what a blank signature field displays before it is filled in a document.

let doc = Api.GetDocument();
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
signatureForm.SetPlaceholderText("Please sign here");
```
