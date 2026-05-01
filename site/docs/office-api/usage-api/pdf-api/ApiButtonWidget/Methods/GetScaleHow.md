# GetScaleHow

Gets button widget scale when type

## Syntax

```javascript
expression.GetScaleHow();
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ButtonScaleHow](../../Enumeration/ButtonScaleHow.md)

## Example

Get button widget scale how type and display it in a PDF document.

```javascript editor-pdf
// How do I get the scale how in a PDF document?

// Get the scale how using a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleHow('proportional');
widgets[0].SetLabel('Scale how is: ' + widgets[0].GetScaleHow());
```
