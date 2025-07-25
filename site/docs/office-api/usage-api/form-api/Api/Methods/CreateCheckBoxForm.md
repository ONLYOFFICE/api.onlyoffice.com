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

This example creates two checkboxes.

```javascript editor-pdf
// How to create a checkbox form and add it to the paragraph.

// Add two checkboxes to the ApiDocument object.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
```
