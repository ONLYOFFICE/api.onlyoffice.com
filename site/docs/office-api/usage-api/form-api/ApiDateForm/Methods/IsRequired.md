# IsRequired

Checks if the current form is required.

Inherited from [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md).

## Syntax

```javascript
expression.IsRequired();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a date form is marked as required in a document.

```javascript editor-forms
// How do I determine if a date form must be filled out in a document?

// Confirm that a required date form reports its mandatory status correctly in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let required = dateForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
