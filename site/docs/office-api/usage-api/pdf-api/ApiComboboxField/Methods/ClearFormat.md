# ClearFormat

Clears format of field.

## Syntax

```javascript
expression.ClearFormat();
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove number formatting from a combobox field in a PDF.

```javascript editor-pdf
// How do I clear the formatting applied to a combobox field in a PDF?

// Set a number format on a field, then remove the formatting completely.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000');
comboboxField.ClearFormat();
```
