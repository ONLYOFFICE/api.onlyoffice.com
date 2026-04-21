# Delete

Removes widget from parent field.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove the widget from parent field in a PDF document.

```javascript editor-pdf
// How can I delete using a widget in a PDF document?

// Delete for a widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets[0].Delete();
```
