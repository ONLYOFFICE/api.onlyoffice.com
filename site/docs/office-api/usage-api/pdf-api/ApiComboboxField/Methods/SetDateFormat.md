# SetDateFormat

Sets date format for field.

## Syntax

```javascript
expression.SetDateFormat(sFormat);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | string |  | date format (e.g. "dd.mm.yyyy") |

## Returns

boolean

## Example

Get text field and set date format for it.

```javascript editor-pdf
// How can I set date format using a combobox field in a PDF document?

// Set date format for a combobox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetDateFormat("dd.mm.yyyy");
comboboxField.SetValue("10 january 2015");
```
