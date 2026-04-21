# SetSpecialFormat

Sets special format for field.

## Syntax

```javascript
expression.SetSpecialFormat(sFormat);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [PsfFormat](../../Enumeration/PsfFormat.md) |  | the formatting style to apply to the value |

## Returns

boolean

## Example

Get text field and set special format for it.

```javascript editor-pdf
// How to set special format for a combobox field?

// Set special format and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetSpecialFormat("phone");
comboboxField.SetValue("1234567890");
```
