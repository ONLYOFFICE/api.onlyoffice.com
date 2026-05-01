# IsEditable

Checks if field is editable.

## Syntax

```javascript
expression.IsEditable();
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get editable property for combobox field and display it in a PDF document.

```javascript editor-pdf
// How to is editable for a combobox field in a PDF document?

// Is editable and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
