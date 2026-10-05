# GetInternalId

Returns an internal id of the current form.

Inherited from [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md).

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Obtain the unique internal identifier of a checkbox form in a document.

```javascript editor-forms
// How do I get the internal identifier of a checkbox form in a document?

// Track a specific checkbox across operations by reading its system-assigned identifier in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
let internalId = checkBoxForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
