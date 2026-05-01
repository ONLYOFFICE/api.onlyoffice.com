# GetAllWidgets

Gets array with widgets of the current field.

## Syntax

```javascript
expression.GetAllWidgets();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWidget](../../Enumeration/ApiWidget.md)[]

## Example

Get all field widgets and set border color for them in a PDF document.

```javascript editor-pdf
// How to get all widgets for a base field in a PDF document?

// Get all widgets and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
});
```
