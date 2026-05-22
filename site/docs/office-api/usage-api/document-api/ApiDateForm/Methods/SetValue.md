# SetValue

Sets the date of the current form.

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | Date \| string |  | The date object or the date in the string format. |

## Returns

boolean

## Example

Set the date value of a date form using a Date object.

```javascript editor-docx
// The SetValue method accepts either a Date instance or a date string and applies it to the form.

// Create a date form and assign a specific date using SetValue.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "EventDate", "tip": "Enter the event date", "required": true, "placeholder": "Event date", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetValue(new Date(2024, 0, 15));
```
