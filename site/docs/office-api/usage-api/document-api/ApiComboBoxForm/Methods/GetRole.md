# GetRole

Returns the role of the current form.

Inherited from [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md).

## Syntax

```javascript
expression.GetRole();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the role assigned to a combo box form in a document.

```javascript editor-docx
// How do I check the role of a combo box form in a document?

// Determine the purpose of a combo box within a form by inspecting its assigned role.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let role = comboBoxForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form role: " + role);
doc.Push(paragraph);
```
