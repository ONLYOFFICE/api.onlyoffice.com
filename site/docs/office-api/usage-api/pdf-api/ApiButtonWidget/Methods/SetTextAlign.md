# SetTextAlign

Sets widget text alignment.

:::note
Only for text/combobox/listbox fields widgets.
:::

Inherited from [ApiBaseWidget.SetTextAlign](../../ApiBaseWidget/Methods/SetTextAlign.md).

## Syntax

```javascript
expression.SetTextAlign(textAlign);
```

`expression` - A variable that represents an [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textAlign | Required | [WidgetTextAlign](../../Enumeration/WidgetTextAlign.md) |  | The text alignment. |

## Returns

boolean

## Example

Set the text alignment for field widgets in a PDF.

```javascript editor-pdf
// How do I align text in form field widgets in a PDF?

// Center the text displayed in all widgets of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetTextAlign('center');
});
```
