# GetScaleWhen

Gets button widget scale when type

## Syntax

```javascript
expression.GetScaleWhen();
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ButtonScaleWhen](../../Enumeration/ButtonScaleWhen.md)

## Example

Get button widget scale when type and display it in a PDF document.

```javascript editor-pdf
// How do I get the scale when in a PDF document?

// Get the scale when using a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleWhen('always');
widgets[0].SetLabel('Scale when is: ' + widgets[0].GetScaleWhen());
```
