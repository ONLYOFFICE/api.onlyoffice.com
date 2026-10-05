# GetFormKey

Returns the current form key.

Inherited from [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md).

## Syntax

```javascript
expression.GetFormKey();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the unique key assigned to a text field in a document.

```javascript editor-forms
// How do I look up the identifier key of a text entry area in a document?

// Verify the label used to reference a text field by name in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let key = textForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
