# SetAutoFit

Sets text autofit.

## Syntax

```javascript
expression.SetAutoFit(auto);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| auto | Required | boolean |  | Specifies whether text autofit is enabled. |

## Returns

boolean

## Example

Enable automatic text fitting for all field widgets in a PDF.

```javascript editor-pdf
// How do I set autofit for field widgets in a PDF?

// Apply autofit to scale text to fit widget boundaries in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
let widgets = textField.GetAllWidgets();
widgets.forEach(function(widget) {
    widget.SetAutoFit(true);
});
```
