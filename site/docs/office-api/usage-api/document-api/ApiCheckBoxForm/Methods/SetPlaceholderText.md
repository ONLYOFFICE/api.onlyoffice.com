# SetPlaceholderText

Sets the placeholder text to the current form.

:::note
The placeholder text can't be set for checkbox or radio button forms.
:::

Inherited from [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md).

## Syntax

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text that will be set to the current form. |

## Returns

boolean

## Example

Set placeholder text on a checkbox form in a document.

```javascript editor-docx
// How do I add hint text that appears inside a form field in a document?

// Give each form field a descriptive placeholder so users understand what to fill in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 1");
checkBoxForm.SetPlaceholderText("Form 1");
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": false});
checkBoxForm.SetFormKey("Marital status 2");
checkBoxForm.SetPlaceholderText("Form 2");
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let formKey = checkBoxForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + formKey);
doc.Push(paragraph);
```
