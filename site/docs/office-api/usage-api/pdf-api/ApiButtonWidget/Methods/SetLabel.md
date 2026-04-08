# SetLabel

Sets label to button widget field.

## Syntax

```javascript
expression.SetLabel(sLabel, sApType);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLabel | Required | string |  | button label |
| sApType | Optional | [ButtonAppearance](../../Enumeration/ButtonAppearance.md) | 'normal' | for what state is the label set |

## Returns

boolean

## Example

This example sets button widget labels.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('push');

widgets[0].SetLabel('Normal label', 'normal');
widgets[0].SetLabel('Down label', 'down');
widgets[0].SetLabel('Hover label', 'hover');
```
