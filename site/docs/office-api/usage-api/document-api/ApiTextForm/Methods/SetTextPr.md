# SetTextPr

Sets the text properties to the current form.

:::note
Used if possible for this type of form.
:::

Inherited from [ApiFormBase.SetTextPr](../../ApiFormBase/Methods/SetTextPr.md).

## Syntax

```javascript
expression.SetTextPr(textPr);
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current form. |

## Returns

boolean

## Example

Apply custom text formatting to a text form in a document.

```javascript editor-docx
// How do I change the font style and size of text inside a form field in a document?

// Style the text inside a form field to stand out visually in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
```
