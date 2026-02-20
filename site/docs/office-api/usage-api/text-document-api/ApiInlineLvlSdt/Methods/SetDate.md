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

This example demonstrates how to set a date for a datepicker content control.

```javascript editor-docx playground
let doc = Api.GetDocument();
let contentControl = doc.AddDatePickerContentControl();
contentControl.SetDate(new Date(1998, 4, 10));
```
