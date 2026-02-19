# GetTextColor

Gets widget text color.

## Syntax

```javascript
expression.GetTextColor();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example gets field widget and displays it's text color.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetTextColor(rgbColor);
});
let bgColor = widgets[0].GetTextColor();
textField.SetValue('Widgets text color is: ' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B);


```
