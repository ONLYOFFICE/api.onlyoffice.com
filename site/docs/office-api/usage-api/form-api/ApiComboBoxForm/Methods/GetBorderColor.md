# GetBorderColor

Returns the border color of the current form.

Inherited from [ApiFormBase.GetBorderColor](../../ApiFormBase/Methods/GetBorderColor.md).

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## Example

Read the border color set on a combo box form in a document.

```javascript editor-forms
// How do I find out what border color a combo box form has in a document?

// Confirm that a custom border color was applied correctly by reading it back from the form.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = comboBoxForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
