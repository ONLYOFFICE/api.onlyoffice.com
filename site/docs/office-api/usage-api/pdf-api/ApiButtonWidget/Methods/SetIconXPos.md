# SetIconXPos

Sets button widget icon x position.

## Syntax

```javascript
expression.SetIconXPos(nPosX);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosX | Required | [percentage](../../Enumeration/percentage.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets field with image icon position X to 0.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetScaleWhen('never');
widgets[0].SetIconXPos(0);
```
