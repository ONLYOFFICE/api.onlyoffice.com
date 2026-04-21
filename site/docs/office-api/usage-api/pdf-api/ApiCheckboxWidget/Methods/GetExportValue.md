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

Get checkbox widget export (checked) value in a PDF document.

```javascript editor-pdf
// How can I get the export value using a checkbox widget in a PDF document?

// Get the export value for a checkbox widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());
```
