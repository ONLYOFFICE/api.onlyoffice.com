# SetIconYPos

Sets button widget icon y position.

## Syntax

```javascript
expression.SetIconYPos(nPosY);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosY | Required | [percentage](../../Enumeration/percentage.md) |  | No description provided. |

## Returns

boolean

## Example

Set field with image icon position Y to 0 in a PDF document.

```javascript editor-pdf
// How do I set icon y pos in a PDF document?

// Set icon y pos using a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetScaleWhen('never');
widgets[0].SetIconYPos(0);
```
