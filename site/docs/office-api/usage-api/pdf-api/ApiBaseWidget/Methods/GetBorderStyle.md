# GetBorderStyle

Gets widget border style.

## Syntax

```javascript
expression.GetBorderStyle();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[WidgetBorderStyle](../../Enumeration/WidgetBorderStyle.md)

## Example

Get field widgets border style and display it in a PDF document.

```javascript editor-pdf
// How can I get the border style using a widget in a PDF document?

// Get the border style for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
    widget.SetBorderStyle('inset');
});

textField.SetValue('Widgets border style is: ' + widgets[0].GetBorderStyle());
```
