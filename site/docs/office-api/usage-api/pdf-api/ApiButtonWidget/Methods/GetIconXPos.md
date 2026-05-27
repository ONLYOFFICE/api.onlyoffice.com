# GetIconXPos

Gets button widget icon x position.

## Syntax

```javascript
expression.GetIconXPos();
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[percentage](../../Enumeration/percentage.md)

## Example

Find the horizontal position of an icon in a button widget in a PDF.

```javascript editor-pdf
// How do I get the X coordinate of an icon in a PDF button?

// Retrieve the icon's left position in a button widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetLabel('Icon X position is: ' + widgets[0].GetIconXPos());
```
