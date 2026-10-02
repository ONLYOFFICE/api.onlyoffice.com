# SetRequired

Specifies if the current form should be required.

Inherited from [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md).

## Syntax

```javascript
expression.SetRequired(bRequired);
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | boolean |  | Defines if the current form is required (true) or not (false). |

## Returns

boolean

## Example

Mark a checkbox form as mandatory in a document.

```javascript editor-forms
// How do I make a form field required so it cannot be skipped in a document?

// Enforce that respondents must interact with a checkbox before submitting a form in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.SetRequired(true);
let isRequired = checkBoxForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document is required: " + isRequired);
doc.Push(paragraph);
```
