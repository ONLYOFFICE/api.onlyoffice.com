# SetBorderStyle

Sets widget border style.

## Syntax

```javascript
expression.SetBorderStyle(sBorderStyle);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sBorderStyle | Required | [WidgetBorderStyle](../../Enumeration/WidgetBorderStyle.md) |  | No description provided. |

## Returns

boolean

## Example

Set field widgets border style in a PDF document.

```javascript editor-pdf
// How can I set border style using a widget in a PDF document?

// Set border style for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
let rgbColor = Api.RGB(255, 100, 0);
widgets.forEach(function(widget) {
    widget.SetBorderColor(rgbColor);
    widget.SetBorderStyle('inset');
});
```
