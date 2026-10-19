# GetText

Returns the text from the current form.

Inherited from [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md).

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the entered text from a text field in a document.

```javascript editor-docx
// How do I get the text a user typed into a form field in a document?

// Extract the current value stored inside a text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let text = textForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
