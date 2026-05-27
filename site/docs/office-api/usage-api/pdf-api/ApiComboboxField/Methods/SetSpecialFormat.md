# SetSpecialFormat

Sets special format for field.

## Syntax

```javascript
expression.SetSpecialFormat(format);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | Required | [PsfFormat](../../Enumeration/PsfFormat.md) |  | the formatting style to apply to the value |

## Returns

boolean

## Example

Format field values as phone numbers in a PDF.

```javascript editor-pdf
// Can I make phone numbers display correctly in a PDF?

// Apply phone number formatting to a field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetSpecialFormat("phone");
comboboxField.SetValue("1234567890");
```
