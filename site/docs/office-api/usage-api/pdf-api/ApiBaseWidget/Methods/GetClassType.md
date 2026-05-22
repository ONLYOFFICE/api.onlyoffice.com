# GetClassType

Returns a type of the ApiBaseWidget class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiBaseWidget](../ApiBaseWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"baseWidget"

## Example

Get the widget type classification in a PDF.

```javascript editor-pdf
// How do I identify what kind of widget this is in a PDF?

// Determine the class category of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
textField.SetValue(widgets[0].GetClassType());
```
