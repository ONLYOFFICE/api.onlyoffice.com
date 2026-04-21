# SetAutoFit

Sets text autofit.

## Syntax

```javascript
expression.SetAutoFit(bAuto);
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAuto | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Get all field widgets and set text autofit for them in a PDF document.

```javascript editor-pdf
// How do I set auto fit in a PDF document?

// Set auto fit using a widget object in a PDF document.

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
