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

Check if a combobox field allows user editing in a PDF.

```javascript editor-pdf
// How do I enable or check if a combobox field is editable in a PDF?

// Set a field to editable and display its editable state in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());
```
