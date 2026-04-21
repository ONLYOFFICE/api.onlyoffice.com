# IsFitBounds

Checks if button widget is fit bounds.

## Syntax

```javascript
expression.IsFitBounds();
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get button widget fit bounds property and display it in a PDF document.

```javascript editor-pdf
// How to is fit bounds for a button widget in a PDF document?

// Is fit bounds and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetFitBounds(true);
widgets[0].SetLabel('Fit bounds is: ' + widgets[0].IsFitBounds());
```
