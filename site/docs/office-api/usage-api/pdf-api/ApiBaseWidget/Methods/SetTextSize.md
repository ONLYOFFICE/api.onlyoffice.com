# SetTextSize

Sets widget text size.
💡  Text size === 0 means autofit 

## Syntax

```javascript
expression.SetTextSize(size);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| size | Required | [pt](../../Enumeration/pt.md) |  | The font size in points. |

## Returns

boolean

## Example

Set text size for input field widgets in a PDF.

```javascript editor-pdf
// How do I change the font size of text in form fields in a PDF?

// Adjust the text display size for all widgets in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetTextColor(rgbColor);
    widget.SetTextSize(15);
});
```
