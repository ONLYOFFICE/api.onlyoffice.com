# SetTimeFormat

Sets time format for field.

## Syntax

```javascript
expression.SetTimeFormat(format);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | Required | [TimeFormat](../../Enumeration/TimeFormat.md) |  | available time format |

## Returns

boolean

## Example

Display time with hour, minute, and second in a PDF.

```javascript editor-pdf
// Can I control the time display format in a PDF?

// Show times using a 12-hour or 24-hour format in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetTimeFormat("h:MM:ss tt");
comboboxField.SetValue("8:45:30");
```
