# SetText

Sets the text to the current text field.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text that will be set to the current text field. |

## Returns

boolean

## Example

Place text inside a text form field in a document.

```javascript editor-docx
// How do I pre-fill a text form with specific content in a document?

// Populate a text form with a default value so the field is not empty in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("John Smith");
```
