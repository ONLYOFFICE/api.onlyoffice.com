# SetFitBounds

Sets button widget fit bounds.

## Syntax

```javascript
expression.SetFitBounds(fit);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fit | Required | boolean |  | Specifies whether the icon is scaled to fit the button bounds. |

## Returns

boolean

## Example

Set button widget fit bounds property in a PDF document.

```javascript editor-pdf
// Enable or disable the fit bounds behavior for a button widget.

// Display the fit bounds status using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetFitBounds(true);
widgets[0].SetLabel('Fit bounds is: ' + widgets[0].IsFitBounds());
```
