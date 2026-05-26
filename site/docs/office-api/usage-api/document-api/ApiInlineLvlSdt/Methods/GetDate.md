# GetDate

Retrieves the selected date value from a date picker content control and returns it as a Date object.

Throws: Error if the content control is not a date picker.

## Syntax

```javascript
expression.GetDate();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

undefined \| Date

## Example

Read the selected date from a date picker content control in a document.

```javascript editor-docx
// How do I get the date value stored in a date picker content control in a document?

// Display the formatted date from a date picker to confirm the value set on it in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDateFormat("yyyy-mm-dd");
contentControl.SetDate(new Date(1961, 9, 3));
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let date = contentControl.GetDate();
paragraph.AddText(date.toDateString());
```
