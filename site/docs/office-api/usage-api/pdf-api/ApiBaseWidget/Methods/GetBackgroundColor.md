# GetBackgroundColor

Gets widget background color.

## Syntax

```javascript
expression.GetBackgroundColor();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Get field widget and display it's background color in a PDF document.

```javascript editor-pdf
// How do I get the background color in a PDF document?

// Get the background color using a widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBackgroundColor(rgbColor);
});
let bgColor = widgets[0].GetBackgroundColor();
textField.SetValue('Widgets background color is: ' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B);
```
