# GetClassType

Returns a type of the ApiComboboxField class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"comboboxField"

## Example

Identify the class type of a combobox field in a PDF.

```javascript editor-pdf
// What is the class type of a combobox field object in a PDF?

// Retrieve the class type and show it as the field value in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetValue('Field type is: ' + comboboxField.GetClassType());
```
