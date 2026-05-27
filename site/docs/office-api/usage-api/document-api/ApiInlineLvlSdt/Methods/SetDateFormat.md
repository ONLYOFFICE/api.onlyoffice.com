# SetDateFormat

Sets the date format for the datepicker content control.
This method allows setting the format in which the date should be displayed in the datepicker content control.
The format string should be specified using common date format patterns (e.g., "mm.dd.yyyy").

## Syntax

```javascript
expression.SetDateFormat(dateFormat);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dateFormat | Required | string |  | The desired date format (e.g., "mm.dd.yyyy"). |

## Returns

boolean

## Example

Apply a custom date format to a date picker content control in a document.

```javascript editor-docx
// How do I control how a date is displayed in a date picker content control in a document?

// Enforce a consistent date style across forms by setting a format pattern in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.SetDateFormat('dd.mm.yyyy');
contentControl.SetDate(new Date(1998, 2, 1));
```
