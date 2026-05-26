# GetLock

Returns the lock state of the current form.

## Syntax

```javascript
expression.GetLock();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check the lock status of a form field in a document.

```javascript editor-docx
// How do I find out whether a form field is locked in a document?

// Protect a form, then confirm the lock is active by reading the lock state.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetLock(true);
let locked = textForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is locked: " + locked);
doc.Push(paragraph);
```
