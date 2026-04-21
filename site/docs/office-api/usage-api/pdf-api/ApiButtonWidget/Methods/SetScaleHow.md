# SetScaleHow

Sets button widget scale how type

## Syntax

```javascript
expression.SetScaleHow(sType);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ButtonScaleHow](../../Enumeration/ButtonScaleHow.md) |  | button widget scale how type |

## Returns

boolean

## Example

Set button widget scale how type in a PDF document.

```javascript editor-pdf
// How do I set scale how in a PDF document?

// Set scale how using a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetScaleHow('proportional');
widgets[0].SetLabel('Scale how is: ' + widgets[0].GetScaleHow());
```
