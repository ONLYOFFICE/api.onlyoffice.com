# SetChecked

Checks the current checkbox.

## Syntax

```javascript
expression.SetChecked(isChecked);
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isChecked | Required | boolean |  | Specifies if the current checkbox will be checked (true) or not (false). |

## Returns

boolean

## Example

Mark a checkbox form as checked in a document.

```javascript editor-docx
// How do I programmatically check a checkbox form in a document?

// Pre-select a specific radio button option without requiring manual user interaction in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetChecked(true);
```
