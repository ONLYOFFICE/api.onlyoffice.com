# GetRole

Returns the role of the current form.

Inherited from [ApiFormBase.GetRole](../../ApiFormBase/Methods/GetRole.md).

## Syntax

```javascript
expression.GetRole();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the role assigned to a text field in a document.

```javascript editor-docx
// How do I find out what role is associated with a text entry area in a document?

// Inspect the responsibility label attached to a text field to understand its purpose in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let role = textForm.GetRole();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + role);
doc.Push(paragraph);
```
