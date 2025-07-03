# GetDate

Returns the date of the current form.

## Syntax

```javascript
expression.GetDate();
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Date

## Example

This example shows how to get the date to a date form.

```javascript editor-docx
let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetDate(new Date());
let formDate = dateForm.GetDate();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted time: " + formDate.toString());
doc.Push(paragraph);
```
