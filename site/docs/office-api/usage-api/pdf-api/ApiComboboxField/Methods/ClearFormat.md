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

Get text field and set number format for it and then clear format.

```javascript editor-pdf
// How do I clear format in a PDF document?

// Clear format using a combobox field object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000');
comboboxField.ClearFormat();
```
