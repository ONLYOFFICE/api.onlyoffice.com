# GetInternalId

Returns an internal id of the current form.

Inherited from [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md).

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the internal identifier of a text field in a document.

```javascript editor-forms
// How do I obtain the unique system identifier for a text entry area in a document?

// Capture the auto-assigned identifier of a text field to track it programmatically in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let internalId = textForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
