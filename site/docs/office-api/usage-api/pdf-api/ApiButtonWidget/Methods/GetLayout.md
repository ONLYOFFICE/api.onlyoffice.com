# GetLayout

Gets button widget layout type

## Syntax

```javascript
expression.GetLayout();
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ButtonLayout](../../Enumeration/ButtonLayout.md)

## Example

Get button widget layout type in a PDF document.

```javascript editor-pdf
// How to get the layout for a button widget in a PDF document?

// Get the layout and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetLabel('Layout is: ' + widgets[0].GetLayout());
```
