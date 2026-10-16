# CreateHideShowFormsAction

Creates a hide-show forms action.

## Syntax

```javascript
expression.CreateHideShowFormsAction(isHidde, names);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHidde | Required | boolean |  | to hide - true, to show - false |
| names | Optional | string[] | [] | field names |

## Returns

[ApiHideShowFormsAction](../../ApiHideShowFormsAction/ApiHideShowFormsAction.md)

## Example

This example creates a hide-show action that hides a text field when a button is clicked.

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

console.log('Hide action class type: ' + hideAction.GetClassType());
```
