# ToInline

Converts the current form to an inline form.

:::note
A picture form can't be converted to an inline form, as it's always a fixed-size object.
:::

Inherited from [ApiFormBase.ToInline](../../ApiFormBase/Methods/ToInline.md).

## Syntax

```javascript
expression.ToInline();
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Convert a fixed-size checkbox form back to an inline form in a document.

```javascript editor-forms
// How do I remove fixed dimensions from a form field so it flows with the text in a document?

// Restore natural text flow by switching a checkbox form from fixed to inline mode in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
let copyForm = checkBoxForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
paragraph.AddText(" Single");
doc.Push(paragraph);
copyForm.ToInline();
let isFixed = checkBoxForm.IsFixed();
let isFixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + isFixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + isFixedCopy);
doc.Push(paragraph);
```
