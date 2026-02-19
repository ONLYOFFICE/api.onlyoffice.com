# SetImage

Sets image to button widget field.

## Syntax

```javascript
expression.SetImage(sImageUrl, sApType);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Optional | string | '' | image url |
| sApType | Optional | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | 'normal' | for what state is the picture set |

## Returns

boolean

## Example

This example sets image for field with image.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
```
