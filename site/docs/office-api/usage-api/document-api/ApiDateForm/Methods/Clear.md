# Clear

Clears the current form.

Inherited from [ApiFormBase.Clear](../../ApiFormBase/Methods/Clear.md).

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Clear the selected date from a date form field in a document.

```javascript editor-docx
// How do I reset a date form to its empty state in a document?

// Remove a previously set date value so the form field appears blank again in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
dateForm.SetTime(new Date().getTime());
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.Clear();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document was cleared.");
doc.Push(paragraph);
```
