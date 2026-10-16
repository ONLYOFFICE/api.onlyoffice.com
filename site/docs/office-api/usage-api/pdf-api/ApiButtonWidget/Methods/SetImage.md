# SetImage

Sets image to button widget field.

:::note
Doesn't work with "textOnly" layout.
:::

## Syntax

```javascript
expression.SetImage(imageUrl, appearance);
```

`expression` - A variable that represents an [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | Optional | string | "" | The URL of the image to set for the button widget (currently only internet URL or Base64 encoded images are supported) |
| appearance | Optional | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | "normal" | The appearance state. |

## Returns

boolean

## Example

Set image for button widget in a PDF document.

```javascript editor-pdf
// Assign an image resource to an image field with normal state.

// Add the image field to a PDF page.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);

let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
```
