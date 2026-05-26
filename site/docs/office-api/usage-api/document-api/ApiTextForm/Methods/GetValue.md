# GetValue

Returns the current text value of the text form.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the text value from a text form in a document.

```javascript editor-docx
// The GetValue method of ApiTextForm returns the current text content of the field.

// Set a value to the text form and then read it back to display in the document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("John Smith");
let value = textForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Text form value: " + value);
doc.Push(paragraph);
```
