# ContentControlDatePickerProperties

The content control datepicker properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Date | object | The current date and time. |
| DateFormat | string | A format in which the date will be displayed. |

## Example

```javascript
let date = new window.Date();
let controlDatePickerPr = {
    "DateFormat" : "DD\ MMMM\ YYYY",
    "Date" : date
};
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [controlDatePickerPr, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
