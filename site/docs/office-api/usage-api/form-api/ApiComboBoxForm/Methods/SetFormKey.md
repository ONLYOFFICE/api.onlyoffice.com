# SetFormKey

Sets a key to the current form.

Inherited from [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md).

## Syntax

```javascript
expression.SetFormKey(sKey);
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | Required | string |  | Form key. |

## Returns

boolean

## Example

Assign a unique identifier key to a combo box form field in a document.

```javascript editor-forms
// How do I label a combo box form with a key so it can be referenced later in a document?

// Tag a form field with a custom key and then read it back to confirm the assignment in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetFormKey("Personal information");
let key = comboBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
