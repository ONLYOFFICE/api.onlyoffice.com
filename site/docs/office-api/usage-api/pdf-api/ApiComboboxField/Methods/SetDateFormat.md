# SetDateFormat

Sets date format for field.

## Syntax

```javascript
expression.SetDateFormat(format);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | Required | string |  | date format (e.g. "dd.mm.yyyy") |

## Returns

boolean

## Example

Format dates in a combobox field in a PDF.

```javascript editor-pdf
// Can I control how dates appear in a PDF?

// Display dates with a specific format in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetDateFormat("dd.mm.yyyy");
comboboxField.SetValue("10 january 2015");
```
