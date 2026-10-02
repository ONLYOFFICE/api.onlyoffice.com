# SetTipText

Sets the tip text to the current form.

Inherited from [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md).

## Syntax

```javascript
expression.SetTipText(sText);
```

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Tip text. |

## Returns

boolean

## Example

Set tooltip text on a combo box form in a document.

```javascript editor-docx
// How do I set tooltip text on a combo box form in a document?

// Provide users with extra guidance by showing a hint when they hover over a combo box in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.SetTipText("Choose your country");
let tipText = comboBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
