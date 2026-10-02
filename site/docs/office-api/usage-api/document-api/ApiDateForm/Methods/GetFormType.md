# GetFormType

Returns a type of the current form.

Inherited from [ApiFormBase.GetFormType](../../ApiFormBase/Methods/GetFormType.md).

## Syntax

```javascript
expression.GetFormType();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FormType](../../Enumeration/FormType.md)

## Example

Retrieve the type of a date form field in a document.

```javascript editor-docx
// How do I get the form type of a date form in a document?

// Distinguish a date form from other field types by reading its form type in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let formType = dateForm.GetFormType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form type: " + formType);
doc.Push(paragraph);
```
