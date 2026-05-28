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

Retrieve the class type of a complex form in a document.

```javascript editor-forms
// How do I get the class type of a complex form in a document?

// Identify what kind of object a complex form is by reading its type label at runtime.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let classType = complexForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
