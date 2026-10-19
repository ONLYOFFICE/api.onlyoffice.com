# SetRole

Sets the role to the current form.

Inherited from [ApiFormBase.SetRole](../../ApiFormBase/Methods/SetRole.md).

## Syntax

```javascript
expression.SetRole(role);
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | Required | string |  | The role which will be attached to the current form. |

## Returns

boolean

## Example

Assign a named role to checkbox forms in a document.

```javascript editor-docx
// How do I restrict a form field to a specific group of users in a document?

// Control who is responsible for filling each checkbox by attaching a role to it in a document.

let doc = Api.GetDocument();
let roles = doc.GetFormRoles();
roles.Add("Visitor");
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
checkBoxForm.SetRole("Visitor");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
checkBoxForm.SetRole("Visitor");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let role = checkBoxForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
