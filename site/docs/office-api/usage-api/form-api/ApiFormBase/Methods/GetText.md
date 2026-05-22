# GetText

Returns the text from the current form.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the entered text from a form field in a document.

```javascript editor-forms
// How do I read the current value typed into a form in a document?

// Extract the raw content of a filled-in text field to use or display elsewhere in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let text = textForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
