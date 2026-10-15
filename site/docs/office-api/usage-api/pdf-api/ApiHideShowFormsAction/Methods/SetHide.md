# SetHide

Sets action hide fields

## Syntax

```javascript
expression.SetHide(isHide);
```

`expression` - A variable that represents an [ApiHideShowFormsAction](../ApiHideShowFormsAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHide | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

This example creates a hide-show action and toggles it to show the fields instead.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myTextField");
page.AddObject(textField);

let buttonField = Api.CreateButtonField([10, 40, 160, 60]);
page.AddObject(buttonField);

let hideAction = Api.CreateHideShowFormsAction(true, ["myTextField"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(hideAction);

hideAction.SetHide(false);
console.log('Is hide after change: ' + hideAction.IsHide());
```
