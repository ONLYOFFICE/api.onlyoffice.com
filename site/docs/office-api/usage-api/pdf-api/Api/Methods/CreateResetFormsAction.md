# CreateResetFormsAction

Creates a reset forms action.

## Syntax

```javascript
expression.CreateResetFormsAction(isAllExcept, names);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAllExcept | Required | boolean |  | will all fields be reset except the fields whose names are specified |
| names | Optional | string[] | [] | field names |

## Returns

[ApiHideShowFormsAction](../../ApiHideShowFormsAction/ApiHideShowFormsAction.md)

## Example

This example creates a reset forms action and assigns it to a button widget.

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

console.log('Reset action class type: ' + resetAction.GetClassType());
```
