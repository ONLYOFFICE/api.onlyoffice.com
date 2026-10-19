# GetTag

Returns the tag attribute for the current form.

Inherited from [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md).

## Syntax

```javascript
expression.GetTag();
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the tag label attached to a date form in a document.

```javascript editor-docx
// How do I retrieve the tag associated with a date form in a document?

// Use the tag value to identify or group related forms by a custom label.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"tag" : "Hello", "key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
let tag = dateForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
