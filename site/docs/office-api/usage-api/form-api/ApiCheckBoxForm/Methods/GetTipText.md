# GetTipText

Returns the tip text of the current form.

Inherited from [ApiFormBase.GetTipText](../../ApiFormBase/Methods/GetTipText.md).

## Syntax

```javascript
expression.GetTipText();
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the tooltip text associated with a checkbox form in a document.

```javascript editor-forms
// How do I retrieve the tooltip hint shown when hovering over a checkbox form in a document?

// Verify the guidance message displayed to users when they point to a checkbox form in a document.

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
