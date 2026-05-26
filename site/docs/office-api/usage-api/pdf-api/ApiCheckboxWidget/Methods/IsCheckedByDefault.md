# IsCheckedByDefault

Checks if widget is checked by default.

## Syntax

```javascript
expression.IsCheckedByDefault();
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Find out if a checkbox is pre-selected by default in a PDF.

```javascript editor-pdf
// How do I check whether a checkbox widget is set to be checked when the form first opens in a PDF?

// Read the default checked state of a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckedByDefault(true);
console.log('Checked by default is: ' + widgets[0].IsCheckedByDefault());
```
