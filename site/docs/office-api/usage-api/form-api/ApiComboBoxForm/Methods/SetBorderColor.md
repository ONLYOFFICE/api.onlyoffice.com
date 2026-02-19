# SetBorderColor

Sets the border color to the current form.

## Syntax

```javascript
expression.SetBorderColor(color);
```

`expression` - A variable that represents a [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../../text-document-api/ApiColor/ApiColor.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets the border color to the form.

```javascript editor-pdf
// Applies an orange border (RGB: 255, 111, 61) to highlight the date form form visually.

// Define the border color of the date form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(255, 111, 61);
```
