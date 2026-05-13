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

Set a date for a datepicker content control in a document.

```javascript editor-docx
// How can I set date using an inline content control in a document?

// Set date for an inline content control in a document.

let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDate(new Date(1998, 4, 10));
```
