# GetClassType

Returns a type of the ApiCheckBoxForm class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"checkBoxForm"

## Example

Retrieve the class type identifier of a checkbox form field in a document.

```javascript editor-forms
// How do I confirm the object type of a checkbox form at runtime in a document?

// Verify that a form element is a checkbox before applying checkbox-specific operations in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
let classType = checkBoxForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
