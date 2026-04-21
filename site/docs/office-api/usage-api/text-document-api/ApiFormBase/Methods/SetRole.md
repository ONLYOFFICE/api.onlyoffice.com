# SetRole

Sets the role to the current form.

## Syntax

```javascript
expression.SetRole(role);
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| role | Required | string |  | The role which will be attached to the current form. |

## Returns

boolean

## Example

Set a role for a form element in a document.

```javascript editor-docx
// How can I set role using a form base in a document?

// Set role for a form base in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const roles = doc.GetFormRoles();
const rolePr = { "color": "#ffefbf" };
roles.Add("MY_ROLE", rolePr);

const textForm = Api.CreateTextForm({
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
});
paragraph.AddElement(textForm);

textForm.SetRole("MY_ROLE");
const role = textForm.GetRole();

paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
