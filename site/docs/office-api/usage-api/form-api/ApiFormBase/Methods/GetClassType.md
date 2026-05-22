# GetClassType

Returns a type of the ApiFormBase class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"form"

## Example

Identify the class type of a form object in a document.

```javascript editor-forms
// How do I get the class type of a form object in a document?

// Confirm what kind of object a form belongs to by printing its class type label.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let classType = textForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
