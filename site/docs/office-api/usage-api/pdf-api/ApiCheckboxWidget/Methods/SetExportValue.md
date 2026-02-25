# SetExportValue

Sets widget export value.

## Syntax

```javascript
expression.SetExportValue(sValue);
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sValue | Required | string |  | No description provided. |

## Returns

boolean

## Example

This example sets checkbox widget export (checked) value.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());
```
