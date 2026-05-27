# SetLayout

Sets button widget layout type

## Syntax

```javascript
expression.SetLayout(layout);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| layout | Required | [ButtonLayout](../../Enumeration/ButtonLayout.md) |  | The button layout. |

## Returns

boolean

## Example

Set button widget layout type in a PDF document.

```javascript editor-pdf
// Apply layout type such as 'iconTextV' to a button widget.

// Display the set layout value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetLabel('Layout is: ' + widgets[0].GetLayout());
```
