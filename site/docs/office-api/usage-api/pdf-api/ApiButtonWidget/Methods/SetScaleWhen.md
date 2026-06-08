# SetScaleWhen

Sets button widget scale when type

## Syntax

```javascript
expression.SetScaleWhen(scaleWhen);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| scaleWhen | Required | [ButtonScaleWhen](../../Enumeration/ButtonScaleWhen.md) |  | The condition that controls when the icon is scaled. |

## Returns

boolean

## Example

Set button widget scale when type in a PDF document.

```javascript editor-pdf
// Configure when to scale the button icon using scale when property.

// Display the set scale when value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleWhen('always');
widgets[0].SetLabel('Scale when is: ' + widgets[0].GetScaleWhen());
```
