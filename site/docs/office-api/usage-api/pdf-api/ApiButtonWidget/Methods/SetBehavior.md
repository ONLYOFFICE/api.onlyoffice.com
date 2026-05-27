# SetBehavior

Sets button widget behavior.

## Syntax

```javascript
expression.SetBehavior(behavior);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| behavior | Required | [ButtonBehavior](../../Enumeration/ButtonBehavior.md) |  | The highlight behavior when the button is clicked. |

## Returns

boolean

## Example

Set button widget behavior type in a PDF document.

```javascript editor-pdf
// Apply behavior type such as 'outline' to a button widget.

// Display the set behavior value using the widget label.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behabior is: ' + widgets[0].GetBehavior());
```
