# SetBehavior

Sets button widget behavior.

## Syntax

```javascript
expression.SetBehavior(sType);
```

`expression` - A variable that represents a [ApiButtonWidget](../ApiButtonWidget.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ButtonBehavior](../../Enumeration/ButtonBehavior.md) |  | No description provided. |

## Returns

boolean

## Example

Set button widget behavior type in a PDF document.

```javascript editor-pdf
// How do I set behavior in a PDF document?

// Set behavior using a button widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 120, 100]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
widgets[0].SetLayout('iconTextV');
widgets[0].SetBehavior('outline');
widgets[0].SetLabel('Behabior is: ' + widgets[0].GetBehavior());
```
