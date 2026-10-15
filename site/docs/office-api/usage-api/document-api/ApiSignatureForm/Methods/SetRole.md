# SetRole

Sets the role to the current form.

Inherited from [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md).

## Syntax

```javascript
expression.SetRole(role);
```

`expression` - A variable that represents an [ApiSignatureForm](../ApiSignatureForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | Required | string |  | The role which will be attached to the current form. |

## Returns

boolean

## Example

Assign a role to a signature field in a document.

```javascript editor-docx
// How do I specify who is responsible for signing a particular signature field in a document?

// Label a signature field with a named role to indicate the intended signer in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Signatory");
let signatureForm = Api.CreateSignatureForm({"key": "Signature", "tip": "Please sign here", "placeholder": "Signature"});
signatureForm.SetRole("Signatory");
let paragraph = doc.GetElement(0);
paragraph.AddElement(signatureForm);
let role = signatureForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
