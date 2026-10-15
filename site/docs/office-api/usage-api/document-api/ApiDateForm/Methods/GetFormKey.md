# GetFormKey

Returns the current form key.

Inherited from [ApiFormBase.GetFormKey](../../ApiFormBase/Methods/GetFormKey.md).

## Syntax

```javascript
expression.GetFormKey();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the key assigned to a date form field in a document.

```javascript editor-docx
// How do I get the key of a date form in a document?

// Look up a form by its identifier by reading the key from a date form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let key = dateForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
