# GetValue

Returns the current text value of the complex form.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the combined text content of a complex form in a document.

```javascript editor-docx
// The GetValue method concatenates the text of all sub-forms and text nodes inside the complex form.

// Build a complex form with a text sub-form and a string suffix, then read the combined value.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Email", "tip": "Email", "placeholder": "Enter your email"});
let textForm = Api.CreateTextForm({"key": "Username"});
complexForm.Add(textForm);
complexForm.Add("@example.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
textForm.SetText("john.doe");
let value = complexForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Complex form value: " + value);
doc.Push(paragraph);
```
