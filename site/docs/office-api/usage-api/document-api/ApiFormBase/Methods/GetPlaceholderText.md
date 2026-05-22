# GetPlaceholderText

Returns the placeholder text from the current form.

## Syntax

```javascript
expression.GetPlaceholderText();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the placeholder text of a form field in a document.

```javascript editor-docx
// How do I get the placeholder text of a form field in a document?

// Confirm a hint label by retrieving the placeholder text after setting it on a form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
let placeholderText = textForm.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
