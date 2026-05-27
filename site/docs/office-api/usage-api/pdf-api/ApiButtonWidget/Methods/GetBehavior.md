# GetBehavior

Gets button widget behavior.

## Syntax

```javascript
expression.GetBehavior();
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ButtonBehavior](../../Enumeration/ButtonBehavior.md)

## Example

Retrieve the behavior type of a button widget in a PDF.

```javascript editor-pdf
// How do I find the button behavior setting in a PDF?

// Display the behavior configuration for a button widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behavior is: ' + widgets[0].GetBehavior());
```
