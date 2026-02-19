# GetTextSize

Gets widget text size.\
💡  Text size === 0 means autofit 

## Syntax

```javascript
expression.GetTextSize();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[pt](../../Enumeration/pt.md)

## Example

This example gets field widget and displays it's text size.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextSize(15);
});
let textSize = widgets[0].GetTextSize();
textField.SetValue('Text size is: ' + textSize);


```
