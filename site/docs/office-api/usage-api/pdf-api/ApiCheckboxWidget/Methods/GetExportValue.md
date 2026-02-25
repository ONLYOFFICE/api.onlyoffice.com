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

This example gets checkbox widget export (checked) value.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());
```
