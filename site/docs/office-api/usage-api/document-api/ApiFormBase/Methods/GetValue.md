# GetValue

Returns the current value of the form field.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| boolean

## Example

Get the current value of a form using the unified value interface.

```javascript editor-docx
// The GetValue method returns the form's current value regardless of its specific type.

// Read the form value after setting it and display the result in a new paragraph.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your name", "required": true, "placeholder": "Your name"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetValue("Jane Doe");
let value = textForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form value: " + value);
doc.Push(paragraph);
```
