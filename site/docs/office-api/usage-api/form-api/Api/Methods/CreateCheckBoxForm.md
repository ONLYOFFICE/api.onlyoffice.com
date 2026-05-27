# CreateCheckBoxForm

Creates a checkbox / radio button with the specified checkbox / radio button properties.

## Syntax

```javascript
expression.CreateCheckBoxForm(formPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | Required | [CheckBoxFormPr](../../Enumeration/CheckBoxFormPr.md) |  | Checkbox / radio button properties. |

## Returns

[ApiCheckBoxForm](../../ApiCheckBoxForm/ApiCheckBoxForm.md)

## Example

Add checkboxes and radio buttons for multiple choice questions in a document.

```javascript editor-forms
// How do I insert checkboxes or radio buttons in a document?

// Create selectable options that let users pick from predefined choices in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Marital status",
	"tip": "Specify your marital status",
	"required": true,
	"placeholder": "Marital status",
	"radio": true
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();

checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Marital status",
	"tip": "Specify your marital status",
	"required": true,
	"placeholder": "Marital status",
	"radio": true
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
paragraph.AddLineBreak();

checkBoxForm = Api.CreateCheckBoxForm({
	"key": "Children",
	"tip": "Indicate if you have children",
	"required": false,
	"placeholder": "Children",
	"radio": false
});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
```
