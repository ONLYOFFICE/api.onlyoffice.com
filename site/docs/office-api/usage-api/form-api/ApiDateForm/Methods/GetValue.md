# GetValue

Returns the date of the current form.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Date \| undefined

## Example

Get the date value from a date form as a Date object.

```javascript editor-forms
// The GetValue method returns a Date object, or undefined if the form still shows its placeholder.

// Set a date on the form and then retrieve it to display the date string.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "EventDate", "tip": "Enter the event date", "required": true, "placeholder": "Event date", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetDate(new Date(2024, 0, 15));
let value = dateForm.GetValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Date form value: " + value.toString());
doc.Push(paragraph);
```
