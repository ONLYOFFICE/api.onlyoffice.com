# GetText

Returns the text from the current form.

Inherited from [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md).

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Extract the plain text content of a date form in a document.

```javascript editor-forms
// How do I read the text value stored inside a date form in a document?

// Output the raw string to check what date value the form currently holds.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let text = dateForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
