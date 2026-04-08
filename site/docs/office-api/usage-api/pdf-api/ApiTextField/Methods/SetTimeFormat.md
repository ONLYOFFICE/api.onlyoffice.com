# SetTimeFormat

Sets time format for field.

## Syntax

```javascript
expression.SetTimeFormat(sFormat);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

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
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTimeFormat("12HR:MM:SS");
textField.SetValue("8:45:30");

```
