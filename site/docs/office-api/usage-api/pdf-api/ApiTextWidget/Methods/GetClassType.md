# GetClassType

Returns a type of the ApiTextWidget class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTextWidget](../ApiTextWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textWidget"

## Example

Check the class type returned by a text widget in a PDF document.

```javascript editor-pdf
// How do I check what type a text widget object is in a PDF document?

// Retrieve and output the class type string for a text widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
comboboxField.SetValue(widgets[0].GetClassType());
```
