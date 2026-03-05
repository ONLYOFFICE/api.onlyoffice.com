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

This example gets field widget and displays it's text autofit property.

```javascript editor-pdf
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
