# GetClassType

Returns a type of the ApiFormBase class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"form"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-docx
// How to get a class type of ApiFormBase.

// Retrieve class type of ApiFormBase object and insert it to the slide.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let classType = textForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
