# SetDate

Sets the value for the datepicker content control.

## Syntax

```javascript
expression.SetDate(date);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| date | Required | Date |  | The date value to set for the datepicker. |

## Returns

boolean

## Example

Assign a specific date to a date picker content control in a document.

```javascript editor-docx
// How do I set the selected date on a date picker content control in a document?

// Pre-fill a date picker with a fixed date so users see a ready-made value in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDate(new Date(1998, 4, 10));
```
