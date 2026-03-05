# CreateImageField

Creates a image field.

## Syntax

```javascript
expression.CreateImageField(aRect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aRect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiButtonField](../../ApiButtonField/ApiButtonField.md)

## Example

How to create and add a field with image to document.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let imageField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(imageField);
let widgets = imageField.GetAllWidgets();
widgets[0].SetImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png', 'normal');
```
