# GetClassType

Returns a type of the ApiComplexForm class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"form"

## Example

Find out the class type of a complex form object.

```javascript editor-forms
// How can I get the class type of a complex form?

// Get the class type of a complex form and display it in the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let classType = complexForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
