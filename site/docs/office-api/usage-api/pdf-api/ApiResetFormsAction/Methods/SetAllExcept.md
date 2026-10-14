# SetAllExcept

Sets all fields be reset except the fields whose names are specified

## Syntax

```javascript
expression.SetAllExcept(isAllExcept);
```

`expression` - A variable that represents an [ApiResetFormsAction](../ApiResetFormsAction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAllExcept | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

This example creates a reset forms action and changes its all-except mode.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
textField.SetPartialName("myTextField");
page.AddObject(textField);

let buttonField = Api.CreateButtonField([10, 40, 160, 60]);
page.AddObject(buttonField);

let resetAction = Api.CreateResetFormsAction(false, ["myTextField"]);
let widgets = buttonField.GetAllWidgets();
widgets[0].GetActions().SetMouseUp(resetAction);

resetAction.SetAllExcept(true);
console.log('Is all except after change: ' + resetAction.IsAllExcept());
```
