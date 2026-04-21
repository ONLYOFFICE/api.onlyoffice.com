# IsDatePicker

Checks whether the content control is a datepicker.

## Syntax

```javascript
expression.IsDatePicker();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check if a content control is a datepicker in a document.

```javascript editor-docx
// How do I is date picker in a document?

// Is date picker using an inline content control object in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsDatePicker() ? "true" : "false");
doc.AddElement(1, paragraph1);
```
