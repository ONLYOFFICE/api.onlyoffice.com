# IsFixed

Checks if the current form is fixed size.

Inherited from [ApiFormBase.IsFixed](../../ApiFormBase/Methods/IsFixed.md).

## Syntax

```javascript
expression.IsFixed();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a date form has a fixed size in a document.

```javascript editor-docx
// How do I find out if a date form is set to a fixed size in a document?

// Confirm that locking a date form to specific dimensions marks it as fixed in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.ToFixed(10 * 240, 2 * 240);
let fixed = dateForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is fixed: " + fixed);
doc.Push(paragraph);
```
