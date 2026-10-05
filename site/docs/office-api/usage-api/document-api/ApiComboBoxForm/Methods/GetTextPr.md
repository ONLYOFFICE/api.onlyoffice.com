# GetTextPr

Returns the text properties from the current form.

:::note
Used if possible for this type of form.
:::

Inherited from [ApiFormBase.GetTextPr](../../ApiFormBase/Methods/GetTextPr.md).

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Retrieve the text formatting properties of a combo box form in a document.

```javascript editor-docx
// How do I access the text formatting settings of a combo box form in a document?

// Modify the combo box text style by first reading its existing properties and then updating them.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
comboBoxForm.SetTextPr(textPr);
let formTextPr = comboBoxForm.GetTextPr();
formTextPr.SetItalic(true);
comboBoxForm.SetTextPr(formTextPr);
```
