# GetBorderColor

Gets widget border color.

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Get field widget and display it's border color in a PDF document.

```javascript editor-pdf
// How to get the border color for a widget in a PDF document?

// Get the border color and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
});
let borderColor = widgets[0].GetBorderColor();
textField.SetValue('Widgets border color is: ' + borderColor.R + ',' + borderColor.G + ',' + borderColor.B);
```
