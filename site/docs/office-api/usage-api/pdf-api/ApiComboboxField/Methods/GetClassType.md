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

Check the class type returned by a combobox field in a PDF document.

```javascript editor-pdf
// How do I check what type a combobox field object is in a PDF document?

// Retrieve and output the class type string for a combobox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetValue('Field type is: ' + comboboxField.GetClassType());
```
