# GetPlaceholderText

Returns the placeholder text from the current form.

Inherited from [ApiFormBase.GetPlaceholderText](../../ApiFormBase/Methods/GetPlaceholderText.md).

## Syntax

```javascript
expression.GetPlaceholderText();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the hint text shown inside an empty text field in a document.

```javascript editor-docx
// How do I find out what placeholder text appears in a text entry area in a document?

// Check the instructional text displayed before a user fills in a text field in a document.

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
