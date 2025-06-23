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

Date

## Example

This example demonstrates how to retrieve the date from a datepicker content control.

```javascript editor-docx
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDateFormat("yyyy-mm-dd");
contentControl.SetDate(new Date(1961, 9, 3));
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let date = contentControl.GetDate();
paragraph.AddText(date.toDateString());
```
