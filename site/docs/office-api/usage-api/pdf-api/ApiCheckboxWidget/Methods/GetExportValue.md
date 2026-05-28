# GetExportValue

Gets widget export value.

## Syntax

```javascript
expression.GetExportValue();
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the export value of a checkbox widget in a PDF.

```javascript editor-pdf
// How do I read what value is exported when a checkbox is selected in a PDF?

// Access the assigned export value for a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());
```
