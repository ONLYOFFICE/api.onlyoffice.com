# SetBorderWidth

Sets widget border width.

## Syntax

```javascript
expression.SetBorderWidth(borderWidth);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderWidth | Required | [WidgetBorderWidth](../../Enumeration/WidgetBorderWidth.md) |  | the width to set to the border. |

## Returns

boolean

## Example

Set the border thickness for field widgets in a PDF.

```javascript editor-pdf
// How do I change the border width for widgets in a PDF?

// Apply different border thicknesses to widget outlines in a PDF.

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
```
