# SetValue

Sets the state of the checkbox form.

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | boolean |  | Specifies if the checkbox will be checked (true) or not (false). |

## Returns

boolean

## Example

Set the checked state of a checkbox form in a document.

```javascript editor-docx
// The SetValue method accepts a boolean: true to check the box, false to uncheck it.

// Create a checkbox form and mark it as checked using SetValue.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Agreement", "tip": "I agree to the terms", "required": true, "placeholder": "Agreement"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" I agree to the terms");
checkBoxForm.SetValue(true);
```
