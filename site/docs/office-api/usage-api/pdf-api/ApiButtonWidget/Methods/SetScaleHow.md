# SetScaleHow

Sets button widget scale how type

## Syntax

```javascript
expression.SetScaleHow(scaleHow);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| scaleHow | Required | [ButtonScaleHow](../../Enumeration/ButtonScaleHow.md) |  | The icon scaling mode. |

## Returns

boolean

## Example

Set button widget scale how type in a PDF document.

```javascript editor-pdf
// Apply scale how type such as 'proportional' to a button widget.

// Display the set scale how value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleHow('proportional');
widgets[0].SetLabel('Scale how is: ' + widgets[0].GetScaleHow());
```
