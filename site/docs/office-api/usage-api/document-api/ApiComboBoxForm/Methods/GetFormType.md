# GetFormType

Returns a type of the current form.

Inherited from [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md).

## Syntax

```javascript
expression.GetFormType();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FormType](../../Enumeration/FormType.md)

## Example

Read the type of a combo box form in a document.

```javascript editor-docx
// How do I find out what type a combo box form is in a document?

// Distinguish a combo box from other form types by checking the type string it returns.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let formType = comboBoxForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
