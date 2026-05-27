# CreateComboBoxForm

Creates a combo box / dropdown list with the specified combo box / dropdown list properties.

## Syntax

```javascript
expression.CreateComboBoxForm(formPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | Required | [ComboBoxFormPr](../../Enumeration/ComboBoxFormPr.md) |  | Combo box / dropdown list properties. |

## Returns

[ApiComboBoxForm](../../ApiComboBoxForm/ApiComboBoxForm.md)

## Example

Create a dropdown list where users select from preset options in a document.

```javascript editor-forms
// How do I add a dropdown field to a document?

// Set up a selection menu with multiple choices that users can pick from in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({
	"key": "Personal information",
	"tip": "Choose your country",
	"required": true,
	"placeholder": "Country",
	"editable": false,
	"autoFit": false,
	"items": ["Latvia", "USA", "UK"]
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
```
