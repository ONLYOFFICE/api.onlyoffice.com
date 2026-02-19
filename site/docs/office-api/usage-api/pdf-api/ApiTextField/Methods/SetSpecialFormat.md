# SetSpecialFormat

Sets special format for field.

## Syntax

```javascript
expression.SetSpecialFormat(sFormat);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [PsfFormat](../../Enumeration/PsfFormat.md) |  | the formatting style to apply to the value |

## Returns

boolean

## Example

This example gets text field and sets special format for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetSpecialFormat("phone");
textField.SetValue("1234567890");

```
