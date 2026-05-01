# SetScaleWhen

Sets button widget scale when type

## Syntax

```javascript
expression.SetScaleWhen(sType);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ButtonScaleWhen](../../Enumeration/ButtonScaleWhen.md) |  | button widget scale when type |

## Returns

boolean

## Example

Set button widget scale when type in a PDF document.

```javascript editor-pdf
// How to set scale when for a button widget in a PDF document?

// Set scale when and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleWhen('always');
widgets[0].SetLabel('Scale when is: ' + widgets[0].GetScaleWhen());
```
