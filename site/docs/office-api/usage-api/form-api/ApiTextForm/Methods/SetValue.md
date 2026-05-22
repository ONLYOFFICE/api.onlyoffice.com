# SetValue

Sets the text value of the text form.

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string |  | The text value to set. |

## Returns

boolean

## Example

Set the text value of a text form in a document.

```javascript editor-forms
// The SetValue method fills the text form with the given string value.

// Create a text form, set its value, and add it to the first paragraph.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("John Smith");
```
