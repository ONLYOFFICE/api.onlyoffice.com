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

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current form. |

## Returns

boolean

## Example

Apply text formatting to a combo box form in a document.

```javascript editor-docx
// How do I apply text formatting to a combo box form in a document?

// Make the combo box text bold and larger to highlight it visually in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
comboBoxForm.SetTextPr(textPr);
```
