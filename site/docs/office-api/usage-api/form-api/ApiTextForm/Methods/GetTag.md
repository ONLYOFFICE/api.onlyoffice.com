# GetTag

Returns the tag attribute for the current form.

Inherited from [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md).

## Syntax

```javascript
expression.GetTag();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the tag assigned to a text field in a document.

```javascript editor-forms
// How do I find out what tag is attached to a text field in a document?

// Read a label stored on a text field to identify it in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"tag" : "Info", "key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let tag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
