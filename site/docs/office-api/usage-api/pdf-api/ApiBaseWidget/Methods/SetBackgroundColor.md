# SetBackgroundColor

Sets widget background color.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

boolean

## Example

Get all field widgets and set background color for them in a PDF document.

```javascript editor-pdf
// How do I set background color in a PDF document?

// Set background color using a widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBackgroundColor(rgbColor);
});
```
