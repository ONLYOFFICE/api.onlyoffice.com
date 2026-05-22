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

Identify what kind of object a text field is in a document.

```javascript editor-docx
// How do I find out what type of element a text entry area represents in a document?

// Confirm the category of a text field to distinguish it from other elements in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let classType = textForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
