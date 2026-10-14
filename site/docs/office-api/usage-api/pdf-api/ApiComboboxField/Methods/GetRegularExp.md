# GetRegularExp

Gets text widget regular validate expression.

## Syntax

```javascript
expression.GetRegularExp();
```

`expression` - A variable that represents an [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Retrieve the validation pattern from a combobox field in a PDF.

```javascript editor-pdf
// Useful for accessing the validation pattern from a combobox field in a PDF.

// Display what text pattern is required for a combobox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue('Combobox field reg exp is: "' + comboboxField.GetRegularExp() + '"');
```
