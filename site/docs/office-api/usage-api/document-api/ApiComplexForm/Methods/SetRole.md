# SetRole

Sets the role to the current form.

Inherited from [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md).

## Syntax

```javascript
expression.SetRole(role);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | Required | string |  | The role which will be attached to the current form. |

## Returns

boolean

## Example

Assign a role to a complex form in a document.

```javascript editor-docx
// How do I set the role of a form in a document?

// Restrict form filling to a specific group of participants by assigning a named role.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Customer");
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.Add("Name");
paragraph.AddElement(complexForm);
complexForm.SetRole("Customer");
let role = complexForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
