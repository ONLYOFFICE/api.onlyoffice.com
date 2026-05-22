# GetClassType

Returns a type of the ApiDateForm class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"dateForm"

## Example

Identify the class type of a date form field in a document.

```javascript editor-docx
// How do I get the class type of a date form object in a document?

// Confirm the object kind before applying type-specific logic to a date form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let classType = dateForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
