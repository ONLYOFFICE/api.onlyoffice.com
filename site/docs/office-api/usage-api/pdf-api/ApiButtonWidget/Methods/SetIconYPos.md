# SetIconYPos

Sets button widget icon y position.

## Syntax

```javascript
expression.SetIconYPos(posY);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posY | Required | [percentage](../../Enumeration/percentage.md) |  | The vertical position of the icon as a percentage of the button height. |

## Returns

boolean

## Example

Set field image icon Y position in a PDF document.

```javascript editor-pdf
// Configure the vertical position of an icon in an image field.

// Apply the Y position value to a button widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
widgets[0].SetScaleWhen('never');
widgets[0].SetIconYPos(0);
```
