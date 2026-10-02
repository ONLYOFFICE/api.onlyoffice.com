# SetRequired

Specifies if the current form should be required.

Inherited from [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md).

## Syntax

```javascript
expression.SetRequired(bRequired);
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | boolean |  | Defines if the current form is required (true) or not (false). |

## Returns

boolean

## Example

Mark a combo box form as required in a document.

```javascript editor-forms
// How do I make a combo box form required in a document?

// Enforce that a user must fill in a combo box before submitting a form in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetRequired(true);
let required = comboBoxForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
