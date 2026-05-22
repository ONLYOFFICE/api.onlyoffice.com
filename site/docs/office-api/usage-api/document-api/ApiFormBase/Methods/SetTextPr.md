# SetTextPr

Sets the text properties to the current form.
*Used if possible for this type of form*

## Syntax

```javascript
expression.SetTextPr(textPr);
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current form. |

## Returns

boolean

## Example

Apply custom text formatting to a form field in a document.

```javascript editor-docx
// How do I change the font size and style of text inside a form field in a document?

// Make form field text bold and larger to improve readability.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
```
