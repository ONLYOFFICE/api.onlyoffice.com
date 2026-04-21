# GetCheckStyle

Gets widget checkbox style.

## Syntax

```javascript
expression.GetCheckStyle();
```

`expression` - A variable that represents a [ApiCheckboxWidget](../ApiCheckboxWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[CheckStyle](../../Enumeration/CheckStyle.md)

## Example

Get checkbox widget check style in a PDF document.

```javascript editor-pdf
// How can I get the check style using a checkbox widget in a PDF document?

// Get the check style for a checkbox widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Check style is: ' + widgets[0].GetCheckStyle());
```
