# Copy

Copies the current form (copies with the shape if it exists).

Inherited from [ApiFormBase.Copy](../../ApiFormBase/Methods/Copy.md).

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiForm](../../Enumeration/ApiForm.md)

## Example

Duplicate an existing date form and insert the copy into a document.

```javascript editor-forms
// How do I create an identical copy of a date form in a document?

// Reuse the same date field settings without reconfiguring them by copying the form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
dateForm.SetTime(new Date().getTime());
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let copyDateForm = dateForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyDateForm);
```
