# GetFormType

Returns a type of the current form.

Inherited from [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md).

## Syntax

```javascript
expression.GetFormType();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FormType](../../Enumeration/FormType.md)

## Example

Retrieve the type of a complex form in a document.

```javascript editor-docx
// How do I find out what type a form is in a document?

// Identify whether a form belongs to a specific category before processing it in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let formType = complexForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
