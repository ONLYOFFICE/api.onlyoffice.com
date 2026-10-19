# IsRequired

Checks if the current form is required.

Inherited from [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md).

## Syntax

```javascript
expression.IsRequired();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a complex form is marked as required in a document.

```javascript editor-forms
// How do I find out if a form must be filled out in a document?

// Confirm a form's required status before submitting or processing the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1", "required": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let required = complexForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
