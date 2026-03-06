# SetTimeFormat

Sets time format for field.

## Syntax

```javascript
expression.SetTimeFormat(sFormat);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [TimeFormat](../../Enumeration/TimeFormat.md) |  | available time format |

## Returns

boolean

## Example

This example gets text field and sets time format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetTimeFormat("12HR:MM:SS");
comboboxField.SetValue("8:45:30");

```
