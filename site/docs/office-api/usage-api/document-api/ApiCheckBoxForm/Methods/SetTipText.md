# SetTipText

Sets the tip text to the current form.

Inherited from [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md).

## Syntax

```javascript
expression.SetTipText(sText);
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Tip text. |

## Returns

boolean

## Example

Add tooltip text to a checkbox form in a document.

```javascript editor-docx
// How do I display a helpful hint when a user hovers over a form field in a document?

// Guide respondents by attaching an instructional tooltip to each checkbox in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetTipText("Specify your marital status");
let tipText = checkBoxForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
