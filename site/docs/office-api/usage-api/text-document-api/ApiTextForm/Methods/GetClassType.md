# GetClassType

Returns a type of the ApiTextForm class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textForm"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-docx
// How to get a class type of ApiTextForm.

// Retrieve class type of ApiTextForm object and insert it to the document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let classType = textForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
