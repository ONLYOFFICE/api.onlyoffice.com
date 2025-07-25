# Copy

Copies the current form (copies with the shape if it exists).

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiForm](../../Enumeration/ApiForm.md)

## Example

This example shows how to make a copy of the form.

```javascript editor-docx
// How to create the same text form.

// Create two same text forms to the document separated by a line break.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let copyTextForm = textForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyTextForm);
```
