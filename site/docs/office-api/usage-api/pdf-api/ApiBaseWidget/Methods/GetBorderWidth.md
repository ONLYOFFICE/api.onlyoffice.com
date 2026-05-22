# GetBorderWidth

Gets widget border width.

## Syntax

```javascript
expression.GetBorderWidth();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[WidgetBorderWidth](../../Enumeration/WidgetBorderWidth.md)

## Example

Read the border width of a form field widget in a PDF.

```javascript editor-pdf
// How do I get the border width of a widget in a PDF?

// Retrieve the outline thickness of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
    widget.SetBorderWidth('thick');
});

textField.SetValue('Widgets border width is: ' + widgets[0].GetBorderWidth());
```
