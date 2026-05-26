# IsAutoFit

Checks if text is autofit.

## Syntax

```javascript
expression.IsAutoFit();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check if automatic text fitting is enabled for a widget in a PDF.

```javascript editor-pdf
// How do I determine if a widget has autofit enabled in a PDF?

// Retrieve and display the autofit status for a widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetAutoFit(true);
});
let bgColor = widgets[0].GetTextColor();
textField.SetValue('Widgets text autofit is: ' + widgets[0].IsAutoFit());
```
